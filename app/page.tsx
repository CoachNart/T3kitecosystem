import type { JSX } from "react";
import SiteScripts from "@/components/SiteScripts";
import Svg from "@/components/Svg";
import Intro from "@/components/Intro";
import Trail from "@/components/Trail";
import Ring from "@/components/Ring";
import Nav from "@/components/Nav";
import Wp from "@/components/Wp";
import Top from "@/components/Top";
import Footer from "@/components/Footer";

export default function HomePage(): JSX.Element {
  return (
    <>
      <Svg />
      <Intro />
      <Trail />
      <Ring />
      <Nav />
      <Wp />
      <Top />
      <Footer />
      <SiteScripts />
    </>
  );
}
