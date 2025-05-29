import React from "react";
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion";

const faqs = [
  {
    question: "シッターはどんな人ですか？",
    answer: "経験豊富な有資格者が対応します。",
  },
  {
    question: "対応エリアはどこまで？",
    answer: "東京都内全域に対応しています。",
  },
  {
    question: "急な依頼は可能ですか？",
    answer: "前日18時まで受け付けています。",
  },
];

const FaqSection = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center bg-cream-light">
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-handwriting drop-shadow-sm">よくある質問</h2>
      <div className="w-full max-w-2xl px-2">
        {/* アコーディオン形式 */}
        <Accordion type="single" collapsible>
          {faqs.map((faq, idx) => (
            <AccordionItem key={idx} value={`faq-${idx}`}>
              <AccordionTrigger className="text-lg font-semibold bg-cream rounded-t-lg px-4 py-3">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="bg-white px-4 py-4 text-gray-700 border-b border-cream-dark">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FaqSection; 