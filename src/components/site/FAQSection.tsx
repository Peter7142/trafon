import { Helmet } from "react-helmet-async";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export interface FAQItem {
  q: string;
  a: string;
}

interface FAQSectionProps {
  items: FAQItem[];
  title?: string;
  intro?: string;
}

export const FAQSection = ({ items, title = "Časté otázky", intro }: FAQSectionProps) => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };

  return (
    <section className="py-16 bg-background">
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <div className="container-page max-w-3xl">
        <div className="text-center mb-8">
          <span className="text-accent font-semibold text-sm uppercase tracking-widest">FAQ</span>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-primary mt-2 mb-3">{title}</h2>
          {intro && <p className="text-muted-foreground">{intro}</p>}
        </div>
        <Accordion type="single" collapsible className="w-full">
          {items.map((f, i) => (
            <AccordionItem key={i} value={`item-${i}`}>
              <AccordionTrigger className="text-left font-display text-lg font-bold text-primary">
                {f.q}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/85 text-base leading-relaxed">
                {f.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
