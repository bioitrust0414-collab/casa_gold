import { Button } from "@/components/ui/button";
import { ArrowLeft, Maximize2, BarChart3 } from "lucide-react";
import { Link } from "wouter";
import { useEffect, useRef } from "react";

/**
 * 市場分析儀表板頁面
 * 嵌入黃金 (倫敦現貨) + 比特幣即時監控儀表板
 */
export default function Analysis() {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
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
      {/* 頂部導航列 */}
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
              <BarChart3 className="w-5 h-5 text-accent" />
              <span className="font-bold text-foreground" style={{ fontFamily: "'Montserrat', sans-serif" }}>
                市場分析
              </span>
              <span className="text-xs text-foreground/50">· 倫敦金價 / BTC 即時監控</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <a
              href="/analysis.html"
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

      {/* 儀表板本體 */}
      <div className="flex-1 pt-16">
        <iframe
          ref={iframeRef}
          src="/analysis.html"
          title="黃金與比特幣即時監控儀表板"
          className="w-full border-0"
          style={{ height: "calc(100vh - 64px)" }}
          allow="autoplay"
        />
      </div>
    </div>
  );
}
