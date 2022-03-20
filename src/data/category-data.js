import { v4 as uuid } from "uuid";
import images from "../assets/images";
export const categories = [
  {
    _id: uuid(),
    categoryName: "Rackets",
    value: "rackets",
    image: images.categories.rackets,
  },
  {
    _id: uuid(),
    categoryName: "Kitbags",
    value: "kitbags",
    image: images.categories.kitbags,
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    value: "shoes",
    image: images.categories.shoes,
  },
  {
    _id: uuid(),
    categoryName: "Shuttles",
    value: "shuttles",
    image: images.categories.shuttles,
  },
];
