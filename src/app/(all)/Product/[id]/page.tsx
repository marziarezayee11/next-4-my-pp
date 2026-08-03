import Image from "next/image";
import Link from "next/link";
import products from "../../../../public/db.ts/product";
import { notFound } from "next/navigation";
type Props = {
  params: Promise<{
    id: string;
  }>;
};

export default async function ProductDetails({ params }: Props) {
  const { id } = await params;

  const product = products.find(
    (item) => item.id === Number(id)
  );

  if (!product) {
   notFound();
  }

  const similarProducts = products.filter(
    (item) =>
      item.category === product.category &&
      item.id !== product.id
  );

  return (
    <div className="p-5 bg-linear-100 from-[#cdf1f1] to-[#aed3e1] via-[#c7ddeb]">

      <h1 className="text-3xl font-bold mt-25 text-center m-3">
        {product.name}
      </h1>

      <Image className="rounded-2xl m-auto "
        src={product.images[0]}
        alt={product.name}
        width={300}
        height={350}
      />

      <h2 className="text-center mt-2 font-extrabold">
        Price : ${product.price}
      </h2>

      <h3 className="mt-5 font-bold text-center">
        Sizes
      </h3>

      <div className="flex gap-2 justify-center items-center ">
        {product.sizes.map((size) => (
          <button
            key={size}
            className="border px-4 py-2 shadow-3xl border-[#eee]"
          >
            {size}
          </button>
        ))}
      </div>

      <h3 className="mt-5 font-bold text-center">
        Colors
      </h3>

      <div className="flex gap-2 justify-center items-center">
        {product.colors.map((color) => (
          <button
            key={color}
            className="border px-3 py-1 shadow-2xl border-[#eee]"
          >
            {color}
          </button>
        ))}
      </div>

      <p className="mt-5 text-center font-extralight">
        {product.description}
      </p>

      <hr className="my-10" />

      <h2 className="text-2xl font-bold text-center">
        Similar Products
      </h2>

      <div className="flex justify-center items-center gap-5 mt-">
        {similarProducts.map((item) => (
          <Link
            key={item.id}
            href={`/Product/${item.id}`}
          >
            <div className="rounded-3xl p-3 ">

              <Image
              className="rounded-2xl"
                src={item.images[0]}
                alt={item.name}
                width={200}
                height={250}
              />

              <h3 className="font-extrabold mt-1">{item.name}</h3>

              <p className=" font-extralight">${item.price}</p>

            </div>
          </Link>
        ))}
      </div>

    </div>
  );
}