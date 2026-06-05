import { ReactNode } from "react";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  children?: ReactNode;
}

export const PageHero = ({ eyebrow, title, subtitle, children }: PageHeroProps) => (
  <section className="bg-gradient-trust text-primary-foreground py-16 md:py-20">
    <div className="container-page">
      <div className="max-w-3xl">
        {eyebrow && (
          <span className="inline-block text-accent font-semibold text-sm uppercase tracking-widest mb-3">
            {eyebrow}
          </span>
        )}
        <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-5">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-primary-foreground/85 leading-relaxed max-w-2xl">
            {subtitle}
          </p>
        )}
        {children && <div className="mt-7">{children}</div>}
      </div>
    </div>
  </section>
);
