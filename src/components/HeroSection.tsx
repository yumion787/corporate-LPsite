import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section className="w-full py-12 px-4 flex flex-col md:flex-row items-center justify-center gap-8 font-handwriting"
      style={{ backgroundColor: "#fff8e7" }}>
      {/* メインビジュアル（仮画像） */}
      <div className="w-full max-w-xs md:max-w-md h-48 md:h-64 rounded-xl shadow flex items-center justify-center overflow-hidden border-4 mb-6 md:mb-0">
        <Image src="/pet-hero.jpg" alt="ペットとシッター" width={220} height={220} className="object-cover rounded-lg w-full" />
      </div>
      <div className="flex flex-col gap-4 items-center w-full max-w-lg">
        <Image src="/title-logo.png" alt="ペットシッターサービス" width={400} height={100} className="object-contain" />
        <p className="text-lg font-medium">大切な家族に やさしいプロのケアを</p>
        <div className="flex gap-4 mt-4 ">
          <Image src="/line-add.png" alt="LINE" width={150} height={48} />
          <Button variant="outline" className="border-green rounded-md px-6 py-2 text-lg text-white font-bold font-handwriting"
            style={{ backgroundColor: "#FE870C" }}>
            <Link href="/contact">お問い合わせ</Link></Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection; 