import espresso from "../assets/gran-espresso.png";
import planalto from "../assets/planalto.png";
import piccollo from "../assets/piccollo.png";
import danche from "../assets/danche.png";
import bean from "../assets/coffee-bean.svg";
import gift from "../assets/gift.svg";
import truck from "../assets/truck.svg";
import UK from "../assets/uk.svg";
import CA from "../assets/canada.svg";
import AU from "../assets/australia.svg";
const data = {
  0: {
    collection: [
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
    features: [
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
  2: {
    steps: [
      {
        num: "01",
        title: "Pick your coffee",
        description:
          " Select from our evolving range of artisan coffees. Our beans are ethically sourced and we pay fair prices for them. There are new coffees in all profiles every month for you to try out. ",
      },
      {
        num: "02",
        title: "Choose the frequency",
        description:
          " Customize your order frequency, quantity, even your roast style and grind type. Pause, skip or cancel your subscription with no commitment through our online portal. ",
      },
      {
        num: "03",
        title: "Receive and enjoy!",
        description:
          " We ship your package within 48 hours, freshly roasted. Sit back and enjoy award-winning world-class coffees curated to provide a distinct tasting experience. ",
      },
    ],
  },
  3: {
    locations: [
      {
        img: UK,
        country: "United Kingdom",
        street: "68 Asfordby Rd",
        city: "Alcaston",
        PC: "SY6 1YA",
        number: "+44 1241 918425",
      },
      {
        img: CA,
        country: "Canada",
        street: "1528 Eglinton Avenue",
        city: "Toronto",
        PC: "Ontario M4P 1A6",
        number: "+1 416 485 2997",
      },
      {
        img: AU,
        country: "Australia",
        street: "36 Swanston Street",
        city: "Kewell",
        PC: "Victoria",
        number: "+61 4 9928 3629",
      },
    ],
  },
};
export default data;
