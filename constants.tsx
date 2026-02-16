import React from 'react';
import { Language, Category, Gender } from './types';

/* ===== DESIGN COLORS (ဒီဇိုင်းတွင် အသုံးပြုမည့် အရောင်များ) ===== */
export const COLORS = {
  GOLD: '#D4A373',      // Champagne Gold (ရွှေအိုရောင်)
  ESPRESSO: '#2D2424',  // Studio Charcoal (ကျောက်မီးသွေးရောင် - Navy အစားထိုး)
  LINEN: '#FDFCFB',     // အဖြူရောင်ဘက်သန်းသော လင်နင်ရောင်
  SKY: '#A2D2FF',       // ကောင်းကင်ပြာရောင်
  CHARCOAL: '#2D2424',  // မီးခိုးရင့်ရောင်
};

/* ===== NAVIGATION (စာမျက်နှာ လမ်းညွှန်ချက်များ) ===== */
export const NAVIGATION = [
  { path: '/', label: 'Home', ja: 'ホーム' },
  { path: '/collection', label: 'Collection', ja: 'コレクション' },
  { path: '/add', label: 'Add Piece', ja: 'アイテム登録' }, // ပစ္စည်းအသစ်ထည့်ရန်
  { path: '/styling', label: 'Styling', ja: 'スタイリング' },
  { path: '/favorites', label: 'Favorites', ja: 'お気に入り' },
];

/* ===== GENDER OPTIONS (ကျား/မ ရွေးချယ်မှုများ) ===== */
export const GENDER_OPTIONS = [
  { value: 'female' as Gender, label: 'Female', ja: 'レディース', icon: '✨' },
  { value: 'male' as Gender, label: 'Male', ja: 'メンズ', icon: '🎩' },
];

/* ===== CATEGORY MAPS (အမျိုးအစားအလိုက် ခွဲခြားခြင်း) ===== */
export const CATEGORY_MAPS = {
  male: [
    { value: Category.TSHIRT, label: "Tシャツ", icon: "👕" },
    { value: Category.SHIRT, label: "シャツ", icon: "👔" },
    { value: Category.PANTS, label: "パンツ", icon: "👖" },
    { value: Category.SHORTS, label: "ショーツ", icon: "🩳" },
    { value: Category.JACKET, label: "ジャケット", icon: "🧥" },
    { value: Category.COAT, label: "コート", icon: "🧥" },
    { value: Category.SUIT, label: "スーツ", icon: "🤵" },
    { value: Category.SHOES, label: "靴", icon: "👞" },
    { value: Category.SNEAKERS, label: "スニーカー", icon: "👟" },
    { value: Category.BAGS, label: "バッグ", icon: "💼" },
    { value: Category.WATCH, label: "腕時計", icon: "⌚" },
    { value: Category.HAT, label: "ハット", icon: "🎩" },
    { value: Category.CAP, label: "キャップ", icon: "🧢" },
    { value: Category.ACCESSORIES, label: "アクセ", icon: "⛓" },
    { value: Category.GLASSES, label: "メガネ", icon: "👓" },
    { value: Category.BELT, label: "ベルト", icon: "🧷" },
    { value: Category.TIE, label: "ネクタイ", icon: "👔" },
    { value: Category.GLOVES, label: "手袋", icon: "🧤" },
    { value: Category.SOCKS, label: "靴下", icon: "🧦" },
  ],
  female: [
    { value: Category.TSHIRT, label: "Tシャツ", icon: "👕" },
    { value: Category.BLOUSE, label: "ブラウス", icon: "👚" },
    { value: Category.DRESS, label: "ドレス", icon: "👗" },
    { value: Category.SKIRT, label: "スカート", icon: "👗" },
    { value: Category.DRESS_SET, label: "セットアップ", icon: "👗✨" },
    { value: Category.PANTS, label: "パンツ", icon: "👖" },
    { value: Category.SHORTS, label: "ショーツ", icon: "🩳" },
    { value: Category.OUTERWEAR, label: "アウター", icon: "🧥" },
    { value: Category.COAT, label: "コート", icon: "🧥" },
    { value: Category.SHOES, label: "パンプス", icon: "👠" },
    { value: Category.SNEAKERS, label: "スニーカー", icon: "👟" },
    { value: Category.SANDALS, label: "サンダル", icon: "𑑡" },
    { value: Category.BAGS, label: "バッグ", icon: "👜" },
    { value: Category.JEWELRY, label: "ジュエリー", icon: "💍" },
    { value: Category.ACCESSORIES, label: "アクセ", icon: "🎀" },
    { value: Category.MAKEUP, label: "メイク", icon: "💄" },
    { value: Category.PERFUME, label: "香水", icon: "🌸" },
    { value: Category.NAIL, label: "ネイル", icon: "💅" },
    { value: Category.HAIR_ACCESSORY, label: "ヘアアクセ", icon: "🧚‍♀️" },
    { value: Category.HAT, label: "帽子", icon: "👒" },
    { value: Category.SUNGLASSES, label: "サングラス", icon: "🕶" },
    { value: Category.SCARF, label: "スカーဖ်", icon: "🧣" },
    { value: Category.KIMONO, label: "着物", icon: "👘" },
    { value: Category.HOODIE, label: "フーディー", icon: "🧸" },
  ]
};

/* ===== SIMILAR GROUPS (အလားတူ ပစ္စည်းများကို စုစည်းခြင်း) ===== */
export const SIMILAR_GROUPS: Record<string, Category[]> = {
  tops: [Category.SHIRT, Category.TSHIRT, Category.BLOUSE, Category.HOODIE, Category.TOPS],
  bottoms: [Category.PANTS, Category.SHORTS, Category.SKIRT],
  outerwear: [Category.JACKET, Category.COAT, Category.OUTERWEAR],
  shoes: [Category.SHOES, Category.SNEAKERS, Category.SANDALS],
  bags: [Category.BAGS],
  dresses: [Category.DRESS, Category.DRESS_SET, Category.KIMONO, Category.SUIT]
};

