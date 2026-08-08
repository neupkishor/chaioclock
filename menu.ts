export interface MenuItem {
  name: string;
  description: string;
  price: number;
  tags: string[];
}

export const menuData: MenuItem[] = [
  { name: "Plain Kadak Chai", description: "Strong, robust tea brewed to perfection", price: 50, tags: ["tea", "milk-base"] },
  { name: "Masala Kadak Chai", description: "Kadak chai with a blend of aromatic spices", price: 70, tags: ["tea", "milk-base"] },
  { name: "Adrak Chai", description: "Spicy ginger-infused milk tea", price: 60, tags: ["tea", "milk-base"] },
  { name: "Elaichi Chai", description: "Fragrant cardamom-infused milk tea", price: 70, tags: ["tea", "milk-base"] },
  { name: "Masala Chai", description: "Traditional spiced tea with cardamom, cinnamon, and ginger", price: 70, tags: ["tea", "milk-base"] },
  { name: "Rose Chai", description: "Delicate rose-infused milk tea", price: 70, tags: ["tea", "milk-base"] },
  { name: "Kesar Milk Tea", description: "Luxurious saffron-infused milk tea", price: 120, tags: ["tea", "milk-base"] },
  { name: "Black Tea", description: "Classic strong black tea", price: 35, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Masala Black Tea", description: "Black tea with a hint of warming spices", price: 45, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Lemon Tea", description: "Zesty black tea with fresh lemon", price: 50, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Green Tea", description: "Light and refreshing green tea", price: 70, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Jasmine Tea", description: "Aromatic jasmine-scented green tea", price: 70, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Rose Tea", description: "Fragrant rose-infused black tea", price: 70, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Saffron Tea", description: "Premium saffron-infused black tea", price: 80, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Lemongrass Tea", description: "Citrusy and refreshing lemongrass infusion", price: 70, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Rosemary Tea", description: "Herbal rosemary-infused tea", price: 90, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Tulsi Tea", description: "Sacred basil herbal infusion", price: 80, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Hibiscus Tea", description: "Tangy and vibrant hibiscus infusion", price: 90, tags: ["tea", "water-base", "sugar-free"] },
  { name: "Mint Lemonade / Iced Tea", description: "Cool and refreshing iced tea with mint and lemon", price: 150, tags: ["tea", "water-base"] },
  { name: "Mango Iced Tea", description: "Sweet mango-flavored iced tea", price: 150, tags: ["tea", "water-base"] },
  { name: "Apple Iced Tea", description: "Crisp apple-flavored iced tea", price: 150, tags: ["tea", "water-base"] },
  { name: "Peach Iced Tea", description: "Juicy peach-flavored iced tea", price: 150, tags: ["tea", "water-base"] },
  { name: "Milk Coffee", description: "Rich and creamy coffee with milk", price: 120, tags: ["milk-base", "coffee"] },
  { name: "Hot Lemon", description: "Warm and soothing lemon drink", price: 50, tags: ["water-base", "sugar-free"] },
  { name: "Honey Hot Lemon", description: "Hot lemon sweetened with honey", price: 100, tags: ["water-base"] },
  { name: "Honey Ginger Hot Lemon", description: "Hot lemon with honey and ginger", price: 120, tags: ["water-base"] },
  { name: "Masala Black", description: "Black tea with a mix of warming spices", price: 50, tags: ["water-base", "sugar-free"] },
  { name: "Black Coffee", description: "Strong, bold black coffee", price: 80, tags: ["water-base", "sugar-free", "coffee"] },
  { name: "Paneer Momo", description: "Steamed dumplings filled with spiced cottage cheese", price: 150, tags: ["vegetarian", "sugar-free"] },
  { name: "Chatpatay", description: "Spicy and tangy mixed snack", price: 100, tags: ["vegetarian", "sugar-free"] },
  { name: "Wai Wai Sadheko", description: "Spicy Wai Wai noodles salad", price: 80, tags: ["vegetarian", "sugar-free"] },
  { name: "Aalo Paratha", description: "Whole wheat flatbread stuffed with spiced potatoes", price: 80, tags: ["vegetarian", "sugar-free"] },
  { name: "Aalo Chop (5 pcs)", description: "Crispy spiced potato patties", price: 100, tags: ["vegetarian", "sugar-free"] },
  { name: "Veg Pakoda (8 pcs)", description: "Assorted vegetable fritters", price: 100, tags: ["vegetarian", "sugar-free"] },
  { name: "Doughnut", description: "Soft, sweet fried dough", price: 25, tags: ["vegetarian"] },
  { name: "Puff", description: "Flaky pastry with savory filling", price: 25, tags: ["vegetarian", "sugar-free"] },
  { name: "Cookies", description: "Freshly baked crispy cookies", price: 25, tags: ["vegetarian"] },
  { name: "Soup*", description: "Warm and comforting soup", price: 100, tags: ["vegetarian", "sugar-free"] },
  { name: "Chips", description: "Crunchy salted chips", price: 50, tags: ["vegetarian", "sugar-free"] },
  { name: "Chips Combo", description: "Chips with a side of chutney", price: 70, tags: ["vegetarian", "sugar-free"] },
  { name: "Wai Wai (Soup/Fry)*", description: "Wai Wai noodles with soup or fry", price: 80, tags: ["vegetarian", "sugar-free"] },
  { name: "Chicken Momo", description: "Steamed dumplings filled with spiced chicken", price: 160, tags: ["non-vegetarian", "sugar-free"] },
  { name: "Keema Paratha", description: "Whole wheat flatbread stuffed with spiced minced meat", price: 100, tags: ["non-vegetarian", "sugar-free"] }
];
