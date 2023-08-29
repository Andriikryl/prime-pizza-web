import React from "react";
import { Container } from "@/components/container/Container";
import style from "./style.module.css";
import AccordionDemo from "./Accordion.tsx/Accordion";

export default function Constructor() {
  return (
    <section className={style.constructor__box}>
      <Container>
        <h4 className={style.constructor__title}>Зроби свою ідеальну піцу!</h4>
        <AccordionDemo />
      </Container>
    </section>
  );
}
