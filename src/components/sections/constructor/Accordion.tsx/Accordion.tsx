"use client";
import React, { FC, forwardRef, ReactNode, Ref } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";
import * as Accordion from "@radix-ui/react-accordion";
import classNames from "classnames";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import style from "./style.module.css";

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

const AccordionDemo: FC = () => (
  <Accordion.Root
    className={style.AccordionRoot}
    type="single"
    defaultValue="item-1"
    collapsible
  >
    <div>
      <Accordion.Item className={style.AccordionItem} value="item-1">
        <AccordionTrigger>Сир</AccordionTrigger>
        <AccordionContent>
          <form className={style.form}>
            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="c1">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c1">
                Моцарелла
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="c2">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c2">
                Пармезан
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="c3">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c3">
                Королівський
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="c4">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="c4">
                Дорблю
              </label>
            </div>
          </form>
        </AccordionContent>
      </Accordion.Item>

      <Accordion.Item className={style.AccordionItem} value="item-2">
        <AccordionTrigger>Напої до піци</AccordionTrigger>
        <AccordionContent>
          <form className={style.form}>
            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="a1">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="a1">
                coka
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="a2">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="a2">
                Shveps
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="a3">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="a3">
                Mr. Di
              </label>
            </div>

            <div className={style.form__box}>
              <Checkbox.Root className={style.CheckboxRoot} id="a4">
                <Checkbox.Indicator className={style.CheckboxIndicator}>
                  <CheckIcon />
                </Checkbox.Indicator>
              </Checkbox.Root>
              <label className={style.Label} htmlFor="a4">
                Twist
              </label>
            </div>
          </form>
        </AccordionContent>
      </Accordion.Item>
    </div>
  </Accordion.Root>
);

export default AccordionDemo;
