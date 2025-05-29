import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface ServiceCardProps {
  title: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  detailUrl: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, price, duration, image, description, detailUrl }) => {
  return (
    <div className="bg-cream-light rounded-2xl shadow-md p-6 flex flex-col items-center w-80 border border-cream-dark font-handwriting">
      <div className="w-20 h-20 mb-4 flex items-center justify-center overflow-hidden rounded-full border-2 border-orange">
        <Image src={image} alt={title} width={64} height={64} className="object-cover w-full" />
      </div>
      <div className="text-xl font-bold mb-1">{title}</div>
      <div className="font-semibold mb-1">{price}</div>
      <div className="text-xs text-gray-500 mb-2">所要時間: {duration}</div>
      <div className="text-sm text-gray-700 mb-4 text-center min-h-[48px]">{description}</div>
      <Button asChild className="hover:bg-green-dark text-white rounded-full px-6 py-2 font-handwriting"
        style={{ backgroundColor: "#FE870C" }}>
        <a href={detailUrl}>詳細はこちら</a>
      </Button>
    </div>
  );
};

export default ServiceCard; 