export interface product{
  id:number,
  name:string,
  category:string,
  price:number,
  images:string[],
  sizes:string[],
  colors:string[],
  description:string,
}


 export const products = [
  {
    id: 1,
    name: "Black Dress",
    category: "dress",
    price: 1200,
    images: [
      "/images/black7.jpg",
      "/images/black2.jpg",
      "/images/black3.jpg",
    ],
    sizes: ["S", "M", "L"],
    colors: ["Black", "Red", "White"],
    description: "Beautiful withe flower",
  },
  {
    id: 2,
    name: "Red Dress",
    category: "dress",
    price: 1500,
    images: [
      "/images/red1.jpg",
      "/images/red2.jpg",
      "/images/red2.jpg",

    ],
    sizes: ["M", "L", "XL"],
    colors: ["Red", "Black"],
    description: "Elegant red dress",
  },
  {
    id: 3,
    name: "Blue Shirt",
    category: "shirt",
    price: 900,
    images: [
      "/images/shirt1.jpg",
    ],
    sizes: ["M", "XL"],
    colors: ["Blue"],
    description: "Blue shirt",
  },
];

export default products;
