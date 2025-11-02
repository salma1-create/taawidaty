import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/lib/translations";
import { faqData } from "@/lib/faqData";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FaqCnops = () => {
  const { language } = useLanguage();
  const t = translations[language];
  const faq = faqData[language].cnops;
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <div className="container max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate('/')}
            className="mb-4"
          >
            <ArrowLeft className={`h-4 w-4 ${language === 'ar' ? 'ml-2 rotate-180' : 'mr-2'}`} />
            {t.calculator.back}
          </Button>
          
          <div className="flex items-center gap-3 mb-4">
            <HelpCircle className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">{faq.title}</h1>
          </div>
          
          <p className="text-gray-600 text-lg">{faq.subtitle}</p>
        </div>

        {/* FAQ Accordion */}
        <Accordion type="single" collapsible className="space-y-4">
          {faq.questions.map((faqItem: any, index: number) => (
            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg shadow-sm border">
              <AccordionTrigger className="px-6 hover:no-underline">
                <span className="text-left font-semibold">{faqItem.question}</span>
              </AccordionTrigger>
              <AccordionContent className="px-6 pb-4">
                <div className="prose prose-sm max-w-none" dangerouslySetInnerHTML={{ __html: faqItem.answer }} />
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* CTA Back to Calculator */}
        <div className="mt-12 p-6 bg-primary/5 rounded-lg text-center">
          <h3 className="text-xl font-semibold mb-3">{t.faq.cta.title}</h3>
          <p className="text-gray-600 mb-4">{t.faq.cta.subtitle}</p>
          <Button onClick={() => navigate('/')} size="lg">
            {t.faq.cta.button}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqCnops;
