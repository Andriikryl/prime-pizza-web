import ShoppingCart from "@/app/cart/shopingCart/ShoppingCart";
import React from "react";
import CartControls from "./cartControls/CartControls";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import ExtraStuf from "./extraStuf/ExtraStuf";

export default function Cart() {
  return (
    <section className={style.cart}>
      <Container>
        <CartControls />
        <ShoppingCart />
        <ExtraStuf />
      </Container>
    </section>
  );
}
