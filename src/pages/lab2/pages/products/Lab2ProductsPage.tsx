import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

import { Restrictions } from "../../enums/restrictions";
import { Product } from "../../interfaces/product";

import './_lab2-products.scss';

interface Lab2ProductsPageProps {
  preferences: Restrictions[];
  setPreferences: React.Dispatch<React.SetStateAction<Restrictions[]>>;
  cart: Product[];
  setCart: React.Dispatch<React.SetStateAction<Product[]>>;
}

export const Lab2ProductsPage = (props: Lab2ProductsPageProps) => {
  return (
    <>
      Products
    </>
  );
}
