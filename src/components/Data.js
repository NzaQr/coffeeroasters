import espresso from "../assets/gran-espresso.png";
import planalto from "../assets/planalto.png";
import piccollo from "../assets/piccollo.png";
import danche from "../assets/danche.png";
import bean from "../assets/coffee-bean.svg";
import gift from "../assets/gift.svg";
import truck from "../assets/truck.svg";
const data = {
  0: {
    collectionData: [
      {
        img: espresso,
        name: "Gran Espresso",
        description:
          "Light and flavorful blend with cocoa and black pepper for an intense experience",
      },
      {
        img: planalto,
        name: "Planalto",
        description:
          "Brazilian dark roast with rich and velvety body, and hints of fruits and nuts",
      },
      {
        img: piccollo,
        name: "Piccollo",
        description:
          "Mild and smooth blend featuring notes of toasted almond and dried cherry",
      },
      {
        img: danche,
        name: "Danche",
        description:
          "Ethiopian hand-harvested blend densely packed with vibrant fruit notes",
      },
    ],
  },
  1: {
    featuresData: [
      {
        img: bean,
        title: "Best quality",
        description:
          "Discover an endless variety of the world’s best artisan coffee from each of our roasters.",
      },
      {
        img: gift,
        title: "Exclusive benefits",
        description:
          "Special offers and swag when you subscribe, including 30% off your first shipment.",
      },
      {
        img: truck,
        title: "Free shipping",
        description:
          "We cover the cost and coffee is delivered fast. Peak freshness: guaranteed.",
      },
    ],
  },
};
export default data;
