import React, { useState } from 'react';
import { Col, Container, Row } from "react-bootstrap";

import { Product } from "../../interfaces/product";

import './_lab2-cart.scss';

interface Lab2CartPageProps {
  cart: Set<number>;
  setCart: React.Dispatch<React.SetStateAction<Set<number>>>;
}

export const Lab2CartPage = (props: Lab2CartPageProps) => {
  return (
    <>
      Cart
    </>
  );
}
