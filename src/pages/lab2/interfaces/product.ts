import { Restrictions } from "../enums/restrictions";

export interface Product {
  id: number;
  name: string;
  restrictions: Restrictions[];
  price: number;
}

export const priceComparator = (a: Product, b: Product): number => {
  return a.price - b.price;
}
