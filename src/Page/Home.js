import React from "react";
import Footer from "../Editor/comp/Footer";
import Headers from "../Editor/comp/Headers";
import Hero from "../Editor/comp/Hero";
import TemplateSelection from "./../SelectionTemplate/TemplateSelection";

export default function Home() {
  return (
    <>
      {/* homepage of application */}
      <Headers />
      <Hero />
      <TemplateSelection />

      <Footer />
    </>
  );
}
