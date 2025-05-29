"use client";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import emailjs from "emailjs-com";
import ReCAPTCHA from "react-google-recaptcha";
import Link from "next/link";

const schema = z.object({
  name: z.string().min(1, "お名前は必須です"),
  email: z.string().email("メールアドレスの形式で入力してください"),
  service: z.string().min(1, "サービスを選択してください"),
  message: z.string().min(1, "お問い合わせ内容は必須です"),
});

type FormData = z.infer<typeof schema>;

const serviceOptions = [
  { value: "散歩代行", label: "散歩代行" },
  { value: "日帰りお世話", label: "日帰りお世話" },
  { value: "宿泊ケア", label: "宿泊ケア" },
];

// .envから取得する想定（ダミー値）
const EMAILJS_SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || "your_service_id";
const EMAILJS_TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || "your_template_id";
const EMAILJS_USER_ID = process.env.NEXT_PUBLIC_EMAILJS_USER_ID || "your_public_key";
const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "your_recaptcha_site_key";
// 


export default function ContactPage() {
  const { register, handleSubmit, formState: { errors, isSubmitting }, setValue, watch, reset } = useForm<FormData>({
    resolver: zodResolver(schema),
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [submitStatus, setSubmitStatus] = useState<"idle"|"success"|"error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const onSubmit = async (data: FormData) => {
    setSubmitStatus("idle");
    setSubmitMessage("");
    const recaptchaValue = recaptchaRef.current?.getValue();
    if (!recaptchaValue) {
      setSubmitStatus("error");
      setSubmitMessage("reCAPTCHA認証を完了してください。");
      return;
    }
    try {
      // EmailJS送信
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          name: data.name,
          email: data.email,
          service: data.service,
          message: data.message,
          "g-recaptcha-response": recaptchaValue,
        },
        EMAILJS_USER_ID
      );
      setSubmitStatus("success");
      setSubmitMessage("送信が完了しました。ありがとうございました！");
      reset();
      recaptchaRef.current?.reset();
    } catch (_) {
      setSubmitStatus("error");
      setSubmitMessage("送信に失敗しました。時間をおいて再度お試しください。");
    }
  };

  return (
    <main className="min-h-screen bg-cream-light py-12 px-4 flex flex-col items-center font-handwriting"
      style={{ backgroundColor: "#fff8e7" }}>
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full border border-cream-dark">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">お問い合わせ</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-6">
          <div>
            <label className="block mb-1 font-semibold">お名前</label>
            <Input {...register("name")}
              placeholder="例：山田 太郎"
              className="bg-cream-light" />
            {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold">メールアドレス</label>
            <Input {...register("email")}
              type="email"
              placeholder="例：sample@example.com"
              className="bg-cream-light" />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold">サービス選択</label>
            <Select onValueChange={(v: string) => setValue("service", v)} value={watch("service") || ""}>
              <SelectTrigger className="bg-cream-light">
                <SelectValue placeholder="選択してください" />
              </SelectTrigger>
              <SelectContent>
                {serviceOptions.map(opt => (
                  <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                ))}
              </SelectContent>
            </Select>
            {errors.service && <p className="text-red-500 text-sm mt-1">{errors.service.message}</p>}
          </div>
          <div>
            <label className="block mb-1 font-semibold">お問い合わせ内容</label>
            <Textarea {...register("message")}
              placeholder="ご質問・ご要望などご自由にご記入ください"
              className="bg-cream-light min-h-[100px]" />
            {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>}
          </div>
          <div className="flex justify-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={RECAPTCHA_SITE_KEY}
              theme="light"
            />
          </div>
          {submitStatus === "success" && <p className="text-green-600 text-center">{submitMessage}</p>}
          {submitStatus === "error" && <p className="text-red-500 text-center">{submitMessage}</p>}
          <Button type="submit" className="bg-green hover:bg-green-dark text-white rounded-full px-6 py-2 text-lg font-handwriting" disabled={isSubmitting}>
            送信する
          </Button>
        </form>
        <div className="flex justify-end">
          <Link href="/" className="underline hover:text-orange font-bold">← トップページへ戻る</Link>
      </div>
      </div>
    </main>
  );
} 