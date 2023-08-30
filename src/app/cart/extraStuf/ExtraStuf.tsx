"use client";
import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import data from "../../../data/extraData";
import BtnCartImage from "public/card/card-btn.svg";
import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "@/features/cart/cartSlice";

export default function ExtraStuf() {
  const dispatch = useDispatch();
  return (
    <section className={style.stuf}>
      <Container>
        <h3 className={style.stuf__title}>Вас також може зацікавити:</h3>
        <ul className={style.stuf__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.item__image}>
                  <Image src={item.img} width={249} height={249} alt="" />
                </div>
                <h3 className={style.image__title}>{item.title}</h3>
                <span className={style.item__price}>{item.price}</span>
                <button className={style.item__btn}>
                  <Image
                    src={BtnCartImage}
                    width={18}
                    height={21}
                    alt="button"
                    onClick={() => dispatch(cartActions.addItem(item))}
                  />
                </button>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
