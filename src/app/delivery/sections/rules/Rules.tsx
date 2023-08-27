import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Доставка по місту безкоштовна",
    description:
      "Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.",
    src: "/dilivery/free.svg",
    width: 117,
    heigth: 117,
    alt: "",
    ImageDescr: "FREE",
  },
  {
    id: 2,
    title: "У “зелену зону” - до 30 хвилин",
    description:
      "Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.",
    src: "/dilivery/fast-delivery 1.svg",
    width: 117,
    heigth: 117,
    alt: "",
    ImageDescr: "30хв",
  },
  {
    id: 3,
    title: "У “червону зону” - до 60хв Consectetur",
    description:
      "Consectetur adipiscing elit. Augue magna quisque euismod lectus interdum. Et venenatis quis congue urna convallis malesuada quam.",
    src: "/dilivery/fast-delivery-pro.svg",
    width: 117,
    heigth: 117,
    alt: "",
    ImageDescr: "60хв",
  },
];

export default function Rules() {
  return (
    <section className={style.rules}>
      <Container>
        <h1 className={style.rules__title}>Правила доставки</h1>
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
                  <span className={style.image__description}>
                    {item.ImageDescr}
                  </span>
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
