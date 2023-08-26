"use client";
import Image from "next/image";
import style from "./style.module.css";
import { useDispatch } from "react-redux";
import { cartActions } from "@/features/cart/cartSlice";

type Item = {
  id: number | string;
  img: string;
  category: string;
  title: string;
  description: string;
  price: string;
  size: string;
};

type CardProps = {
  item: Item[];
};

const Card: React.FC<CardProps> = ({ item }) => {
  const dispatch = useDispatch();
  return (
    <>
      {item.map((val: Item) => {
        return (
          <li key={val.id} className={style.card}>
            <div className={style.card__img}>
              <Image src={val.img} width={342} height={270} alt="image" />
            </div>
            <div className={style.card__info}>
              <h4 className={style.card__title}>{val.title}</h4>
              <p className={style.card__description}>{val.description}</p>
              <div className={style.card__group}>
                <span className={style.card__size}>{val.size}</span>
                <span className={style.card__price}>{val.price}</span>
              </div>
            </div>
            <button
              className={style.card__btn}
              onClick={() => dispatch(cartActions.addItem(val))}
            >
              add
            </button>
          </li>
        );
      })}
    </>
  );
};

export default Card;
