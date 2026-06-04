import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-trafon.png";

const links = [
  { to: "/", label: "Domov" },
  { to: "/trafostanice", label: "Trafostanice" },
  { to: "/sluzby", label: "Služby" },
  { to: "/referencie", label: "Referencie" },
  { to: "/opravnenia", label: "Oprávnenia" },
  { to: "/o-nas", label: "O nás" },
  { to: "/blog", label: "Blog" },
];

export const SiteNavbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur supports-[backdrop-filter]:bg-background/70">
      <div className="container-page flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center" aria-label="TRAFON - Foton Energy">
          <img
            src={logo}
            alt="TRAFON logo"
            className="h-10 md:h-11 w-auto"
            width={220}
            height={44}
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 rounded-md text-sm font-medium transition-colors ${
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

        <div className="hidden md:flex items-center gap-2">
          <a
            href="tel:+421944366444"
            className="flex items-center gap-2 text-sm font-medium text-primary hover:text-accent transition-colors"
          >
            <Phone className="h-4 w-4" />
            +421 944 366 444
          </a>
          <Button asChild className="bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow">
            <Link to="/kontakt">Nezáväzný dopyt</Link>
          </Button>
        </div>

        <button
          className="lg:hidden p-2 text-primary"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
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
            <Button asChild className="mt-3 bg-gradient-warm text-accent-foreground">
              <Link to="/kontakt" onClick={() => setOpen(false)}>Nezáväzný dopyt</Link>
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
