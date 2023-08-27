"use client";
import React from "react";
import CartIamge from "public/icons/cart.svg";
import Image from "next/image";
import style from "./style.module.css";
import Link from "next/link";
import { useSelector } from "react-redux";

export default function CartButton() {
  const cartItems = useSelector((state) => state.cart.items);
  const totalItems = cartItems.reduce((total, item) => {
    return total + item.quantity;
  }, 0);

  return (
    <div>
      <Link href={"/cart"}>
        <button className={style.button}>
          <Image src={CartIamge} width={40} height={46} alt="Cart button" />
          {totalItems > 0 && (
            <span className={style.itemCount}>{totalItems}</span>
          )}
        </button>
      </Link>
    </div>
  );
}
