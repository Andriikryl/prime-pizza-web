import ShoppingCart from "@/app/cart/shopingCart/ShoppingCart";
import React from "react";
import CartControls from "./cartControls/CartControls";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";

export default function Cart() {
  return (
    <section className={style.cart}>
      <Container>
        <CartControls />
        <ShoppingCart />
      </Container>
    </section>
  );
}
