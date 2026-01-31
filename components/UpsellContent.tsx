"use client";

import { Droplets, Leaf, Flower2, Sparkles } from "lucide-react";

interface RecipeCardProps {
  title: string;
  benefit: string;
  icon: React.ReactNode;
  color: string;
}

const RecipeCard = ({ title, benefit, icon, color }: RecipeCardProps) => (
  <div className={`relative overflow-hidden rounded-2xl p-6 bg-white shadow-sm border-r-4 transition-all hover:shadow-md group`} style={{ borderRightColor: color }}>
    <div className="flex items-center gap-4 text-right" dir="rtl">
      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110`} style={{ backgroundColor: `${color}20`, color: color }}>
        {icon}
      </div>
      <div>
        <h4 className="text-lg font-bold text-gray-800 mb-1">{title}</h4>
        <p className="text-sm text-gray-500">{benefit}</p>
      </div>
    </div>
  </div>
);

export default function UpsellContent() {
  const recipes = [
    {
      title: "ماء الورد",
      benefit: "لنضارة وتوريد طبيعي",
      icon: <Flower2 className="w-6 h-6" />,
      color: "#f472b6" // pink-400
    },
    {
      title: "شاي أخضر",
      benefit: "لتقليل الالتهابات وحب الشباب",
      icon: <Leaf className="w-6 h-6" />,
      color: "#4ade80" // green-400
    },
    {
      title: "ليمون",
      benefit: "لتفتيح البشرة وتنقيتها",
      icon: <Sparkles className="w-6 h-6" />,
      color: "#facc15" // yellow-400
    },
    {
      title: "خيار",
      benefit: "لترطيب عميق وراحة للبشرة الحساسة",
      icon: <Droplets className="w-6 h-6" />,
      color: "#60a5fa" // blue-400
    }
  ];

  return (
    <section className="py-20 bg-cream">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-forest/10 text-forest text-sm font-bold mb-4">
            هدية إضافية ✨
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-forest mb-4">
            خلطات سحرية لنتائج أسرع
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            لا تكتفي بالماء فقط! جربي هذه الوصفات الطبيعية المذهلة داخل القالب للحصول على نتائج احترافية
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {recipes.map((recipe, index) => (
            <RecipeCard key={index} {...recipe} />
          ))}
        </div>

        <div className="mt-12 text-center p-6 bg-white/50 rounded-3xl border border-forest/5">
          <p className="text-forest font-semibold">
            🎁 نصيحة ذهبية: استخدمي هذه المكونات بانتظام وستشعرين بالفرق في نضارة وجهك خلال أيام قليلة!
          </p>
        </div>
      </div>
    </section>
  );
}
