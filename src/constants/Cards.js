import vodopad from "./../assets/vodopad.jpg";
import Bali2 from "./../assets/Bali2.jpg";
import islands2 from "./../assets/islands2.jpg";
import Himalayas2 from "./../assets/Himalayas2.jpg";
import desert2 from "./../assets/desert2.jpg";
import Europe from "./../assets/Europe.png";

export const CARDS = [
  {
    id: 1,
    img: <img src={vodopad} alt="Travel Img" className="img" />,
    text: "Explore the hidden waterfall deep inside the Amazon Jungle",
    label: "Adventure",
    path: "/dashboard",
  },
  {
    id: 2,
    img: <img src={Bali2} alt="Travel Img" className="img" />,
    text: "Travel through the Islands of Bali in a Private Cruisee",
    label: "Luxury",
    path: "/dashboard",
  },
  {
    id: 3,
    img: <img src={islands2} alt="Travel Img" className="img" />,
    text: "Set Sail in the Atlantic Ocean visiting Uncharted Waters",
    label: "Mystery",
    path: "/dashboard",
  },
  {
    id: 4,
    img: <img src={Himalayas2} alt="Travel Img" className="img" />,
    text: "Experience adrenaline on Top of the Himalayan Mountains",
    label: "Adrenaline",
    path: "/dashboard",
  },
  {
    id: 5,
    img: <img src={desert2} alt="Travel Img" className="img" />,
    text: "Ride through the Sahara Desert on a guided camel tour",
    label: "Adventure",
    path: "/dashboard",
  },
  {
    id: 6,
    img: <img src={Europe} alt="Travel Img" className="img" />,
    text: "Express in Europe - several countries in one trip",
    label: "Adventure",
    path: "/dashboard",
  },
];
