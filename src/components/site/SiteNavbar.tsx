import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-trafon.png";

const links = [
  { to: "/", label: "Domov" },
  { to: "/trafostanice", label: "Trafostanice" },
  { to: "/revizie-vn-nn", label: "Revízie VN/NN" },
  { to: "/kenotropovanie", label: "Kenotrónovanie" },
  { to: "/transformatory", label: "Transformátory" },
  { to: "/referencie", label: "Referencie" },
  { to: "/blog", label: "Blog" },
  { to: "/kontakt", label: "Kontakt" },
];

export const SiteNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between gap-4">
        <Link to="/" className="flex items-center shrink-0" aria-label="TRAFON - Foton Energy">
          <img src={logo} alt="TRAFON logo" className="h-10 md:h-11 w-auto" width={220} height={44} />
        </Link>

        <nav className="hidden xl:flex items-center gap-0.5">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-2.5 py-2 rounded-md text-sm font-medium transition-colors ${
                  isActive
                    ? "text-primary bg-secondary"
                    : "text-foreground/70 hover:text-primary hover:bg-secondary/60"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3 shrink-0">
          <a
            href="https://fotonenergy.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden lg:inline-flex items-center gap-1 text-xs font-medium text-muted-foreground hover:text-accent transition-colors"
          >
            ⚡ Foton Energy <ExternalLink className="h-3 w-3" />
          </a>
          <a
            href="tel:+421944366444"
            className="hidden lg:flex items-center gap-1.5 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            +421 944 366 444
          </a>
          <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow">
            <Link to="/kontakt">Získať ponuku</Link>
          </Button>
        </div>

        <button
          className="xl:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="xl:hidden border-t border-border bg-background">
          <nav className="container-page py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-3 rounded-md text-base font-medium ${
                    isActive ? "bg-secondary text-primary" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <a
              href="https://fotonenergy.sk"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-3 rounded-md text-base font-medium text-muted-foreground inline-flex items-center gap-1"
            >
              ⚡ Foton Energy <ExternalLink className="h-3.5 w-3.5" />
            </a>
            <Button asChild className="mt-2 bg-gradient-warm text-accent-foreground">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Získať ponuku</Link>
            </Button>
            <a href="tel:+421944366444" className="mt-2 text-center text-primary font-medium">
              +421 944 366 444
            </a>
          </nav>
        </div>
      )}
    </header>
  );
};
