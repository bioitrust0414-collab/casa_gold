# 銳典國際｜黃金貴金屬交易諮詢平台



銳典國際（Casa Gold）是一個以深色背景與金色視覺為核心的品牌形象網站，面向黃金與貴金屬交易諮詢服務，提供品牌介紹、服務項目、公司資訊與聯絡入口。網站採用響應式設計，適合桌面、平板與行動裝置瀏覽。



> 本專案目前為前端展示網站。頁面中的聯絡資訊、表單送出流程、即時行情與交易功能，需依實際營運需求另行串接後端服務或第三方 API。
> 


## 功能與頁面



| 頁面 | 路徑 | 說明 |

| --- | --- | --- |

| 首頁 | `/` | 品牌主視覺、核心價值、服務摘要與行動呼籲。 |

| 關於我們 | `/about` | 公司定位、品牌理念與專業優勢。 |

| 服務項目 | `/services` | 黃金交易、貴金屬貿易與市場分析等服務介紹。 |

| 聯絡我們 | `/contact` | 聯絡方式、服務據點與諮詢表單介面。 |

| 404 頁面 | 其他路徑 | 顯示找不到頁面的提示與返回入口。 |



網站視覺以「深色優雅與金色奢華」為設計方向，使用 Playfair Display、Montserrat 與 Lato 等字體搭配金色強調色，並包含卡片互動、按鈕狀態、內容淡入與行動版導航等視覺與互動設計。



## 技術棧



- **React 19**：建立元件化使用者介面。
- 
- **TypeScript 5.9**：提供型別安全與較易維護的程式碼結構。
- 
- **Vite 7**：負責本地開發伺服器與正式環境建置。
- 
- **Tailwind CSS 4**：處理響應式版面與設計樣式。
- 
- **Wouter**：處理前端路由。
- 
- **Lucide React**：提供介面圖示。
- 
- **React Hook Form 與 Zod**：支援表單狀態與資料驗證所需的元件。
- 
- **Netlify**：專案包含 `netlify.toml` 部署設定，可用於靜態網站部署。
- 


## 環境需求



開始前請確認本機已安裝：



- Node.js 18 或以上版本
- 
- pnpm 10 或相容的 Node.js 套件管理工具
- 


專案的 `package.json` 指定使用 pnpm，建議使用與專案相容的 pnpm 版本，以降低依賴安裝差異。



## 安裝與啟動



```bash

git clone https://github.com/bioitrust0414-collab/casa_gold.git

cd casa_gold

pnpm install

pnpm dev

```



啟動後，請開啟終端機顯示的本機網址，通常為 `http://localhost:5173`。



## 常用指令



| 指令 | 用途 |

| --- | --- |

| `pnpm dev` | 啟動 Vite 開發伺服器。 |

| `pnpm check` | 執行 TypeScript 型別檢查，不輸出編譯檔案。 |

| `pnpm build` | 建立正式環境檔案，輸出至專案根目錄的 `dist/`。 |

| `pnpm preview` | 在本機預覽正式建置結果。 |

| `pnpm format` | 使用 Prettier 格式化專案檔案。 |



建議在提交變更前執行型別檢查與正式建置：



```bash

pnpm check

pnpm build

```



## 專案結構



```text

casa_gold/

├── client/

│   ├── public/              # 靜態公開資源

│   ├── src/

│   │   ├── components/      # 共用 UI 元件與錯誤邊界

│   │   ├── contexts/        # React Context，例如主題狀態

│   │   ├── hooks/            # 共用自訂 Hooks

│   │   ├── lib/              # 共用工具函式

│   │   ├── pages/            # 首頁、關於、服務、聯絡與 404 頁面

│   │   ├── App.tsx          # 應用程式入口與路由設定

│   │   ├── index.css        # 全域樣式與設計 token

│   │   └── main.tsx         # React 掛載入口

│   └── index.html           # Vite HTML 入口

├── DESIGN_SYSTEM.md         # 品牌設計系統與架構說明

├── netlify.toml             # Netlify 部署設定

├── package.json             # 專案指令與依賴

├── tsconfig.json            # TypeScript 設定

└── vite.config.ts           # Vite 設定

```



## 設計系統



詳細的品牌規範請參考 [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md)。目前設計系統包含深黑色與深灰色背景、金色品牌強調色、淺色文字，以及 8px 間距基準。新增頁面或元件時，請優先沿用既有色彩、字體、圓角、陰影與互動規範，以維持整體品牌一致性。



## 建置與部署



正式建置使用：



```bash

pnpm build

```



Vite 會將產出檔案放在 `dist/`。若使用 Netlify，請確認建置指令設定為 `pnpm build`，發布目錄設定為 `dist`，並依 `netlify.toml` 的現有設定部署。部署前應先在本機執行 `pnpm check` 與 `pnpm build`，並檢查所有路由、圖片與聯絡表單介面。



## 開發注意事項



本專案目前以展示與品牌溝通為主，尚未包含可執行的交易、報價、會員、付款或後端表單處理。若要投入正式營運，建議先補上表單後端、輸入驗證、垃圾訊息防護、隱私權與服務條款頁面，並避免在前端公開任何 API 金鑰或敏感設定。



涉及黃金、貴金屬或市場分析的文案與資料，在上線前應由業務與法遵人員確認內容，並清楚區分一般資訊、諮詢服務與任何可能涉及金融規範的活動。



## 授權



本 repository 目前未提供獨立的 LICENSE 檔案。若要對外開放原始碼或允許第三方重複使用，請先由 repository 維護者補充適用的授權條款。












