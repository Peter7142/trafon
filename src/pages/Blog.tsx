import { Link } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight, Calendar, Clock } from "lucide-react";

export const blogPosts = [
  {
    slug: "cena-trafostanice",
    title: "Koľko stojí trafostanica na kľúč? Reálne ceny 2024",
    excerpt:
      "Zistite reálne ceny trafostaníc na Slovensku. Kioskové, murované, pre FVE. Koľko zaplatíte za projekt, montáž a revízie? Bezplatná kalkulácia.",
    date: "2024-09-15",
    readTime: "6 minút",
    category: "Odborné rady",
  },
];

const Blog = () => {
  return (
    <>
      <SEO
        title="Blog — odborné rady o trafostaniciach, transformátoroch a revíziách"
        description="Praktické články o cenách trafostaníc, revíziách VN/NN, kenotrónových meraniach a údržbe. Odborné rady od TRAFON — Foton Energy."
        path="/blog"
        keywords="blog trafostanice, cena trafostanice, revízia transformátora, kenotrónové meranie"
      />

      <section className="bg-gradient-trust text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-pulse-soft opacity-60" />
        <div className="container-page relative">
          <h1 className="font-display text-4xl md:text-6xl font-bold mb-5">
            Blog — <span className="text-gradient-warm">odborné rady</span> o trafostaniciach
          </h1>
          <p className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl">
            Ceny, normy, postupy a praktické skúsenosti z realizácií — bez marketingových fráz.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container-page">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((p) => (
              <Link key={p.slug} to={`/blog/${p.slug}`}>
                <Card className="h-full hover:shadow-elegant hover:-translate-y-1 transition-all border-border/60">
                  <CardContent className="p-6">
                    <div className="text-xs text-accent font-semibold uppercase tracking-widest mb-3">
                      {p.category}
                    </div>
                    <h2 className="font-display text-2xl font-bold text-primary mb-3 leading-tight">
                      {p.title}
                    </h2>
                    <p className="text-muted-foreground mb-4">{p.excerpt}</p>
                    <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" /> {p.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {p.readTime}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-accent font-semibold text-sm">
                      Čítať článok <ArrowRight className="h-4 w-4" />
                    </span>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
