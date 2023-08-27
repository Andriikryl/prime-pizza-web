import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import Image from "next/image";

const data = [
  {
    id: 1,
    title: "Молода та амбіційна піцерія",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.",
    src: "/info/one.jpg",
    width: 535,
    heigth: 356,
    alt: "pizza",
  },
  {
    id: 2,
    title: "Піца від якої хочеться жити",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.",
    src: "/info/two.jpg",
    width: 535,
    heigth: 356,
    alt: "pizza",
  },
  {
    id: 3,
    title: "Швидко та смачно",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.",
    src: "/info/three.jpg",
    width: 535,
    heigth: 356,
    alt: "pizza",
  },
  {
    id: 4,
    title: "Особливий рецепт",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae. Cursus feugiat quis nisl, felis facilisis eu faucibus. Egestas pretium dictumst tortor amet, faucibus pulvinar bibendum. Aliquam, varius egestas nisl, in pharetra proin. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ac pulvinar adipiscing eleifend turpis vitae.",
    src: "/info/four.jpg",
    width: 535,
    heigth: 356,
    alt: "pizza",
  },
];

export default function Info() {
  return (
    <section className={style.info}>
      <Container>
        <ul className={style.info__list}>
          {data.map((item) => {
            return (
              <li key={item.id} className={style.list__item}>
                <div className={style.itme__image}>
                  <Image
                    src={item.src}
                    width={item.width}
                    height={item.heigth}
                    alt={item.alt}
                  />
                </div>
                <div className={style.item__text}>
                  <h3 className={style.item__title}>{item.title}</h3>
                  <p className={style.item__description}>{item.description}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </Container>
    </section>
  );
}
