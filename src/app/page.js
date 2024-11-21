"use client";

import Header from "@/components/Header";
import Menu from "@/components/Menu";
import MainSection from "@/components/MainSection";

export default function Home() {
  return (
    <>
      <div>
        <Header />
        <div className="w-[100vw] flex">
          <Menu />
          <div className="w-[90%] h-[100%]">
            <MainSection />
          </div>
        </div>
      </div>
    </>
  );
}
