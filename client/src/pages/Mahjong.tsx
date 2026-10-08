import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2 } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

/**
 * 麻將消除小遊戲頁面
 * 嵌入完整的 Mahjong Solitaire 遊戲
 */
export default function Mahjong() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    // 確保 iframe 填滿可用空間
    const handleResize = () => {
      if (iframeRef.current) {
        iframeRef.current.style.height = `${window.innerHeight - 64}px`;
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      {/* 頂部導航列（與主站一致風格） */}
      <nav className="fixed top-0 w-full bg-background/90 backdrop-blur-md border-b border-accent/20 z-50 h-16">
        <div className="container flex items-center justify-between h-full">
          <div className="flex items-center gap-4">
            <Link href="/">
              <Button variant="ghost" size="sm" className="text-foreground/80 hover:text-accent gap-2">
                <ArrowLeft className="w-4 h-4" />
                返回首頁
              </Button>
            </Link>
            <div className="hidden sm:flex items-center gap-2">
              <span className="text-accent font-semibold">🀄</span>
              <span className="font-bold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                麻將消除
              </span>
              <span className="text-xs text-foreground/50">· 休閒小遊戲</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/mahjong.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-foreground/70 hover:text-accent transition-colors flex items-center gap-1"
            >
              <Maximize2 className="w-4 h-4" />
              全螢幕開啟
            </a>
          </div>
        </div>
      </nav>

      {/* 遊戲本體 */}
      <div className="flex-1 pt-16">
        <iframe
          ref={iframeRef}
          src="/mahjong.html"
          title="麻將消除 · Mahjong Solitaire"
          className="w-full border-0"
          style={{ height: "calc(100vh - 64px)" }}
          allow="autoplay"
        />
      </div>
    </div>
  );
}
