import { v4 as uuid } from "uuid";
import images from "../assets/images";
export const brands = [
  {
    _id: uuid(),
    brandName: "Yonex",
    brand: "yonex",
    image: images.brands.yonex,
  },
  {
    _id: uuid(),
    brandName: "Lining",
    brand: "lining",
    image: images.brands.lining,
  },
  {
    _id: uuid(),
    brandName: "Victor",
    brand: "victor",
    image: images.brands.victor,
  },
  {
    _id: uuid(),
    brandName: "Carlton",
    brand: "carlton",
    image: images.brands.carlton,
  },
];
