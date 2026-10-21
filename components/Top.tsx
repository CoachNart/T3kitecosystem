import type { JSX } from "react";
import Hero from "@/components/Hero";
import Marq from "@/components/Marq";
import Mission from "@/components/Mission";
import Products from "@/components/Products";
import Journeys from "@/components/Journeys";
import World from "@/components/World";
import Market from "@/components/Market";
import Infrastructure from "@/components/Infrastructure";
import Roadmap from "@/components/Roadmap";
import Alliances from "@/components/Alliances";
import Partners from "@/components/Partners";
import Kit from "@/components/Kit";
import Team from "@/components/Team";
import Vision from "@/components/Vision";
import Cta from "@/components/Cta";

export default function Top(): JSX.Element {
  return (
    <main id="top">
      <Hero />
      <Marq />
      <Mission />
      <Products />
      <Journeys />
      <World />
      <Market />
      <Infrastructure />
      <Roadmap />
      <Alliances />
      <Partners />
      <Kit />
      <Team />
      <Vision />
      <Cta />
    </main>
  );
}
