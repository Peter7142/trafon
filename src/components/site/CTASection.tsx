import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Shield } from "lucide-react";

interface CTASectionProps {
  title?: string;
  subtitle?: string;
}

export const CTASection = ({
  title = "Pripravený na trafostanicu bez starostí?",
  subtitle = "Pošlite nezáväzný dopyt. Pripravíme návrh na mieru a získate 6 ročný servis ZDARMA v hodnote 8 590 €.",
}: CTASectionProps) => {
  return (
    <section className="relative overflow-hidden bg-gradient-trust text-primary-foreground">
      <div className="absolute inset-0 bg-pulse-soft opacity-60 pointer-events-none" />
      <div className="container-page py-16 md:py-24 relative">
        <div className="max-w-3xl mx-auto text-center">
          <Shield className="h-12 w-12 text-accent mx-auto mb-4" />
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          <p className="text-lg text-primary-foreground/85 mb-8">{subtitle}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow text-base h-12 px-8"
            >
              <Link to="/kontakt">
                Chcem nezáväznú ponuku <ArrowRight className="ml-1 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-accent/40 bg-transparent text-primary-foreground hover:bg-accent hover:text-accent-foreground text-base h-12 px-8"
            >
              <a href="tel:+421944366444">Zavolajte +421 944 366 444</a>
            </Button>
          </div>
          <p className="text-sm text-primary-foreground/60 mt-5">
            Bez záväzku • Bez stresu • Odpovedáme do 24 hodín
          </p>
        </div>
      </div>
    </section>
  );
};
