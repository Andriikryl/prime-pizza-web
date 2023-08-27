import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Facebook",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    src: "/icons/Facebook.svg",
    width: 42,
    heigth: 80,
    alt: "",
  },
  {
    id: 2,
    title: "Instagram",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    src: "/icons/Instagram.svg",
    width: 80,
    heigth: 80,
    alt: "",
  },
  {
    id: 3,
    title: "Gmail",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit ut aliquam, purus sit amet luctus venenatis",
    src: "/icons/communications 1.svg",
    width: 100,
    heigth: 100,
    alt: "",
  },
];

export default function HeroAbout() {
  return (
    <section className={style.hero}>
      <Container className={style.hero__conteiner}>
        <ul className={style.hero__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.item__image}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                </div>
                <h3 className={style.item__title}>{item.title}</h3>
                <p className={style.item__description}>{item.description}</p>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
