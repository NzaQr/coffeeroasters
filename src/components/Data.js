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

  4: {
    createPlan: [
      {
        id: 0,
        title: "How do you drink your coffee?",
        options: [
          {
            sub_id: 0,
            optionTitle: "Capsule",
            description:
              "Compatible with Nespresso systems and similar brewers",
          },
          {
            sub_id: 1,
            optionTitle: "Filter",
            description:
              "For pour over or drip methods like Aeropress, Chemex, and V60",
          },
          {
            sub_id: 2,
            optionTitle: "Espresso",
            description:
              "Dense and finely ground beans for an intense, flavorful experience",
          },
        ],
      },
      {
        id: 1,
        title: "What type of coffee?",
        options: [
          {
            sub_id: 0,
            optionTitle: "Single origin",
            description:
              "Distinct, high quality coffee from a specific family-owned farm",
          },
          {
            sub_id: 1,
            optionTitle: "Decaf",
            description:
              "Just like regular coffee, except the caffeine has been removed",
          },
          {
            sub_id: 2,
            optionTitle: "Blended",
            description:
              "Combination of two or three dark roasted beans of organic coffees",
          },
        ],
      },
      {
        id: 2,
        title: "How much would you like?",
        options: [
          {
            sub_id: 0,
            optionTitle: "250g",
            description:
              "Perfect for the solo drinker. Yields about 12 delicious cups.",
          },
          {
            sub_id: 1,
            optionTitle: "500g",
            description:
              "Perfect option for a couple. Yields about 40 delectable cups.",
          },
          {
            sub_id: 2,
            optionTitle: "1000g",
            description:
              "Perfect for offices and events. Yields about 90 delightful cups.",
          },
        ],
      },
      {
        id: 3,
        title: "Want us to grind them?",
        options: [
          {
            sub_id: 0,
            optionTitle: "Wholebean",
            description:
              "Best choice if you cherish the full sensory experience",
          },
          {
            sub_id: 1,
            optionTitle: "Filter",
            description:
              "For pour over or drip methods like Aeropress, Chemex, and V60",
          },
          {
            sub_id: 2,
            optionTitle: "Cafetiére",
            description:
              "Coarse ground beans specially suited for french press coffee",
          },
        ],
      },
      {
        id: 4,
        title: "How often should we deliver?",
        options: [
          {
            sub_id: 0,
            optionTitle: "Every week",
            description:
              "$14.00 per shipment. Includes free first-class shipping.",
          },
          {
            sub_id: 1,
            optionTitle: "Every 2 weeks",
            description:
              "$17.25 per shipment. Includes free priority shipping.",
          },
          {
            sub_id: 2,
            optionTitle: "Espresso",
            description:
              "$22.50 per shipment. Includes free priority shipping.",
          },
        ],
      },
    ],
  },
};
export default data;
