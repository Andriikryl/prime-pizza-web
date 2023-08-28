import React from "react";
import style from "./style.module.css";
import Image from "next/image";
import INsta from "public/icons/Instagram-two.svg";
import Link from "next/link";

const data = [
  {
    id: 1,
    src: "/gallary/im-1.jpg",
    width: 303,
    heigth: 303,
    alt: "Angular",
  },
  {
    id: 2,
    src: "/gallary/im-2.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 3,
    src: "/gallary/im-3.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 4,
    src: "/gallary/im-4.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 5,
    src: "/gallary/im-1.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 6,
    src: "/gallary/im-2.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 7,
    src: "/gallary/im-3.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
  {
    id: 8,
    src: "/gallary/im-4.jpg",
    width: 303,
    heigth: 303,
    alt: "",
  },
];

export default function Gallary() {
  return (
    <div className={style.marquee}>
      <ul className={style.marquee__content}>
        {data.map((item) => {
          return (
            <li className={style.marquee__item} key={item.id}>
              <div className={style.image__box}>
                <Image
                  src={item.src}
                  width={item.width}
                  height={item.heigth}
                  alt={item.alt}
                />
              </div>
            </li>
          );
        })}
      </ul>
      <ul className={style.marquee__content} aria-hidden="true">
        {data.map((item) => {
          return (
            <li className={style.marquee__item} key={item.id}>
              <Image
                src={item.src}
                width={item.width}
                height={item.heigth}
                alt={item.alt}
              />
            </li>
          );
        })}
      </ul>
      <div className={style.social__box}>
        <Link href={"#"} className={style.social__link}>
          <Image src={INsta} width={50} height={50} alt="instagram" />
          <span>@primepizza.if</span>
        </Link>
      </div>
    </div>
  );
}
