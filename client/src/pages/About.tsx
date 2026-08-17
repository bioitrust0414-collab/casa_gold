import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

/**
 * 關於我們頁面
 * 展示公司背景、團隊與優勢
 */

export default function About() {
  return (
    <div className="min-h-screen bg-background text-foreground pt-20">
      {/* 頁面標題 */}
      <section className="py-16 bg-card border-b border-accent/20">
        <div className="container">
          <h1 className="font-display text-5xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            關於 Casa Gold International
          </h1>
          <p className="text-xl text-foreground/70">
            致力於提供全球頂級的黃金貴金屬交易與諸詢服務
          </p>
        </div>
      </section>

      {/* 公司介紹 */}
      <section className="py-20 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl font-bold mb-6 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                我們的故事
              </h2>
              <p className="text-foreground/70 mb-4">
                Casa Gold International 成立於 2015 年，是一家專業的黃金貴金屬交易與投資諸詢平台。我們致力於為全球客戶提供透明、誠信的交易服務與專業市場分析。
              </p>
              <p className="text-foreground/70 mb-4">
                經過多年的發展，我們已建立了強大的交易網絡、專業的分析團隊與完善的風險管理機制，成為業界領先的黃金交易平台。
              </p>
              <p className="text-foreground/70">
                我們的使命是幫助投資者在全球黃金市場中把握機遇，實現財富延值。
              </p>
            </div>
            <div className="rounded-lg overflow-hidden gold-glow">
              <img 
                src="https://private-us-east-1.manuscdn.com/sessionFile/0jlUc3kwUEmNBMPAjV1euc/sandbox/yYh9lanmERmJBF9OK7DB8Q-img-4_1771900840000_na1fn_Z29sZC1iYXJzLWRldGFpbA.png?x-oss-process=image/resize,w_1920,h_1920/format,webp/quality,q_80&Expires=1798761600&Policy=eyJTdGF0ZW1lbnQiOlt7IlJlc291cmNlIjoiaHR0cHM6Ly9wcml2YXRlLXVzLWVhc3QtMS5tYW51c2Nkbi5jb20vc2Vzc2lvbkZpbGUvMGpsVWMza3dVRW1OQk1QQWpWMWV1Yy9zYW5kYm94L3lZaDlsYW5tRVJtSkJGOU9LN0RCOFEtaW1nLTRfMTc3MTkwMDg0MDAwMF9uYTFmbl9aMjlzWkMxaVlYSnpMV1JsZEdGcGJBLnBuZz94LW9zcy1wcm9jZXNzPWltYWdlL3Jlc2l6ZSx3XzE5MjAsaF8xOTIwL2Zvcm1hdCx3ZWJwL3F1YWxpdHkscV84MCIsIkNvbmRpdGlvbiI6eyJEYXRlTGVzc1RoYW4iOnsiQVdTOkVwb2NoVGltZSI6MTc5ODc2MTYwMH19fV19&Key-Pair-Id=K2HSFNDJXOU9YS&Signature=Nlqk-Bh44G6vKoa6YnREzhbASh35v9w5vtfzdxvXj0RnHjaGXGovGUn9xYCQwNCBlh5B9Z05-DAu2AVFBYWIx7wA5jZxnWOmhCZh6jWm3fIL0dHEtml38O6uH~W3~civ6NWmAmO0UKQsfg0aLKbnAgfyMNENpGFt8EMXJEWqAEFoD~h-xMXHLLSoYSVTWHvvOCvBj9NTv8i~ObszwynC9ATOzMIqI5J33iMc5O3nH0Wv5HTH7ZNznNMPgix9leYoWMnjvPW-wG4-wdzw64rsIxIS3flY6AXbKHEcxQbOcWvIHxT1RcxLKwFpkXFiWaEpA1DYxBQQBqJdPM2B~D3Mvw__"
                alt="黃金條塊"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 核心價值觀 */}
      <section className="py-20 bg-card border-t border-accent/20">
        <div className="container">
          <h2 className="font-display text-4xl font-bold text-center mb-16 text-foreground">
            我們的核心價值觀
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                信任
              </h3>
              <p className="text-foreground/70">
                透明的交易流程與完整的風險管理，是我們贏得客戶信任的基礎
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                專業
              </h3>
              <p className="text-foreground/70">
                專業的分析團隊與深厚的行業經驗，提供最優質的服務
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">⭐</span>
              </div>
              <h3 className="font-display text-2xl font-bold mb-3 text-foreground">
                卓越
              </h3>
              <p className="text-foreground/70">
                持續創新與改進，追求卓越的服務品質
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-background">
        <div className="container text-center">
          <h2 className="font-display text-4xl font-bold mb-6 text-foreground">
            準備與我們合作？
          </h2>
          <Link href="/contact">
            <Button className="btn-gold text-lg">
              聯繫我們 <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
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
