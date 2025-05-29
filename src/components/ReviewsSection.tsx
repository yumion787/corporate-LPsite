import React from "react";
import Image from "next/image";
import reviews from "@/data/reviews.json";

const defaultPetImage = "/pet-default.jpg"; // public配下に用意

const ReviewsSection = () => {
  return (
    <section className="w-full py-12 flex flex-col items-center" style={{ backgroundColor: "#fff8e7" }}>
      <h2 className="text-2xl md:text-3xl font-bold mb-8 font-handwriting drop-shadow-sm">お客様の声</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-3xl mx-auto justify-items-center">
        {reviews.map((review, i) => (
          <div key={i} className="bg-white rounded-2xl shadow p-6 flex flex-col items-center w-80 border border-cream-dark font-handwriting">
            <div className="w-16 h-16 mb-2 rounded-2xl overflow-hidden border-2 border-green flex items-center justify-center bg-cream">
              <Image
                src={review.petImage && review.petImage !== "" ? review.petImage : defaultPetImage}
                alt="ペット画像"
                width={64}
                height={64}
                className="object-cover"
              />
            </div>
            <div className="flex gap-1 mb-2 text-lg">
              {Array.from({ length: 5 }).map((_, idx) => (
                <span key={idx}>{idx < review.rating ? "★" : "☆"}</span>
              ))}
            </div>
            <div className="text-sm font-bold min-h-[30px]">{review.owner}</div>
            <div className="mb-4 text-gray-700 text-base text-center min-h-[48px]">{review.comment}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewsSection; 