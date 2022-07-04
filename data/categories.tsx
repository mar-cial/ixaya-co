import laptop from '../public/images/laptop.jpeg';
import component from '../public/images/component.png';
import order from '../public/images/order.jpg';
import { Category } from '../model/category';

const categories: Category[] = [
  {
    id: 1,
    title: 'Pre-made tech stuff',
    description: 'Hassle free computers and laptops assembled by experts.',
    image: laptop,
    url: '/products',
  },
  {
    id: 2,
    title: 'Tech components',
    description: 'Everything you need to build your own machine.',
    image: component,
    url: '/products',
  },
  {
    id: 3,
    title: 'Orders',
    image: order,
    description: '100% satisfaction is our goal.',
    url: '/orders',
  },
];

export default categories;
