"use client";

import { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem = ({ question, answer, isOpen, onClick }: FAQItemProps) => (
  <div className="border-b border-gray-100 last:border-0">
    <button
      onClick={onClick}
      className="w-full py-5 flex items-center justify-between text-right group"
      dir="rtl"
    >
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-full transition-colors ${isOpen ? 'bg-forest text-white' : 'bg-forest/10 text-forest group-hover:bg-forest/20'}`}>
          <HelpCircle className="w-5 h-5" />
        </div>
        <span className={`text-lg font-bold transition-colors ${isOpen ? 'text-forest' : 'text-gray-800'}`}>
          {question}
        </span>
      </div>
      <ChevronDown className={`w-6 h-6 text-gray-400 transition-transform duration-300 ${isOpen ? 'rotate-180 text-forest' : ''}`} />
    </button>
    <div className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}>
      <p className="text-gray-600 leading-relaxed pr-12 text-right" dir="rtl">
        {answer}
      </p>
    </div>
  </div>
);

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqData = [
    {
      question: "كيف أستخدم قالب الثلج بشكل صحيح؟",
      answer: "املئي القالب بالماء أو وصفتك المفضلة، ضعيه في المجمد لمدة 4 ساعات على الأقل. بعد التجمد، مرريه على وجهك بحركات دائرية لمدة دقيقتين كل صباح."
    },
    {
      question: "متى تظهر النتائج الملحوظة؟",
      answer: "ستشعرين بانتعاش فوري وتقليل للانتفاخ من أول استخدام. مع الاستمرار اليومي لمدة أسبوع، ستلاحظين مسام أصغر وبشرة أكثر شدة وإشراقاً."
    },
    {
      question: "هل هو مناسب للبشرة الحساسة؟",
      answer: "نعم، السيليكون المستخدم طبي وآمن. ننصح بلف الثلج بقطعة قماش ناعمة إذا كانت بشرتك شديدة الحساسية للبرودة المباشرة."
    },
    {
      question: "كيف أقوم بتنظيف القالب؟",
      answer: "ببساطة اغسليه بالماء الدافئ والصابون اللطيف بعد كل استخدام، واتركيه ليجف في الهواء قبل إعادة ملئه."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-forest mb-4">الأسئلة الشائعة</h2>
          <div className="w-20 h-1 bg-forest/20 mx-auto rounded-full"></div>
        </div>

        <div className="bg-cream/30 rounded-3xl p-6 md:p-8 shadow-sm">
          {faqData.map((item, index) => (
            <FAQItem
              key={index}
              question={item.question}
              answer={item.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
        
        <p className="text-center mt-8 text-gray-500 text-sm">
          لديك سؤال آخر؟ تواصل معنا عبر واتساب
        </p>
      </div>
    </section>
  );
}
