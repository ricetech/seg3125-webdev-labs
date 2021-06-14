import { Product } from "../interfaces/product";
import { Restrictions } from "../enums/restrictions";

export const products: Product[] = [
  {
    id: 0,
    name: "Organic Broccoli",
    restrictions: new Set([
      Restrictions.Organic,
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ]),
    price: 1.99,
  },
  {
    id: 1,
    name: "Bread",
    restrictions: new Set([Restrictions.Organic, Restrictions.NutFree]),
    price: 2.35,
  },
  {
    id: 2,
    name: "Salmon",
    restrictions: new Set([Restrictions.NutFree, Restrictions.LactoseFree]),
    price: 10.0,
  },
  {
    id: 3,
    name: "Almond Milk",
    restrictions: new Set([Restrictions.Organic, Restrictions.LactoseFree]),
    price: 4.35,
  },
  {
    id: 4,
    name: "Organic Eggs",
    restrictions: new Set([
      Restrictions.Organic,
      Restrictions.NutFree,
      Restrictions.LactoseFree,
    ]),
    price: 5.49,
  },
  {
    id: 5,
    name: "3.25% Milk",
    restrictions: new Set([Restrictions.NutFree]),
    price: 2.2,
  },
  {
    id: 6,
    name: "Carrots",
    restrictions: new Set([Restrictions.NutFree, Restrictions.LactoseFree]),
    price: 1.2,
  },
  {
    id: 7,
    name: "Salad Dressing",
    restrictions: new Set([Restrictions.NutFree]),
    price: 3.3,
  },
  {
    id: 8,
    name: "Organic Beef Steak",
    restrictions: new Set([
      Restrictions.NutFree,
      Restrictions.Organic,
      Restrictions.LactoseFree,
    ]),
    price: 31.25,
  },
  {
    id: 9,
    name: "Peanuts",
    restrictions: new Set([Restrictions.LactoseFree]),
    price: 3.25,
  },
];