/* ပုံသေအားဖြင့် အမျိုးသမီးဝတ် အမျိုးအစားများကို အသုံးပြုမည် */
export const UNIFIED_CATEGORIES = CATEGORY_MAPS.female;

/* ===== TRANSLATIONS (အင်္ဂလိပ် နှင့် ဂျပန် ဘာသာပြန်ဆိုချက်များ) ===== */
export const TRANSLATIONS = {
  en: {
    homeTitle: "My Wardrobe Palette",
    homeSubtitle: "Style your vibe, curate your vision.",
    galleryTitle: "Archives",
    gallerySub: "Personal Collection",
    tabCategories: "Cats",
    tabAll: "All",
    addTitle: "Add Piece",
    addJa: "アイテム登録",
    stylingTitle: "Style Drops",
    stylingJa: "おすすめコーデ",
    favTitle: "Essentials",
    favJa: "お気に入り",
    itemName: "Name",
    category: "Type",
    gender: "Vibe",
    primaryColor: "Color",
    capture: "Shoot Piece",
    addBtn: "Add to Studio",
    stylingPrompt: "Choose vibes",
    stylingPlaceholder: "e.g. Street style, Minimalist evening...",
    curateBtn: "Drop Outfit",
    noItems: "Empty archive.",
    noFavs: "Nothing loved yet.",
    favSub: "Heart your essentials to see them here.",
    removePiece: "Remove",
    confirmRemove: "Delete this piece?",
    minItemsAlert: "Need 3+ pieces to style!",
    featuredPieces: "Pieces",
    curatorTips: "Style Notes",
    stylistSuggestion: "The Drop",
    changeImage: "Change",
    designerTag: "Creator & Designer",
    all: "All",
    logout: "Sign Out",
    totalItems: "Total Pieces",
    save: "Done",
    close: "Close",
    change: "Refresh",
    pickCategories: "Vibe Set",
    seasons: {
      spring: "Fresh drops.",
      summer: "Sun-kissed vibes.",
      autumn: "Layering season.",
      winter: "Frost finish."
    }
  },
  ja: {
    homeTitle: "Wardrobe Palette",
    homeSubtitle: "自分だけのスタイルを、自由にアーカイブ。",
    galleryTitle: "アーカイブ",
    gallerySub: "マイ・コレクション",
    tabCategories: "カテゴリ",
    tabAll: "すべて",
    addTitle: "アイテム登録",
    addJa: "アイテム登録",
    stylingTitle: "スタイル・ドロップ",
    stylingJa: "おすすめコーデ",
    favTitle: "エッセンシャル",
    favJa: "お気に入り",
    itemName: "名前",
    category: "カテゴリ",
    gender: "バイブス",
    primaryColor: "カラー",
    capture: "アイテムを撮影",
    addBtn: "スタジオに追加",
    stylingPrompt: "バイブスを選択",
    stylingPlaceholder: "例：ストリート、ミニマル、夜のお出かけ...",
    curateBtn: "コーデを作成",
    noItems: "アーカイブが空です。",
    noFavs: "お気に入りがありません。",
    favSub: "お気に入りをハートして、ここに表示しましょう。",
    removePiece: "削除",
    confirmRemove: "このアイテムを削除しますက？",
    minItemsAlert: "3つ以上のアイテムが必要です！",
    featuredPieces: "使用アイテム",
    curatorTips: "スタイル・ノート",
    stylistSuggestion: "今日の提案",
    changeImage: "変更",
    designerTag: "企画・デザイン",
    all: "すべて",
    logout: "サインアウト",
    totalItems: "総数",
    save: "完了",
    close: "閉じる",
    change: "リフレッシュ",
    pickCategories: "バイブス設定",
    
    seasons: {
      spring: "新たな始まり。",
      summer: "夏のぬくもり。",
      autumn: "レイヤードの季節。",
      winter: "冬の静寂。"
    }
  }
};

/* ===== DESIGNER CREDIT (ဒီဇိုင်းနာ အမှတ်တရ Footer အပိုင်း) ===== */
export const DesignerCredit = ({ lang }: { lang: Language }) => (
  <footer className="w-full py-20 mt-8 text-center relative flex flex-col items-center">
    <div className="w-16 h-[1px] bg-champagne/40 mb-10" />
    <div className="flex flex-col items-center justify-center space-y-2 group">
      {/* ဒီဇိုင်နာ အညွှန်းစာသား */}
      <p className="text-[8px] uppercase tracking-[0.6em] font-medium text-[#2D2424]/40">
        {TRANSLATIONS[lang].designerTag}
      </p>
      {/* ဒီဇိုင်နာ အမည် */}
      <div className="relative">
        <p className="text-lg font-serif tracking-[0.6em] uppercase font-black text-[#2D2424] transition-all duration-700 group-hover:tracking-[0.8em]">
          YAMIN EI
        </p>
        <span className="absolute -right-16 top-1/2 -translate-y-1/2 text-[10px] font-sans tracking-[0.2em] opacity-30 font-black text-[#2D2424]">
          2026
        </span>
      </div>
      {/* အလှဆင် အစက်ကလေးများ */}
      <div className="pt-6 flex items-center gap-6 opacity-20">
        <div className="w-1 h-1 bg-[#2D2424] rounded-full" />
        <div className="w-1 h-1 bg-[#2D2424] rounded-full" />
        <div className="w-1 h-1 bg-[#2D2424] rounded-full" />
      </div>
    </div>
  </footer>
);