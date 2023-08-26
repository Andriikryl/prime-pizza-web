"use client";
import { useState } from "react";
import { Container } from "../../container/Container";
import style from "./style.module.css";
import Card from "./Card";
import Buttons from "./Buttons";
import Data from "../../../data/data";
import Button from "../../button/Button";

export default function Menu() {
  const [item, setItem] = useState(Data);
  const [visibleItems, setVisibleItems] = useState(8);

  const menuItems: string[] = [...new Set(Data.map((Val) => Val.category))];

  const filterItem = (curcat: string) => {
    const newItem = Data.filter((newVal) => {
      return newVal.category === curcat;
    }).slice(0, visibleItems);
    setItem(newItem);
  };

  const showMore = () => {
    setVisibleItems((prevVisibleItems) => prevVisibleItems + 4);
  };

  return (
    <section className={style.project}>
      <Container>
        <div className={style.flex__group}>
          <div className={style.btn__box}>
            <Buttons
              filterItem={filterItem}
              setItem={setItem}
              menuItems={menuItems}
            />
          </div>
        </div>
        <ul className={style.card__list}>
          <Card item={item.slice(0, visibleItems)} />
        </ul>
        <div className={style.project__btn}>
          <Button onClick={showMore}>Показати ще</Button>
        </div>
      </Container>
    </section>
  );
}
