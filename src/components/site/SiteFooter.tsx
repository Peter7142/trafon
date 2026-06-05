import { Link } from "react-router-dom";
import { Phone, Mail, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo-trafon.png";

export const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
        {/* Stĺpec 1 — Firma */}
        <div>
          <div className="bg-primary-foreground/95 rounded-lg p-3 inline-block mb-4">
            <img src={logo} alt="TRAFON logo" className="h-10 w-auto" loading="lazy" width={200} height={40} />
          </div>
          <p className="text-xs text-primary-foreground/70 mb-3">by Foton Energy s.r.o.</p>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>Ľubochnianska 4<br />831 04 Bratislava<br /><span className="text-primary-foreground/70">Prevádzka: Nitra-Janíkovce</span></span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+421944366444" className="hover:text-accent">+421 944 366 444</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:info@fotonenergy.sk" className="hover:text-accent">info@fotonenergy.sk</a>
            </li>
            <li className="text-primary-foreground/60 text-xs pt-1">IČO: 53 366 280</li>
          </ul>
        </div>

        {/* Stĺpec 2 — Služby */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Služby</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/trafostanice" className="hover:text-accent transition-colors">Trafostanice na kľúč</Link></li>
            <li><Link to="/revizie-vn-nn" className="hover:text-accent transition-colors">Revízie VN/NN</Link></li>
            <li><Link to="/kenotropovanie" className="hover:text-accent transition-colors">Kenotrónovanie</Link></li>
            <li><Link to="/transformatory" className="hover:text-accent transition-colors">Predaj transformátorov</Link></li>
            <li><Link to="/trafostanice" className="hover:text-accent transition-colors">Projektovanie trafostaníc</Link></li>
          </ul>
        </div>

        {/* Stĺpec 3 — Lokality + linky */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Lokality</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/trafostanice-nitra" className="hover:text-accent transition-colors">Trafostanice Nitra</Link></li>
            <li><Link to="/trafostanice-bratislava" className="hover:text-accent transition-colors">Trafostanice Bratislava</Link></li>
            <li><Link to="/referencie" className="hover:text-accent transition-colors">Referencie</Link></li>
            <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
            <li><a href="/sitemap.xml" className="hover:text-accent transition-colors">Sitemap</a></li>
          </ul>
        </div>

        {/* Stĺpec 4 — Foton Energy ekosystém */}
        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Kompletné elektro služby</h4>
          <p className="text-sm text-primary-foreground/80 mb-4 leading-relaxed">
            Elektroinštalácie, fotovoltika, projektovanie a revízie — všetko pod jednou strechou v rámci skupiny
            Foton Energy.
          </p>
          <Button
            asChild
            variant="outline"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent w-full"
          >
            <a href="https://fotonenergy.sk" target="_blank" rel="noopener noreferrer">
              Navštíviť fotonenergy.sk <ExternalLink className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between items-center gap-2 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Foton Energy s.r.o. | trafon.sk</div>
          <a
            href="https://fotonenergy.sk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-accent transition-colors"
          >
            fotonenergy.sk
          </a>
          <div>Ochrana osobných údajov | VOP</div>
        </div>
      </div>
    </footer>
  );
};
