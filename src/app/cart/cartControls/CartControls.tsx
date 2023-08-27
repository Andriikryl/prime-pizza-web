import React from "react";
import CartButton from "@/components/cartBtn/CartButton";
import style from "./style.module.css"
export default function CartControls() {
  return (
    <div className={style.flex__group}>
      <h1 className={style.cart__title}>Ваше замовлення:</h1>
      <CartButton />
    </div>
  );
}
