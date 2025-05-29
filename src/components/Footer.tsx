import React from "react";

const Footer = () => {
  return (
    <footer className="w-full py-8 bg-gray-900 text-white flex flex-col items-center gap-4 mt-12 px-4">
      <nav className="flex gap-6">
        <a href="#" className="hover:underline">ホーム</a>
        <a href="/contact" className="hover:underline">お問い合わせ</a>
      </nav>
      <div className="flex gap-4">
        <a href="#"><img src="x-logo-white.png" alt="X" width={20} height={20} /></a>
        <a href="#"><img src="instagram-logo.png" alt="Instagram" width={20} height={20} /></a>
      </div>
      <div className="text-xs text-gray-400">&copy; 2024 ペットシッターサービス</div>
    </footer>
  );
};

export default Footer; 