import { v4 as uuid } from "uuid";
import images from "../../assets/images";
export const categories = [
  {
    _id: uuid(),
    categoryName: "Rackets",
    category: "rackets",
    image: images.categories.rackets,
  },
  {
    _id: uuid(),
    categoryName: "Kitbags",
    category: "kitbags",
    image: images.categories.kitbags,
  },
  {
    _id: uuid(),
    categoryName: "Shoes",
    category: "shoes",
    image: images.categories.shoes,
  },
  {
    _id: uuid(),
    categoryName: "Shuttles",
    category: "shuttles",
    image: images.categories.shuttles,
  },
];
