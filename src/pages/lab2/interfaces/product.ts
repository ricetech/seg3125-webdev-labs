import { Restrictions } from "../enums/restrictions";

export interface Product {
  id: number;
  name: string;
  restrictions: Restrictions[];
  price: number;
}
