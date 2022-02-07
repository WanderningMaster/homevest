import { v4 as uuidv4} from 'uuid';
import rainbow from './rainbow.png';
import sunshine from './sunshine.png';
import drop from './drop.png';

export const mockData = [
  {
    id: uuidv4(),
    name: 'RC Rainbow',
    price: '854 653 UAH',
    adress: 'Vodna street, 24',
    city: 'Mukachevo',
    built: 2020,
    parking: 'Undeground',
    bedroom: 2,
    bathroom: 1,
    image: rainbow,
  },
  {
    id: uuidv4(),
    name: 'RC Sunshine',
    price: '766 576 UAH',
    adress: 'Uzhorodska street, 5',
    city: 'Mukachevo',
    built: 2021,
    parking: 'Undeground',
    bedroom: 1,
    bathroom: 1,
    image: sunshine,
  },
  {
    id: uuidv4(),
    name: 'RC Drop',
    price: '950 000 UAH',
    adress: 'Zelena street, 24',
    city: 'Mukachevo',
    built: 2021,
    parking: 'Undeground',
    bedroom: 3,
    bathroom: 2,
    image: drop,
  },
];