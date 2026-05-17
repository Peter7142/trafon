import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ReactNode } from "react";

interface ServiceDialogProps {
  trigger: ReactNode;
  title: string;
  image: string;
  description: string;
  benefits: string[];
  ctaText?: string;
}

export const ServiceDialog = ({
  trigger,
  title,
  image,
  description,
  benefits,
  ctaText = "Chcem o tom vedieť viac",
}: ServiceDialogProps) => {
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="max-w-2xl p-0 overflow-hidden">
        <div className="relative h-56 w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" loading="lazy" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent" />
          <div className="absolute bottom-4 left-6 right-6">
            <DialogHeader>
              <DialogTitle className="font-display text-2xl md:text-3xl text-primary-foreground">
                {title}
              </DialogTitle>
            </DialogHeader>
          </div>
        </div>
        <div className="p-6 space-y-5">
          <p className="text-foreground/80 leading-relaxed">{description}</p>
          <ul className="space-y-2">
            {benefits.map((b) => (
              <li key={b} className="flex items-start gap-3 text-sm">
                <CheckCircle2 className="h-5 w-5 text-accent shrink-0 mt-0.5" />
                <span>{b}</span>
              </li>
            ))}
          </ul>
          <Button asChild className="w-full bg-gradient-warm text-accent-foreground hover:opacity-90 shadow-glow h-12">
            <Link to="/kontakt">
              {ctaText} <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};
