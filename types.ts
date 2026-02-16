
export enum Category {
  // Common
  TOPS = 'Tops',
  BOTTOMS = 'Bottoms',
  OUTERWEAR = 'Outerwear',
  SHOES = 'Shoes',
  BAGS = 'Bags',
  ACCESSORIES = 'Accessories',
  // Specific
  SHIRT = 'Shirt',
  TSHIRT = 'Tshirt',
  PANTS = 'Pants',
  JACKET = 'Jacket',
  COAT = 'Coat',
  WATCH = 'Watch',
  HAT = 'Hat',
  GLASSES = 'Glasses',
  BELT = 'Belt',
  TIE = 'Tie',
  SHORTS = 'Shorts',
  SNEAKERS = 'Sneakers',
  SUIT = 'Suit',
  CAP = 'Cap',
  GLOVES = 'Gloves',
  SOCKS = 'Socks',
  DRESS = 'Dress',
  SKIRT = 'Skirt',
  BLOUSE = 'Blouse',
  JEWELRY = 'Jewelry',
  MAKEUP = 'Makeup',
  PERFUME = 'Perfume',
  HAIR_ACCESSORY = 'HairAccessory',
  SUNGLASSES = 'Sunglasses',
  SANDALS = 'Sandals',
  NAIL = 'Nail',
  SCARF = 'Scarf',
  KIMONO = 'Kimono',
  DRESS_SET = 'DressSet',
  HOODIE = 'Hoodie'
}

export type Language = 'en' | 'ja';
export type Gender = 'male' | 'female';

export interface WardrobeItem {
  id: string;
  name: string;
  category: Category;
  gender: Gender;
  color: string;
  imageUrl: string;
  isFavorite: boolean;
  createdAt: number;
}

export interface StylingSuggestion {
  outfitName: string;
  description: string;
  itemsUsed: string[];
  styleTips: string[];
}

export interface DayOutfit {
  dayIndex: number;
  date: string;
  items: WardrobeItem[];
}
