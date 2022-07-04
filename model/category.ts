import { StaticImageData } from 'next/image';

export interface Category {
  title: string;
  description: string;
  image: StaticImageData;
  id: number;
  url: string;
}

export interface CategoryCardProps {
  category: Category;
}
