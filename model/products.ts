export interface ProductsResponseData {
  status: number;
  response: ProductResult[];
}

export interface ProductResult {
  id: string;
  category: string;
  title: string;
  short_description: string;
  description: string;
  sale_count: string;
  discount: string;
  price: string;
  enabled: string;
  image_url: string;
  create_date: Date;
  last_update: Date;
}

export interface IProductCardView {
  product: ProductResult;
}
