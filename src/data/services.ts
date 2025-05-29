// サービス内容を管理するファイル

export type Service = {
  id: string;
  title: string;
  price: string;
  duration: string;
  image: string;
  description: string;
  detail: string;
  animals: string;
  notes: string;
  flow: string[];
};

export const services: Service[] = [
  {
    id: "walk",
    title: "お散歩代行",
    price: "2,000円/回",
    duration: "30分",
    image: "/service-walk.jpg",
    description: "忙しい飼い主様の代わりに、プロが大切なワンちゃんをお散歩します。",
    detail: "プロのペットシッターがご自宅まで伺い、ワンちゃんのお散歩を代行します。健康管理や安全面にも配慮し、楽しい時間を提供します。",
    animals: "犬",
    notes: "攻撃的な性格の場合はご相談ください。リード・首輪はご用意ください。",
    flow: [
      "LINEまたはお問い合わせフォームからご予約",
      "日程・ご要望のヒアリング",
      "ご自宅訪問・サービス実施",
      "終了後にご報告・お支払い"
    ],
  },
  {
    id: "sitter",
    title: "ペットシッター",
    price: "3,500円/回",
    duration: "60分",
    image: "/service-sitter.jpg",
    description: "ご自宅でペットのお世話をいたします。猫・小動物も対応。",
    detail: "ご自宅でペットのごはん・トイレ・遊び・健康チェックなど、普段通りのお世話を代行します。猫や小動物も対応可能です。",
    animals: "犬・猫・小動物",
    notes: "持病や特別なケアが必要な場合は事前にご相談ください。",
    flow: [
      "LINEまたはお問い合わせフォームからご予約",
      "日程・ご要望のヒアリング",
      "ご自宅訪問・サービス実施",
      "終了後にご報告・お支払い"
    ],
  },
  {
    id: "training",
    title: "しつけ・トレーニング",
    price: "4,000円/回",
    duration: "45分",
    image: "/service-training.jpg",
    description: "経験豊富なトレーナーが、やさしく丁寧に指導します。",
    detail: "基本的なしつけから問題行動の改善まで、経験豊富なトレーナーがご自宅で指導します。飼い主様へのアドバイスも丁寧に行います。",
    animals: "犬",
    notes: "攻撃的な行動が強い場合は事前にご相談ください。",
    flow: [
      "LINEまたはお問い合わせフォームからご予約",
      "日程・ご要望のヒアリング",
      "ご自宅訪問・トレーニング実施",
      "終了後にご報告・お支払い"
    ],
  },
]; 