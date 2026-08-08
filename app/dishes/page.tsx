import { menuData } from "@/menu";

const tagColors: Record<string, string> = {
  "tea": "bg-foreground/10 text-foreground/80",
  "milk-base": "bg-accent/10 text-accent",
  "water-base": "bg-blue-100 text-blue-800",
  "vegetarian": "bg-green-100 text-green-800",
  "non-vegetarian": "bg-red-100 text-red-800",
  "sugar-free": "bg-purple-100 text-purple-800",
};

const categories = [
  { key: "tea", label: "☕ Tea" },
  { key: "milk-base", label: "🥛 Milk Base" },
  { key: "water-base", label: "💧 Water Base" },
  { key: "vegetarian", label: "🌱 Vegetarian Options" },
  { key: "non-vegetarian", label: "🍗 Non-Vegetarian Options" },
  { key: "sugar-free", label: "🚫🍬 Sugar-Free Options" },
];

export default function Dishes() {
  const getItemsForCategory = (categoryKey: string) => {
    if (categoryKey === "sugar-free") {
      return menuData.filter((item) => item.tags.includes("sugar-free"));
    }
    return menuData.filter((item) => item.tags.includes(categoryKey));
  };

  return (
    <main className="flex-1">
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-center mb-6">Our Dishes</h1>
          <p className="text-center text-foreground/70 max-w-2xl mx-auto mb-16">
            From crispy samosas to warm banana bread, every dish is made fresh to pair perfectly with your chai.
          </p>

          <div className="space-y-16">
            {categories.map((category) => {
              const items = getItemsForCategory(category.key);
              if (items.length === 0) return null;

              return (
                <div key={category.key}>
                  <h2 className="font-serif text-3xl md:text-4xl font-bold mb-8">{category.label}</h2>
                  {category.key === "sugar-free" && (
                    <p className="text-foreground/60 text-sm mb-6 max-w-3xl">
                      The menu doesn&apos;t explicitly label any item as “sugar-free.” However, these drinks can reasonably be offered without added sugar if the café prepares them that way.
                    </p>
                  )}
                  <div className="border border-foreground/10 rounded-2xl overflow-hidden">
                    <div className="overflow-x-auto">
                      <table className="w-full">
                        <thead>
                          <tr className="border-b border-foreground/10 bg-foreground/5">
                            <th className="text-left px-6 py-4 font-semibold text-sm">Item</th>
                            <th className="text-left px-6 py-4 font-semibold text-sm hidden md:table-cell">Description</th>
                            <th className="text-right px-6 py-4 font-semibold text-sm">Price (Rs.)</th>
                          </tr>
                        </thead>
                        <tbody>
                          {items.map((item, index) => (
                            <tr key={item.name} className={`border-b border-foreground/5 last:border-b-0 ${index % 2 === 0 ? "bg-background" : "bg-cream/30"}`}>
                              <td className="px-6 py-4">
                                <div className="flex items-center gap-3">
                                  <span className="font-medium">{item.name}</span>
                                  <div className="flex flex-wrap gap-1">
                                    {item.tags.filter((tag) => tag !== category.key).map((tag) => (
                                      <span key={tag} className={`text-xs px-2 py-0.5 rounded-full ${tagColors[tag] || "bg-foreground/10 text-foreground/70"}`}>
                                        {tag}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </td>
                              <td className="px-6 py-4 text-foreground/60 text-sm hidden md:table-cell">{item.description}</td>
                              <td className="text-right px-6 py-4 font-serif text-accent font-semibold">{item.price}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
