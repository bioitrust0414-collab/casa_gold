import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone } from "lucide-react";
import { useState } from "react";

/**
 * 聯繫我們頁面
 * 提供聯繫表單與聯繫資訊
 */

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // 這裡可以添加表單提交邏輯
    console.log("Form submitted:", formData);
    alert("感謝您的諮詢！我們將盡快與您聯繫。");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 頁面標題 */}
      <section className="py-16 bg-card border-b border-accent/20">
        <div className="container">
          <h1 className="font-display text-5xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            联繫 Casa Gold
          </h1>
          <p className="text-xl text-foreground/70">
            有任何問題？我們的專業團隊隨時準備幫助您
          </p>
        </div>
      </section>

      {/* 聯繫資訊與表單 */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 聯繫方式 1 */}
            <div className="card-luxury">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                電話
              </h3>
              <p className="text-foreground/70">
                +886-2-XXXX-XXXX
              </p>
              <p className="text-foreground/70 text-sm mt-2">
                工作時間：週一至週五 09:00 - 18:00
              </p>
            </div>

            {/* 聯繫方式 2 */}
            <div className="card-luxury">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                郵箱
              </h3>
              <p className="text-foreground/70">
                info@ruidian.com
              </p>
              <p className="text-foreground/70 text-sm mt-2">
                我們將在 24 小時內回覆
              </p>
            </div>

            {/* 聯繫方式 3 */}
            <div className="card-luxury">
              <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground">
                地址
              </h3>
              <p className="text-foreground/70">
                台北市中正區信義路二段 259 號
              </p>
              <p className="text-foreground/70 text-sm mt-2">
                台灣
              </p>
            </div>
          </div>

          {/* 聯繫表單 */}
          <div className="max-w-2xl mx-auto">
            <h2 className="font-display text-4xl font-bold mb-8 text-center text-foreground">
              發送訊息給我們
            </h2>
            <form onSubmit={handleSubmit} className="card-luxury">
              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-foreground/80 font-semibold mb-2">
                    姓名 *
                  </label>
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="請輸入您的姓名"
                    required
                    className="bg-secondary border-accent/30 text-foreground placeholder:text-foreground/50"
                  />
                </div>
                <div>
                  <label className="block text-foreground/80 font-semibold mb-2">
                    電話 *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="請輸入您的電話"
                    required
                    className="bg-secondary border-accent/30 text-foreground placeholder:text-foreground/50"
                  />
                </div>
              </div>
              <div className="mb-6">
                <label className="block text-foreground/80 font-semibold mb-2">
                  郵箱 *
                </label>
                <Input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="請輸入您的郵箱"
                  required
                  className="bg-secondary border-accent/30 text-foreground placeholder:text-foreground/50"
                />
              </div>
              <div className="mb-8">
                <label className="block text-foreground/80 font-semibold mb-2">
                  訊息 *
                </label>
                <Textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="請輸入您的訊息"
                  required
                  rows={6}
                  className="bg-secondary border-accent/30 text-foreground placeholder:text-foreground/50"
                />
              </div>
              <Button type="submit" className="btn-gold w-full">
                發送訊息
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-card border-t border-accent/20 py-12">
        <div className="container text-center text-foreground/50 text-sm">
          <p>&copy; 2026 銳典國際。版權所有。</p>
        </div>
      </footer>
    </div>
  );
}
