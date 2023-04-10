import waterfall from './../assets/waterfall1.jpg';
import Bali from './../assets/Bali.jpg';
import islands from './../assets/islands.jpg';
import Himalayas from './../assets/Himalayas.jpg';
import desert from './../assets/desert.jpg';
import Europe from './../assets/Europe.png';

export const CARDS =[
    {
        id: 1,
        img: <img src={waterfall} alt="Travel Img" />,
        text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
        label: 'Adventure',
        path: '/dashboard', 
    },
    {
        id: 2,
        img: <img src={Bali} alt="Travel Img" />,
        text: 'Travel through the Islands of Bali in a Private Cruisee',
        label: 'Luxury',
        path: '/dashboard', 
    },
    {
        id: 3,
        img: <img src={islands} alt="Travel Img" />,
        text: 'Explore the hidden waterfall deep inside the Amazon Jungle',
        label: 'Mystery',
        path: '/dashboard', 
    },
    {
        id: 4,
        img: <img src={Himalayas} alt="Travel Img" />,
        text: 'Experience Football on Top of the Himilayan Mountains',
        label: 'Adrenaline',
        path: '/dashboard', 
    },
    {
        id: 5,
        img: <img src={desert} alt="Travel Img" />,
        text: 'Ride through the Sahara Desert on a guided camel tour',
        label: 'Adventure',
        path: '/dashboard', 
    },
    {
        id: 6,
        img: <img src={Europe} alt="Travel Img" />,
        text: 'Express in Europe - several countries in one trip',
        label: 'Adventure',
        path: '/dashboard', 
    },
]