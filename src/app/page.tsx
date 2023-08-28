import Gallary from "@/components/gallary/Gallary";
import Constructor from "@/components/sections/constructor/Constructor";
import Hero from "@/components/sections/hero/Hero";
import Menu from "@/components/sections/menu/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <Menu />
      <Constructor />
      <Gallary />
    </>
  );
}
