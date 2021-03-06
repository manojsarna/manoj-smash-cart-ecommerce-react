import { v4 as uuid } from "uuid";
import images from "../assets/images";
// Sponsored , New , Bestseller , Sale
export const products = [
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "Bestseller",
    image: images.products.p1,
    imageAlt: "badminton",
    title: "Yonex Astrox 88 S Play",
    categoryName: "Rackets",
    category: "rackets",
    brandName: "Yonex",
    brand: "yonex",
    description:
      "Yonex Astrox 88-S of the Astrox series in YONEX is for advanced level players that dominate the game from front court",
    price: {
      current: 1249,
      previous: 1750,
    },
    currency: "₹",
    discount: 29,
    rating: 3.9,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "New",
    image: images.products.p2,
    imageAlt: "badminton",
    title: "Lining Wind Lite Stealth - Black & Charcoal",
    categoryName: "Rackets",
    category: "rackets",
    brandName: "Lining",
    brand: "lining",
    description:
      "The Lining Wind Lite Stealth is a powerful racket that helps you maintain momentum throughout the game. This Superlight technology-powered racket hands you the advantage of invisible force",
    price: {
      current: 3390,
      previous: 6590,
    },
    currency: "₹",
    discount: 49,
    rating: 4.1,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "Sale",
    image: images.products.p3,
    imageAlt: "badminton",
    title: "Carlton Zero 002I HL",
    categoryName: "Rackets",
    category: "rackets",
    brandName: "Carlton",
    brand: "carlton",
    description:
      "Carlton Zero 002 is an advanced level racket. It is best suited for players who play a dominating game with their forehands and backhands.",
    price: {
      current: 6050,
      previous: 11000,
    },
    currency: "₹",
    discount: 45,
    rating: 4.7,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "Sponsored",
    image: images.products.p4,
    imageAlt: "badminton",
    title: "Victor DriveX 9X",
    categoryName: "Rackets",
    category: "rackets",
    brandName: "Victor",
    brand: "victor",
    description:
      "Victor DX-9X DriveX Series is a advance level racket. The even balanced stiff flex racket provides the right amount of Power and strength.",
    price: {
      current: 11830,
      previous: 16900,
    },
    currency: "₹",
    discount: 30,
    rating: 4.3,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p4,
    imageAlt: "badminton",
    title: "Victor DriveX 9X",
    categoryName: "Rackets",
    category: "rackets",
    brandName: "Yonex",
    brand: "yonex",
    description:
      "Victor DX-9X DriveX Series is a advance level racket. The even balanced stiff flex racket provides the right amount of Power and strength.",
    price: {
      current: 11830,
      previous: 16900,
    },
    currency: "₹",
    discount: 30,
    rating: 4.3,
    inStock: false,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p5,
    imageAlt: "badminton",
    title: "YONEX Active 2 Way Tournament Racket Bag",
    categoryName: "Kitbags",
    category: "kitbags",
    brandName: "Yonex",
    brand: "yonex",
    description:
      "This racket bag is made of durable material. It is comes with a separate compartment for shoes as well.",
    price: {
      current: 4310,
      previous: 5390,
    },
    currency: "₹",
    discount: 20,
    rating: 3.8,
    inStock: true,
  },

  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p6,
    imageAlt: "badminton",
    title: "Lining Racket Bag",
    categoryName: "Kitbags",
    category: "kitbags",
    brandName: "Lining",
    brand: "lining",
    description:
      "This kitbag is made of durable material. It is comes with a separate compartment for shoes as well.",
    price: {
      current: 2360,
      previous: 4890,
    },
    currency: "₹",
    discount: 52,
    rating: 4.1,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p7,
    imageAlt: "badminton",
    title: "Carlton C AC Kinesis Pro Xl 3",
    categoryName: "Kitbags",
    category: "kitbags",
    brandName: "Carlton",
    brand: "carlton",
    description:
      "This kitbag is made of durable material. It is comes with a separate compartment for shoes as well.",
    price: {
      current: 6300,
      previous: 9000,
    },
    currency: "₹",
    discount: 30,
    rating: 4.5,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p8,
    imageAlt: "badminton",
    title: "Victor ASB 362 Shoe Bag",
    categoryName: "Kitbags",
    category: "kitbags",
    brandName: "Victor",
    brand: "victor",
    description:
      "This kitbag is made of durable material. It is comes with a separate compartment for shoes as well.",
    price: {
      current: 500,
      previous: 625,
    },
    currency: "₹",
    discount: 20,
    rating: 3.1,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p8,
    imageAlt: "badminton",
    title: "Victor ASB 362 Shoe Bag",
    categoryName: "Kitbags",
    category: "kitbags",
    brandName: "Lining",
    brand: "lining",
    description:
      "This kitbag is made of durable material. It is comes with a separate compartment for shoes as well.",
    price: {
      current: 500,
      previous: 625,
    },
    currency: "₹",
    discount: 20,
    rating: 3.1,
    inStock: false,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p9,
    imageAlt: "badminton",
    title: "YONEX Power Cushion Infinity Unisex Shoe",
    categoryName: "Shoes",
    category: "shoes",
    brandName: "Yonex",
    brand: "yonex",
    description:
      "This Power Cushion Infinity shoe is a unisex shoe that provides great comfort. The upper and middle sole is made of synthetic fiber and resin and the outsole is made of rubber",
    price: {
      current: 13195,
      previous: 18850,
    },
    currency: "₹",
    discount: 30,
    rating: 4.5,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p10,
    imageAlt: "badminton",
    title: "Lining Ultra Fly Men Shoe",
    categoryName: "Shoes",
    category: "shoes",
    brandName: "Lining",
    brand: "lining",
    description:
      "Lining Ultra Fly Badminton Shoes weighing only 310 grams, The court is your own backyard. Get ready to take flight on the court with wings. the Li-Ning Ultra Fly non-marking shoe is armored with spring.",
    price: {
      current: 3990,
      previous: 5200,
    },
    currency: "₹",
    discount: 25,
    rating: 3.9,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p11,
    imageAlt: "badminton",
    title: "Victor Power Cushion Comfort Z Men",
    categoryName: "Shoes",
    category: "shoes",
    brandName: "Victor",
    brand: "victor",
    description:
      "This shoe comes with unique power cushion and was manufactured using synthetic fiber and PU material. This offers excellent durability and comfort.",
    price: {
      current: 9590,
      previous: 11000,
    },
    currency: "₹",
    discount: 20,
    rating: 3.5,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p12,
    imageAlt: "badminton",
    title: "Carlton Neo X-5 Men Shoe ",
    categoryName: "Shoes",
    category: "shoes",
    brandName: "Carlton",
    brand: "carlton",
    description:
      "This Power Cushion Infinity shoe is a unisex shoe that provides great comfort. The upper and middle sole is made of synthetic fiber and resin and the outsole is made of rubber",
    price: {
      current: 3565,
      previous: 7125,
    },
    currency: "₹",
    discount: 50,
    rating: 3.3,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p12,
    imageAlt: "badminton",
    title: "Carlton Neo X-5 Men Shoe ",
    categoryName: "Shoes",
    category: "shoes",
    brandName: "Victor",
    brand: "victor",
    description:
      "This Power Cushion Infinity shoe is a unisex shoe that provides great comfort. The upper and middle sole is made of synthetic fiber and resin and the outsole is made of rubber",
    price: {
      current: 3565,
      previous: 7125,
    },
    currency: "₹",
    discount: 50,
    rating: 3.3,
    inStock: false,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p13,
    imageAlt: "badminton",
    title: "YONEX Aerosensa 30 Feather Shuttle Cock",
    categoryName: "Shuttles",
    category: "shuttles",
    brandName: "Yonex",
    brand: "yonex",
    description:
      "YONEX Aerosensa 30 Feather Shuttlecock is manufactured to ensure the desired speed and consistency. It is extensively checked and tested making it an ideal choice for tournaments.",
    price: {
      current: 2890,
      previous: 3325,
    },
    currency: "₹",
    discount: 13,
    rating: 4.7,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p14,
    imageAlt: "badminton",
    title: "Lining SG-Gold Speed 76 Feather Shuttlecock",
    categoryName: "Shuttles",
    category: "shuttles",
    brandName: "Lining",
    brand: "lining",
    description:
      "Li-Ning SG-Gold Speed 76 Feather Shuttlecock belongs to the premium quality shuttles range from Li-Ning. It is made of natural cork base and duck feather skirt. It offers quite medium speed.",
    price: {
      current: 1890,
      previous: 2800,
    },
    currency: "₹",
    discount: 35,
    rating: 4.1,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p15,
    imageAlt: "badminton",
    title: "Victor Master No 3 Feather Shuttlecock",
    categoryName: "Shuttles",
    category: "shuttles",
    brandName: "Victor",
    brand: "victor",
    description:
      "Victor Master No 3 Feather Shuttlecock is made of composite material and goose feathered skirt. The composite material provides uniform weight distribution. It offers fast speed.",
    price: {
      current: 2660,
      previous: 3800,
    },
    currency: "₹",
    discount: 30,
    rating: 3.8,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p16,
    imageAlt: "badminton",
    title: "Carlton Forza S-5000 Speed 76 Feather Shuttlecock",
    categoryName: "Shuttles",
    category: "shuttles",
    brandName: "Carlton",
    brand: "carlton",
    description:
      "Carlton Forza S-5000 Speed 76 Feather Shuttlecock is made of composite material and goose feathered skirt. The composite material provides uniform weight distribution. It offers fast speed.",
    price: {
      current: 1650,
      previous: 2400,
    },
    currency: "₹",
    discount: 34,
    rating: 3.6,
    inStock: true,
  },
  {
    _id: uuid(),
    tag: "Top",
    badgeName: "",
    image: images.products.p16,
    imageAlt: "badminton",
    title: "Carlton Forza S-5000 Speed 76 Feather Shuttlecock",
    categoryName: "Shuttles",
    category: "shuttles",
    brandName: "Carlton",
    brand: "carlton",
    description:
      "Carlton Forza S-5000 Speed 76 Feather Shuttlecock is made of composite material and goose feathered skirt. The composite material provides uniform weight distribution. It offers fast speed.",
    price: {
      current: 1650,
      previous: 2400,
    },
    currency: "₹",
    discount: 34,
    rating: 3.6,
    inStock: false,
  },
];
