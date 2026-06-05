import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { ChevronRight } from "lucide-react";

interface Crumb {
  label: string;
  to?: string;
}

interface BreadcrumbsProps {
  items: Crumb[];
}

export const Breadcrumbs = ({ items }: BreadcrumbsProps) => {
  const all = [{ label: "Domov", to: "/" }, ...items];
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `https://www.trafon.sk${c.to ?? ""}`,
    })),
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      </Helmet>
      <nav aria-label="Breadcrumbs" className="container-page pt-6 pb-2 text-sm text-muted-foreground">
        <ol className="flex flex-wrap items-center gap-1">
          {all.map((c, i) => {
            const last = i === all.length - 1;
            return (
              <li key={i} className="flex items-center gap-1">
                {c.to && !last ? (
                  <Link to={c.to} className="hover:text-primary transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-primary font-medium">{c.label}</span>
                )}
                {!last && <ChevronRight className="h-3.5 w-3.5 opacity-60" />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
};
