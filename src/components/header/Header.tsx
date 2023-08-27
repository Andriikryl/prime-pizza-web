import React from "react";
import { Container } from "../container/Container";
import Logo from "public/logo/Logo.svg";
import Image from "next/image";
import Link from "next/link";
import style from "./style.module.css";

export default function Header() {
  return (
    <header className={style.header}>
      <Container>
        <div className={style.header__box}>
          <nav className={style.nav}>
            <ul className={style.nav__list}>
              <li className={style.list__item}>
                <a className={style.item__link} href="#">
                  Акції
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.item__link} href="/delivery">
                  Доставка та Оплата
                </a>
              </li>
              <li className={style.list__item}>
                <Link className={style.item__link} href="/about">
                  Про нас
                </Link>
              </li>
              <li className={style.list__item}>
                <Link className={style.item__link} href="/">
                  <Image src={Logo} width={193} height={59} alt="pizza logo" />
                </Link>
              </li>
              <li className={style.list__item}>
                <a className={style.item__link} href="#">
                  Кожного дня 10:00 - 22:00
                </a>
              </li>
              <li className={style.list__item}>
                <a className={style.item__link} href="#">
                  + 38 (067) 009 02 09
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </header>
  );
}
