"use client";
import React, { FC, forwardRef, ReactNode, Ref, useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import style from "./style.module.css";
import Button from "@/components/button/Button";

const data = [
  {
    id: 1,
    title: "Сир",
    value: "item-1",
    form: [
      {
        id: 1,
        idForm: "c1",
        titleForm: "Моцарелла",
        price: 27,
      },
      {
        id: 2,
        idForm: "c2",
        titleForm: "Пармезан",
        price: 21,
      },
      {
        id: 3,
        idForm: "c3",
        titleForm: "Королівський",
        price: 17,
      },
      {
        id: 4,
        idForm: "c4",
        titleForm: "Дорблю",
        price: 47,
      },
    ],
  },
  {
    id: 2,
    title: "М’ясо",
    value: "item-2",
    form: [
      {
        id: 1,
        idForm: "a1",
        titleForm: "backon",
        price: 47,
      },
      {
        id: 2,
        idForm: "a2",
        titleForm: "porck",
        price: 47,
      },
      {
        id: 3,
        idForm: "a3",
        titleForm: "chiken",
        price: 47,
      },
      {
        id: 4,
        idForm: "a4",
        titleForm: "beef",
        price: 47,
      },
    ],
  },
  {
    id: 3,
    title: "Соуси до піци",
    value: "item-3",
    form: [
      {
        id: 1,
        idForm: "q1",
        titleForm: "pesto",
        price: 47,
      },
      {
        id: 2,
        idForm: "q2",
        titleForm: "tomato",
        price: 47,
      },
      {
        id: 3,
        idForm: "q3",
        titleForm: "qest",
        price: 47,
      },
      {
        id: 4,
        idForm: "q4",
        titleForm: "yupi",
        price: 47,
      },
    ],
  },
  {
    id: 4,
    title: "Соуси до піци",
    value: "item-4",
    form: [
      {
        id: 1,
        idForm: "w1",
        titleForm: "pesto",
        price: 47,
      },
      {
        id: 2,
        idForm: "w2",
        titleForm: "tomato",
        price: 47,
      },
      {
        id: 3,
        idForm: "w3",
        titleForm: "qest",
        price: 47,
      },
      {
        id: 4,
        idForm: "w4",
        titleForm: "yupi",
        price: 47,
      },
    ],
  },
  {
    id: 5,
    title: "Соуси до піци",
    value: "item-5",
    form: [
      {
        id: 1,
        idForm: "x1",
        titleForm: "pesto",
        price: 47,
      },
      {
        id: 2,
        idForm: "x2",
        titleForm: "tomato",
        price: 47,
      },
      {
        id: 3,
        idForm: "x3",
        titleForm: "qest",
        price: 47,
      },
      {
        id: 4,
        idForm: "x4",
        titleForm: "yupi",
        price: 47,
      },
    ],
  },
  {
    id: 6,
    title: "Соуси до піци",
    value: "item-6",
    form: [
      {
        id: 1,
        idForm: "c1",
        titleForm: "pesto",
        price: 47,
      },
      {
        id: 2,
        idForm: "c2",
        titleForm: "tomato",
        price: 47,
      },
      {
        id: 3,
        idForm: "c3",
        titleForm: "qest",
        price: 47,
      },
      {
        id: 4,
        idForm: "c4",
        titleForm: "yupi",
        price: 47,
      },
    ],
  },
];

interface AccordionTriggerProps {
  children: ReactNode;
  className?: string;
}

const AccordionTrigger: FC<AccordionTriggerProps> = forwardRef(
  (
    { children, className, ...props }: AccordionTriggerProps,
    forwardedRef: Ref<HTMLButtonElement>
  ) => (
    <Accordion.Header className={style.AccordionHeader}>
      <Accordion.Trigger
        className={classNames(style.AccordionTrigger, className)}
        {...props}
        ref={forwardedRef}
      >
        {children}
        <ChevronDownIcon className={style.AccordionChevron} aria-hidden />
      </Accordion.Trigger>
    </Accordion.Header>
  )
);
AccordionTrigger.displayName = "AccordionTrigger";

interface AccordionContentProps {
  children: ReactNode;
  className?: string;
}

const AccordionContent: FC<AccordionContentProps> = forwardRef(
  (
    { children, className, ...props }: AccordionContentProps,
    forwardedRef: Ref<HTMLDivElement>
  ) => (
    <Accordion.Content
      className={classNames(style.AccordionContent, className)}
      {...props}
      ref={forwardedRef}
    >
      <div className={style.AccordionContentText}>{children}</div>
    </Accordion.Content>
  )
);

AccordionContent.displayName = "AccordionContent";

type ItemQuantities = { [key: string]: number };

function AccordionDemo() {
  const [itemQuantities, setItemQuantities] = useState<ItemQuantities>({});
  const [totalCost, setTotalCost] = useState<number>(0);

  const handleCheckboxChange = (
    itemIdForm: string,
    checked: string | boolean,
    price: number | void
  ) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemIdForm]: checked ? 1 : 0,
    }));

    const updatedQuantities = {
      ...itemQuantities,
      [itemIdForm]: checked ? 1 : 0,
    };
    const newTotalCost = Object.keys(updatedQuantities).reduce(
      (acc, itemId) =>
        acc +
        (updatedQuantities[itemId] || 0) *
          (data
            .flatMap((item) => item.form)
            .find((item) => item.idForm === itemId)?.price || 0),
      0
    );
    setTotalCost(newTotalCost);
  };

  const handleIncrement = (itemIdForm: string) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemIdForm]: (prevQuantities[itemIdForm] || 0) + 1,
    }));
  };

  const handleDecrement = (itemIdForm: string) => {
    setItemQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemIdForm]: Math.max(0, (prevQuantities[itemIdForm] || 0) - 1),
    }));
  };

  return (
    <>
      <Accordion.Root
        className={style.AccordionRoot}
        type="single"
        defaultValue="item-1"
        collapsible
      >
        {data.map((item) => {
          return (
            <Accordion.Item
              className={style.AccordionItem}
              key={item.id}
              value={item.value}
            >
              <AccordionTrigger>{item.title}</AccordionTrigger>
              <AccordionContent>
                <form className={style.form}>
                  {item.form.map((item) => {
                    return (
                      <div className={style.form__box} key={item.id}>
                        <Checkbox.Root
                          className={style.CheckboxRoot}
                          id={item.idForm}
                          onCheckedChange={(checked) =>
                            handleCheckboxChange(item.idForm, checked)
                          }
                        >
                          <Checkbox.Indicator
                            className={style.CheckboxIndicator}
                          >
                            <CheckIcon />
                          </Checkbox.Indicator>
                        </Checkbox.Root>
                        <label className={style.Label} htmlFor={item.idForm}>
                          <div className={style.label__group}>
                            <span>{item.titleForm}</span>
                            {itemQuantities[item.idForm] > 0 && (
                              <div className={style.quantityButtons}>
                                <button
                                  type="button"
                                  className={style.quantityButton}
                                  onClick={() => handleDecrement(item.idForm)}
                                >
                                  -
                                </button>
                                <span className={style.quantity__increment}>
                                  {itemQuantities[item.idForm]}
                                </span>
                                <button
                                  type="button"
                                  className={style.quantityButton}
                                  onClick={() => handleIncrement(item.idForm)}
                                >
                                  +
                                </button>
                              </div>
                            )}
                            <span className={style.quantity}>{item.price}</span>
                          </div>
                        </label>
                      </div>
                    );
                  })}
                </form>
              </AccordionContent>
            </Accordion.Item>
          );
        })}
      </Accordion.Root>
      <div className={style.control__group}>
        <p className={style.constructor__cost}>
          загальна сума: <span>{totalCost}грн</span>
        </p>
        <Button>В кошик</Button>
      </div>
    </>
  );
}

export default AccordionDemo;
