import { Button } from "@/components/ui/button";
import { ArrowRight, BarChart3, Coins, Globe } from "lucide-react";
import { Link } from "wouter";

/**
 * 服務項目頁面
 * 展示三大核心服務
 */

export default function Services() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 頁面標題 */}
      <section className="py-16 bg-card border-b border-accent/20">
        <div className="container">
          <h1 className="font-display text-5xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            Casa Gold 的服務
          </h1>
          <p className="text-xl text-foreground/70">
            全面的黃金貴金屬交易與投資諮詢解決方案
          </p>
        </div>
      </section>

      {/* 服務卡片 */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* 服務 1 */}
            <div className="card-luxury">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Coins className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                現貨黃金交易
              </h3>
              <p className="text-foreground/70 mb-6">
                提供全球最具競爭力的現貨黃金交易價格，支持多種交易方式與結算方式
              </p>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>✓ 實時報價與交易</li>
                <li>✓ 靈活的交易量</li>
                <li>✓ 安全的結算機制</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-outline-gold w-full">
                  了解詳情
                </Button>
              </Link>
            </div>

            {/* 服務 2 */}
            <div className="card-luxury">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <BarChart3 className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                投資諮詢服務
              </h3>
              <p className="text-foreground/70 mb-6">
                專業的市場分析與投資建議，幫助您制定最優的投資策略
              </p>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>✓ 市場趨勢分析</li>
                <li>✓ 投資組合管理</li>
                <li>✓ 風險評估與管理</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-outline-gold w-full">
                  了解詳情
                </Button>
              </Link>
            </div>

            {/* 服務 3 */}
            <div className="card-luxury">
              <div className="w-14 h-14 bg-accent/20 rounded-lg flex items-center justify-center mb-6">
                <Globe className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-bold mb-4 text-foreground">
                國際貿易服務
              </h3>
              <p className="text-foreground/70 mb-6">
                連接全球黃金市場，提供國際貿易與物流支持
              </p>
              <ul className="space-y-2 text-sm text-foreground/70 mb-6">
                <li>✓ 全球採購網絡</li>
                <li>✓ 物流與倉儲</li>
                <li>✓ 國際結算</li>
              </ul>
              <Link href="/contact">
                <Button className="btn-outline-gold w-full">
                  了解詳情
                </Button>
              </Link>
            </div>
          </div>

          {/* 詳細介紹 */}
          <div className="section-divider"></div>

          <div className="mt-16">
            <h2 className="font-display text-4xl font-bold mb-12 text-foreground">
              為什麼選擇銳典國際？
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-accent">
                  競爭力的價格
                </h3>
                <p className="text-foreground/70">
                  我們與全球頂級黃金供應商合作，為客戶提供最具競爭力的交易價格
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-accent">
                  專業的團隊
                </h3>
                <p className="text-foreground/70">
                  擁有超過 10 年行業經驗的專業分析師與交易員
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-accent">
                  完善的風險管理
                </h3>
                <p className="text-foreground/70">
                  建立了完整的風險管理機制，保護客戶的投資安全
                </p>
              </div>
              <div>
                <h3 className="font-display text-xl font-bold mb-3 text-accent">
                  全天候支援
                </h3>
                <p className="text-foreground/70">
                  提供 24/7 的客戶支援與市場分析服務
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-card border-t border-accent/20">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
            開始您的黃金投資之旅
          </h2>
          <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
            聯繫我們的專業顧問，獲得量身定制的投資方案
          </p>
          <Link href="/contact">
            <Button className="btn-gold text-lg">
              立即聯繫 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>

      {/* 頁尾 */}
      <footer className="bg-background border-t border-accent/20 py-12">
        <div className="container text-center text-foreground/50 text-sm">
          <p>&copy; 2026 銳典國際。版權所有。</p>
        </div>
      </footer>
    </div>
  );
}
