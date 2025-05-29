import React from "react";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/data/services";

const ServiceSection = () => {
  return (
    <section className="w-full py-16 bg-cream flex flex-col items-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-10 font-handwriting drop-shadow-sm">サービス</h2>
      <div className="flex flex-col md:flex-row flex-wrap gap-8 w-full max-w-5xl justify-center items-center">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} detailUrl={`/services/${service.id}`} />
        ))}
      </div>
    </section>
  );
};

export default ServiceSection; 