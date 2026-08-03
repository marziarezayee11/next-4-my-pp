import Link from "next/link";
import Image from "next/image";
import products from "../../../../public/db.ts/product";


export const metadata ={
  title:"product page"
}
export default function ProductsPage() {
  return (
    <div className="h-screen w-full bg-linear-100 from-[#cdf1f1] to-[#aed3e1] via-[#c7ddeb]">
    <div className="flex justify-center items-center w-full h-screen">
      {products.map((product) => (
        <Link key={product.id} href={`/Product/${product.id}`}>
          <div className=" p-3 rounded cursor-pointer">
            <Image
            className="rounded-2xl"
              src={product.images[0]}
              alt={product.name}
              width={300}
              height={350}
            />

            <h2 className="font-bold ml-2">{product.name}</h2>
            <p className="font-extrabold ml-2">${product.price}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}