import chocolateCake from "../assets/HomeIcon/chocolate-cake.jpg";
import pancake from "../assets/HomeIcon/pancake.jpg";
import orangeCake from "../assets/HomeIcon/orange-cake.jpg";
import fruitCake from "../assets/HomeIcon/fruit-cake.jpg";

export type ProductTypes = {
  id: number;
  name: string;
  price: string;
  oldPrice: string;
  rating: string;
  reviews: number;
  image: string;
  description?: string;
};

export const products: ProductTypes[] = [
  {
    id: 1,
    name: "Rich Chocolate Truffle Cake",
    price: "$500",
    oldPrice: "$620",
    rating: "★★★★★",
    reviews: 500,
    image: chocolateCake,
    description:
      "A decadent layered chocolate cake covered with rich chocolate truffle ganache, topped with chocolate shavings. Perfect for chocolate lovers and special celebrations.",
  },
  {
    id: 2,
    name: "Choco Chip Truffle Cake",
    price: "$509",
    oldPrice: "$640",
    rating: "★★★★★",
    reviews: 300,
    image: pancake,
    description:
      "Soft chocolate sponge layered with chocolate chips and creamy truffle frosting, finished with a generous topping of choco chips for extra crunch. [With Banana & walnut]",
  },
  {
    id: 3,
    name: "Tropical Fruit N Almond Cake",
    price: "$59",
    oldPrice: "$6590",
    rating: "★★★★☆",
    reviews: 700,
    image: orangeCake,
    description:
      "A refreshing vanilla sponge cake layered with fresh tropical fruits and topped with crunchy almond flakes. Light, fruity, and irresistibly fresh.",
  },
  {
    id: 4,
    name: "Rich Butterscotch Crunch Cake",
    price: "$399",
    oldPrice: "$520",
    rating: "★★★★★",
    reviews: 500,
    image: fruitCake,
    description:
      "Layers of soft butterscotch sponge filled with caramelized butterscotch crunch and topped with golden praline pieces for that signature crunch.",
  },
];