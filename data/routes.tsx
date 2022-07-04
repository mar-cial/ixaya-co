import { BsBoxSeam, BsListNested } from 'react-icons/bs';
import { IoCreateOutline } from 'react-icons/io5';
import Route from '../model/route';

const routes: Route[] = [
  {
    text: 'Products',
    url: '/products',
    id: 1,
    icon: <BsBoxSeam />,
  },
  {
    text: 'List orders',
    url: '/orders',
    id: 2,
    icon: <BsListNested />,
  },
  {
    text: 'Create order',
    url: '/new-order',
    id: 3,
    icon: <IoCreateOutline />,
  },
];

export default routes;
