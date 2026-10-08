import { Button } from "@/components/ui/button";

import { ArrowRight, Shield, TrendingUp, Zap } from "lucide-react";
import { Link } from "wouter";

/**
 * Casa Gold International 首頁
 * 設計系統：玄青色背景 + 金色強調
 * - Hero 區展示品牌願景與核心價值
 * - 功能卡片展示三大服務
 * - CTA 按鈐引導用戶联繫詳詢
 * - 黃金價格走勢圖表展示
 */

export default function Home() {

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* 導航欄 */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-accent/20 z-50">
        <div className="container flex items-center justify-between h-16">
          <Link href="/">
            <div className="flex items-center gap-3 cursor-pointer">
              <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663103483326/OJuVSreACaZGNrZS.png" alt="Casa Gold International Logo" className="h-10 w-auto" />
              <div>
                <span className="font-bold text-lg text-foreground" style={{fontFamily: "'Montserrat', sans-serif"}}>Casa Gold International</span>
                <div className="text-xs text-accent" style={{fontFamily: "'Playfair Display', serif"}}>銳典國際</div>
              </div>
            </div>
          </Link>
          <div className="hidden md:flex items-center gap-8">
            <Link href="/" className="text-foreground/80 hover:text-accent transition-colors">首頁</Link>
            <Link href="/about" className="text-foreground/80 hover:text-accent transition-colors">關於我們</Link>
            <Link href="/services" className="text-foreground/80 hover:text-accent transition-colors">服務項目</Link>
            <Link href="/contact" className="text-foreground/80 hover:text-accent transition-colors">聯繫我們</Link>
            <Link href="/mahjong" className="text-foreground/80 hover:text-accent transition-colors">🀄 休閒遊戲</Link>
          </div>
          <Link href="/contact">
            <Button variant="outline" className="btn-outline-gold">
              諮詢報價
            </Button>
          </Link>
        </div>
      </nav>

      {/* Hero 區 */}
      <section className="hero-section pt-16" style={{
        backgroundImage: 'url(https://files.manuscdn.com/user_upload_by_module/session_file/310519663103483326/NXiyEDuvqUaHrRtT.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        opacity: 1
      }}>
        <div className="absolute inset-0 bg-background/40"></div>
        <div className="container relative z-10 min-h-[calc(100vh-64px)] flex flex-col items-center justify-center text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            專業黃金交易諮詢
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl">
            Casa Gold International 致力於為全球客戶提供透明、誠信的黃金貴金屬交易與投資諮詢服務
          </p>
          <div className="flex gap-4">
            <Link href="/contact">
              <Button className="btn-gold text-lg">
                立即諮詢 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link href="/services">
              <Button className="btn-outline-gold text-lg">
                瞭解服務
              </Button>
            </Link>
          </div>
          
          {/* QR Code 區 */}
          <div className="mt-12 pt-8 border-t border-accent/20">
            <p className="text-sm text-foreground/60 mb-4">掃描 QR Code 快速訪問</p>
            <img src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663103483326/XrXjbhphBLMZGiEx.png" alt="Casa Gold QR Code" className="w-32 h-32 mx-auto" />
          </div>
        </div>
      </section>

      {/* 核心價值 */}
      <section className="py-20 bg-card border-t border-accent/20">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            為什麼選擇 Casa Gold
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Shield className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                安全可靠
              </h3>
              <p className="text-foreground/70">
                完善的風險管理機制與透明的交易流程，保護您的投資安全
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                專業分析
              </h3>
              <p className="text-foreground/70">
                資深分析師團隊提供實時市場分析與投資建議
              </p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                <Zap className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold mb-3 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                快速高效
              </h3>
              <p className="text-foreground/70">
                24/7 全天候交易與客戶支援，快速響應您的需求
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 服務預覽 */}
      <section className="py-20 bg-background">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-16 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            我們的服務
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                現貨黃金交易
              </h3>
              <p className="text-foreground/70 mb-6">
                全球最具競爭力的現貨黃金交易價格，支持多種交易方式
              </p>
              <Link href="/services">
                <Button className="btn-outline-gold w-full">
                  瞭解更多
                </Button>
              </Link>
            </div>
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                投資諮詢
              </h3>
              <p className="text-foreground/70 mb-6">
                專業的市場分析與投資建議，幫助您制定最優策略
              </p>
              <Link href="/services">
                <Button className="btn-outline-gold w-full">
                  瞭解更多
                </Button>
              </Link>
            </div>
            <div className="card-luxury">
              <h3 className="text-2xl font-bold mb-4 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                國際貿易
              </h3>
              <p className="text-foreground/70 mb-6">
                連接全球黃金市場，提供國際貿易與物流支持
              </p>
              <Link href="/services">
                <Button className="btn-outline-gold w-full">
                  瞭解更多
                </Button>
              </Link>
            </div>
          </div>
          <div className="text-center">
            <Link href="/services">
              <Button className="btn-gold text-lg">
                查看所有服務 <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>



      {/* 休閒遊戲推薦 */}
      <section className="py-16 bg-background border-t border-accent/20">
        <div className="container">
          <div className="card-luxury flex flex-col md:flex-row items-center gap-8 p-8">
            <div className="text-6xl">🀄</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
                休閒一刻 · 麻將消除
              </h3>
              <p className="text-foreground/70 mb-4">
                工作之餘來一局經典麻將接龍吧！完全可解的牌局設計，考驗觀察與策略，放鬆心情。
              </p>
              <Link href="/mahjong">
                <Button className="btn-gold">
                  立即遊玩 <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA 區 */}
      <section className="py-20 bg-card border-t border-accent/20">
        <div className="container text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground" style={{fontFamily: "'Playfair Display', serif"}}>
            準備開始您的黃金投資之旅？
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
      <footer className="bg-card border-t border-accent/20 py-12">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-bold text-foreground mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>Casa Gold</h4>
              <p className="text-foreground/70 text-sm">
                專業的黃金貴金屬交易與投資諮詢平台
              </p>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>快速連結</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/" className="text-foreground/70 hover:text-accent">首頁</Link></li>
                <li><Link href="/about" className="text-foreground/70 hover:text-accent">關於我們</Link></li>
                <li><Link href="/services" className="text-foreground/70 hover:text-accent">服務項目</Link></li>
                <li><Link href="/mahjong" className="text-foreground/70 hover:text-accent">🀄 休閒遊戲</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>聯繫方式</h4>
              <ul className="space-y-2 text-sm text-foreground/70">
                <li>電話：+886-2-XXXX-XXXX</li>
                <li>郵箱：info@casagold.com</li>
                <li>地址：新北市淡水區</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-foreground mb-4" style={{fontFamily: "'Montserrat', sans-serif"}}>社群媒體</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="text-foreground/70 hover:text-accent">Facebook</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">LinkedIn</a></li>
                <li><a href="#" className="text-foreground/70 hover:text-accent">WeChat</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-accent/20 pt-8 text-center text-foreground/50 text-sm">
            <p>&copy; 2026 Casa Gold International. 版權所有。</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
