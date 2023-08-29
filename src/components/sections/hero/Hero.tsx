import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Button from "@/components/button/Button";

export default function Hero() {
  return (
    <section className={style.hero}>
      <Container className={style.hero__container}>
        <div className={style.hero__box}>
          <h1 className={style.hero__title}>
            Сумніваєшся, яку піцу вибрати? Тицяй на піцу, та крути колесо!
          </h1>
          <p className={style.hero__description}>
            Lorem Ipsum в основному частиною латинського тексту за класичною
            автор і філософа Цицерона. Це слова і букви були змінені додаванням
            або видаленням, так навмисно роблять.
          </p>
          <Button>Дивитись меню</Button>
        </div>
      </Container>
    </section>
  );
}
