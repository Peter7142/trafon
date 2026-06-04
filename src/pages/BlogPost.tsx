import { Link, useParams, Navigate } from "react-router-dom";
import { SEO } from "@/components/site/SEO";
import { CTASection } from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import { blogPosts } from "@/data/blogPosts";

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const article = blogPosts.find((p) => p.slug === slug);

  if (!article) return <Navigate to="/blog" replace />;

  const url = `/blog/${article.slug}`;
  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    author: { "@type": "Organization", name: "TRAFON — Foton Energy s.r.o." },
    publisher: { "@type": "Organization", name: "TRAFON — Foton Energy s.r.o." },
    datePublished: article.date,
    mainEntityOfPage: `https://www.trafon.sk${url}`,
  };

  return (
    <>
      <SEO
        title={article.title}
        description={article.description}
        path={url}
        keywords={article.keywords}
        jsonLd={articleJsonLd}
      />

      <article>
        <header className="bg-gradient-trust text-primary-foreground py-16 relative overflow-hidden">
          <div className="absolute inset-0 bg-pulse-soft opacity-60" />
          <div className="container-page relative max-w-3xl">
            <nav className="text-sm text-primary-foreground/70 mb-5 flex items-center gap-1.5">
              <Link to="/" className="hover:text-accent">Domov</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <Link to="/blog" className="hover:text-accent">Blog</Link>
              <ChevronRight className="h-3.5 w-3.5" />
              <span className="text-primary-foreground/90 truncate">{article.title}</span>
            </nav>
            <h1 className="font-display text-3xl md:text-5xl font-bold mb-5 leading-tight">{article.title}</h1>
            <div className="flex items-center gap-5 text-sm text-primary-foreground/80">
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> {article.date}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {article.readTime}
              </span>
            </div>
          </div>
        </header>

        <section className="py-16">
          <div className="container-page max-w-3xl prose prose-lg prose-headings:font-display prose-headings:text-primary prose-h2:text-3xl prose-h2:font-bold prose-h2:mt-10 prose-h2:mb-4 prose-h3:text-xl prose-h3:font-bold prose-h3:mt-6 prose-h3:mb-3 prose-p:text-foreground/85 prose-p:leading-relaxed prose-li:text-foreground/85 prose-strong:text-primary prose-a:text-accent">
            {article.render()}
          </div>
        </section>

        <section className="pb-12">
          <div className="container-page max-w-3xl flex flex-col sm:flex-row gap-3 justify-between items-center p-6 rounded-2xl bg-secondary/60 border border-border/60">
            <p className="font-display text-lg font-bold text-primary">
              Chcete cenovú analýzu pre váš projekt?
            </p>
            <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow">
              <Link to="/kontakt">
                Nezáväzný dopyt <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </article>

      <CTASection />
    </>
  );
};

export default BlogPost;
