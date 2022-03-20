import { v4 as uuid } from "uuid";
import images from "../assets/images";
export const brands = [
  {
    _id: uuid(),
    brandName: "Yonex",
    value: "yonex",
    image: images.brands.yonex,
  },
  {
    _id: uuid(),
    brandName: "Lining",
    value: "lining",
    image: images.brands.lining,
  },
  {
    _id: uuid(),
    brandName: "Victor",
    value: "victor",
    image: images.brands.victor,
  },
  {
    _id: uuid(),
    brandName: "Carlton",
    value: "carlton",
    image: images.brands.carlton,
  },
];
