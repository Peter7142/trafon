import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  const location = useLocation();
  useEffect(() => {
    console.error("404:", location.pathname);
  }, [location.pathname]);

  return (
    <section className="min-h-[60vh] flex items-center">
      <div className="container-page text-center">
        <div className="font-display text-7xl md:text-9xl font-bold text-gradient-warm mb-4">404</div>
        <h1 className="font-display text-2xl md:text-3xl font-bold text-primary mb-3">
          Stránka sa nenašla
        </h1>
        <p className="text-muted-foreground mb-6">
          Možno bola presunutá alebo už neexistuje.
        </p>
        <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow">
          <Link to="/">Späť na domovskú stránku</Link>
        </Button>
      </div>
    </section>
  );
};

export default NotFound;
