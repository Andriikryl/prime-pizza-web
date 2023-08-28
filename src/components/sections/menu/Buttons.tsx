"use client";
import React, { useState } from "react";
import Data from "../../../data/data";
import style from "./style.module.css";

type DataItem = {
  id: string;
  title: string;
  category: string;
  img: string;
  description: string;
  price: string;
  size: string;
  quantity: number;
};

type CategoryCount = {
  [category: string]: number;
};

type ButtonsProps = {
  filterItem: (category: string) => void;
  setItem: React.Dispatch<React.SetStateAction<DataItem[]>>; // Update the type of setItem
  menuItems: string[];
};

const Buttons: React.FC<ButtonsProps> = ({
  filterItem,
  setItem,
  menuItems,
}) => {
  const [active, setActive] = useState("");

  const getCategoryCount = (data: DataItem[]): CategoryCount => {
    return data.reduce((acc: CategoryCount, curr) => {
      acc[curr.category] = (acc[curr.category] || 0) + 1;
      return acc;
    }, {});
  };

  const categoryCount = getCategoryCount(Data);

  return (
    <>
      <button
        className={`${style.button} ${active === "Піца" ? style.active : ""}`}
        onClick={() => {
          filterItem("Піца");
          setActive("Піца");
        }}
      >
        Піца{" "}
        <span className={style.button__amount}>
          {categoryCount["Піца"] || 0}
        </span>
      </button>
      <button
        className={`${style.button} ${active === "Салат" ? style.active : ""}`}
        onClick={() => {
          filterItem("Салат");
          setActive("Салат");
        }}
      >
        Салат{" "}
        <span className={style.button__amount}>
          {categoryCount["Салат"] || 0}
        </span>
      </button>
      <button
        className={`${style.button} ${active === "Напої" ? style.active : ""}`}
        onClick={() => {
          filterItem("Напої");
          setActive("Напої");
        }}
      >
        Напої{" "}
        <span className={style.button__amount}>
          {categoryCount["Напої"] || 0}
        </span>
      </button>
      <button
        className={`${style.button} ${active === "Інше" ? style.active : ""}`}
        onClick={() => {
          filterItem("Інше");
          setActive("Інше");
        }}
      >
        Інше{" "}
        <span className={style.button__amount}>
          {categoryCount["Інше"] || 0}
        </span>
      </button>
    </>
  );
};

export default Buttons;
