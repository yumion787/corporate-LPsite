import { notFound } from "next/navigation";
import Image from "next/image";
import { services } from "@/data/services";
import type { Service } from "@/data/services";
import Link from "next/link";

export default function ServiceDetailPage({ params }: { params: { serviceId: string } }) {
  const service: Service | undefined = services.find(s => s.id === params.serviceId);
  if (!service) return notFound();

  return (
    <main className="min-h-screen py-12 px-4 flex flex-col items-center font-handwriting"
      style={{ backgroundColor: "#fff8e7" }}>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-2xl w-full border border-cream-dark">
        <div className="flex flex-col md:flex-row gap-6 items-center mb-6">
          <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-orange flex items-center justify-center bg-cream">
            <Image src={service.image} alt={service.title} width={105} height={105} className="object-cover" />
          </div>
          <div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2">{service.title}</h1>
            <div className="font-semibold mb-1">{service.price}・{service.duration}</div>
            <div className="text-sm text-gray-700">{service.description}</div>
          </div>
        </div>
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">具体的な内容</h2>
          <p className="text-gray-800 mb-2">{service.detail}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">対象動物</h2>
          <p className="text-gray-800 mb-2">{service.animals}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">注意事項</h2>
          <p className="text-gray-800 mb-2">{service.notes}</p>
        </section>
        <section className="mb-6">
          <h2 className="text-lg font-bold mb-2">ご予約の流れ</h2>
          <ol className="list-decimal list-inside text-gray-800 space-y-1">
            {service.flow.map((step, idx) => (
              <li key={idx}>{step}</li>
            ))}
          </ol>
        </section>
        <div className="flex justify-end">
          <Link href="/" className="underline hover:text-orange font-bold">← サービス一覧へ戻る</Link>
        </div>
      </div>
    </main>
  );
} 