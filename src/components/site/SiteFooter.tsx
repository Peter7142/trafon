import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-trafon.png";

export const SiteFooter = () => {
  return (
    <footer className="bg-primary text-primary-foreground mt-20">
      <div className="container-page py-14 grid gap-10 md:grid-cols-4">
        <div>
          <div className="bg-primary-foreground/95 rounded-lg p-3 inline-block mb-4">
            <img src={logo} alt="TRAFON logo" className="h-10 w-auto" loading="lazy" width={200} height={40} />
          </div>
          <p className="text-sm text-primary-foreground/75 leading-relaxed">
            Trafostanice na kľúč. Projektovanie, montáž, revízie a údržba bez starostí pre vašu prevádzku.
          </p>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Stránky</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/o-nas" className="hover:text-accent transition-colors">O nás</Link></li>
            <li><Link to="/referencie" className="hover:text-accent transition-colors">Videá a referencie</Link></li>
            <li><Link to="/opravnenia" className="hover:text-accent transition-colors">Oprávnenia</Link></li>
            <li><Link to="/kontakt" className="hover:text-accent transition-colors">Kontakt</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Služby</h4>
          <ul className="space-y-2 text-sm">
            <li><Link to="/trafostanice" className="hover:text-accent transition-colors">Nové trafostanice</Link></li>
            <li><Link to="/sluzby" className="hover:text-accent transition-colors">Projektovanie elektro</Link></li>
            <li><Link to="/sluzby" className="hover:text-accent transition-colors">Revízie NN/VN</Link></li>
            <li><Link to="/sluzby" className="hover:text-accent transition-colors">Údržba a servis</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-lg font-semibold mb-3 text-accent">Foton Energy s.r.o.</h4>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-accent" />
              <span>Golianovská 420/61<br />949 07 Nitra</span>
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-accent" />
              <a href="tel:+421944366444" className="hover:text-accent">+421 944 366 444</a>
            </li>
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" />
              <a href="mailto:info@fotonenergy.sk" className="hover:text-accent">info@fotonenergy.sk</a>
            </li>
            <li className="text-primary-foreground/60 text-xs pt-2">IČO: 50 335 *** • SR</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="container-page py-5 flex flex-col md:flex-row justify-between gap-2 text-xs text-primary-foreground/60">
          <div>© {new Date().getFullYear()} Foton Energy s.r.o. — TRAFON.sk. Všetky práva vyhradené.</div>
          <div>Po – Pi 08:00 – 17:00 • So 09:00 – 16:00</div>
        </div>
      </div>
    </footer>
  );
};
