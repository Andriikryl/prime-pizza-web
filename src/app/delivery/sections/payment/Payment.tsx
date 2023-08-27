import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Готівка",
    description:
      "Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.",
    src: "/payment/business-and-finance 1.svg",
    width: 117,
    heigth: 117,
    alt: "",
  },
  {
    id: 2,
    title: "Картка",
    description:
      "Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.",
    src: "/payment/money 1.svg",
    width: 117,
    heigth: 117,
    alt: "",
  },
];

export default function Payment() {
  return (
    <section className={style.payment}>
      <Container>
        <h2 className={style.payment__title}>Правила оплати</h2>
        <ul className={style.rules__list}>
          {data.map((item) => {
            return (
              <li className={style.list__item} key={item.id}>
                <div className={style.item__image}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.width}
                    alt={item.alt}
                  />
                </div>
                <h2 className={style.item__title}>{item.title}</h2>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
