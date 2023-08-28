"use client";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { cartActions } from "../../../features/cart/cartSlice";
import style from "./style.module.css";
import Image from "next/image";
import { RootState } from "@/features/store/store";

type Item = {
  id: number | string;
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
  size: string;
  quantity: number;
};

const ShoppingCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);

  const handleRemoveItem = (item: Item) => {
    dispatch(cartActions.removeItem(item));
  };

  const handleClearCart = () => {
    dispatch(cartActions.clearCart());
  };

  const totalPrice = cartItems.reduce((total: number, item: Item) => {
    const itemPrice = parseFloat(item.price) * (item.quantity || 1);
    return total + itemPrice;
  }, 0);

  return (
    <div className={style.cart__box}>
      {cartItems.length === 0 ? (
        <p className={style.cart__titleEmpty}>Your cart is empty.</p>
      ) : (
        <>
          <ul className={style.cart__list}>
            {cartItems.map(
              (item: {
                id: any;
                img: any;
                title: any;
                description: any;
                size: any;
                price: any;
                category: string;
                quantity: number;
              }) => (
                <li key={item.id} className={style.list__item}>
                  <div className={style.card__img}>
                    <button
                      className={style.delet__button}
                      onClick={() => handleRemoveItem(item)}
                    >
                      x
                    </button>
                    <div className={style.image__box}>
                      <Image
                        src={item.img}
                        width={200}
                        height={200}
                        alt="image"
                      />
                    </div>
                  </div>
                  <div className={style.card__info}>
                    <div className={style.inner__box}>
                      <h4 className={style.card__title}>{item.title}</h4>
                      <p className={style.card__description}>
                        {item.description}
                      </p>
                      <span className={style.card__size}>{item.size}</span>
                    </div>
                    <div className={style.quantity__box}>
                      <button
                        className={style.quantity__btn}
                        onClick={() =>
                          dispatch(cartActions.incrementQuantity(item.id))
                        }
                      >
                        +
                      </button>
                      <span className={style.quantity__value}>
                        {item.quantity}
                      </span>
                      <button
                        className={style.quantity__btn}
                        onClick={() =>
                          dispatch(cartActions.decrementQuantity(item.id))
                        }
                      >
                        -
                      </button>
                    </div>
                    <div className={style.card__group}>
                      <span className={style.card__price}>{item.price}</span>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
          <div className={style.flex__group}>
            <button className={style.clear__button} onClick={handleClearCart}>
              Clear Cart
            </button>
            <p className={style.cart__totalPrice}>
              разом до оплати: <span> {totalPrice}</span>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default ShoppingCart;
