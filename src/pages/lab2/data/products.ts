import { Product } from "../interfaces/product";
import { Restrictions } from "../enums/restrictions";

export const products: Product[] = [
  {
    id: 0,
    name: 'Organic Broccoli',
    restrictions: [
      Restrictions.Organic,
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ],
    price: 1.99,
  },
  {
    id: 1,
    name: 'Bread',
    restrictions: [
      Restrictions.Organic,
      Restrictions.NutFree,
    ],
    price: 2.35,
  },
  {
    id: 2,
    name: 'Salmon',
    restrictions: [
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ],
    price: 10.00,
  },
  {
    id: 3,
    name: 'Almond Milk',
    restrictions: [
      Restrictions.Organic,
      Restrictions.LactoseFree,
    ],
    price: 4.35,
  },
  {
    id: 4,
    name: 'Organic Eggs',
    restrictions: [
      Restrictions.Organic,
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ],
    price: 5.49,
  },
  {
    id: 5,
    name: '3.25% Milk',
    restrictions: [
      Restrictions.NutFree,
    ],
    price: 2.20,
  },
  {
    id: 6,
    name: 'Carrots',
    restrictions: [
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ],
    price: 1.20,
  },
  {
    id: 7,
    name: 'Salad Dressing',
    restrictions: [
      Restrictions.NutFree,
    ],
    price: 3.30,
  },
  {
    id: 8,
    name: 'Organic Beef Steak',
    restrictions: [
      Restrictions.NutFree,
      Restrictions.Organic,
      Restrictions.LactoseFree,
    ],
    price: 31.25,
  },
  {
    id: 9,
    name: 'Peanuts',
    restrictions: [
      Restrictions.LactoseFree,
    ],
    price: 3.25,
  },
]
