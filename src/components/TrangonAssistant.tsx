import { useEffect, useRef, useState } from "react";
import { MessageCircle, X, Phone, Send, Sparkles } from "lucide-react";
import avatar from "@/assets/trangon-avatar.png";

type Msg = { role: "user" | "assistant"; content: string };

const INTRO: Msg = {
  role: "assistant",
  content:
    "Dobrý deň 👋 Som Trafon, váš odborný poradca z TRAFON. Poradím s trafostanicou, opravou transformátora, servisom VN/NN, revíziami, odbornými stanoviskami TI alebo úradnými skúškami. S čím vám môžem pomôcť?",
};

const PHONE = "+421 944 366 444";
const PHONE_HREF = "tel:+421944366444";

export const TrangonAssistant = () => {
  const [open, setOpen] = useState(false);
  const [seen, setSeen] = useState(false);
  const [blink, setBlink] = useState(false);
  const [pulse, setPulse] = useState(false);
  const [tooltip, setTooltip] = useState(true);
  const [messages, setMessages] = useState<Msg[]>([INTRO]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  // periodic blink + occasional wave/pulse to "come alive"
  useEffect(() => {
    const b = setInterval(() => {
      setBlink(true);
      setTimeout(() => setBlink(false), 180);
    }, 4500);
    const p = setInterval(() => {
      setPulse(true);
      setTimeout(() => setPulse(false), 800);
    }, 7000);
    return () => {
      clearInterval(b);
      clearInterval(p);
    };
  }, []);

  // auto-hide tooltip after a bit
  useEffect(() => {
    const t = setTimeout(() => setTooltip(false), 9000);
    return () => clearTimeout(t);
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  const openChat = () => {
    setOpen(true);
    setSeen(true);
    setTooltip(false);
  };

  const send = async () => {
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    const userMsg: Msg = { role: "user", content: text };
    const history = [...messages, userMsg];
    setMessages(history);
    setLoading(true);

    try {
      const resp = await fetch(
        `${import.meta.env.VITE_SUPABASE_URL}/functions/v1/trangon-chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY}`,
          },
          body: JSON.stringify({
            messages: history.map((m) => ({ role: m.role, content: m.content })),
          }),
        }
      );

      if (!resp.ok || !resp.body) {
        if (resp.status === 429) {
          setMessages((p) => [
            ...p,
            { role: "assistant", content: "Momentálne mám priveľa otázok naraz 🙏 Skúste o chvíľu, alebo zavolajte priamo na " + PHONE + "." },
          ]);
        } else if (resp.status === 402) {
          setMessages((p) => [
            ...p,
            { role: "assistant", content: "Práve nemôžem odpovedať. Zavolajte prosím na " + PHONE + ", rád pomôžem." },
          ]);
        } else {
          throw new Error("stream fail");
        }
        setLoading(false);
        return;
      }

      const reader = resp.body.getReader();
      const decoder = new TextDecoder();
      let buffer = "";
      let acc = "";
      let started = false;
      let done = false;

      while (!done) {
        const { done: d, value } = await reader.read();
        if (d) break;
        buffer += decoder.decode(value, { stream: true });
        let idx: number;
        while ((idx = buffer.indexOf("\n")) !== -1) {
          let line = buffer.slice(0, idx);
          buffer = buffer.slice(idx + 1);
          if (line.endsWith("\r")) line = line.slice(0, -1);
          if (!line || line.startsWith(":")) continue;
          if (!line.startsWith("data: ")) continue;
          const json = line.slice(6).trim();
          if (json === "[DONE]") {
            done = true;
            break;
          }
          try {
            const p = JSON.parse(json);
            const content: string | undefined = p.choices?.[0]?.delta?.content;
            if (content) {
              acc += content;
              if (!started) {
                started = true;
                setMessages((prev) => [...prev, { role: "assistant", content: acc }]);
              } else {
                setMessages((prev) =>
                  prev.map((m, i) =>
                    i === prev.length - 1 ? { ...m, content: acc } : m
                  )
                );
              }
            }
          } catch {
            buffer = line + "\n" + buffer;
            break;
          }
        }
      }
    } catch (e) {
      console.error(e);
      setMessages((p) => [
        ...p,
        {
          role: "assistant",
          content:
            "Prepáčte, niečo sa pokazilo. Najrýchlejšie vás obslúžim telefonicky na " +
            PHONE +
            ".",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {/* Floating tab on the right side */}
      {!open && (
        <div className="fixed right-0 top-1/2 -translate-y-1/2 z-[1500] flex items-center pointer-events-none">
          {tooltip && !seen && (
            <div className="hidden md:block mr-3 pointer-events-auto animate-fade-in">
              <div className="relative bg-card text-card-foreground border border-border shadow-elegant rounded-xl px-4 py-3 max-w-[240px] text-sm">
                <p className="font-medium">Som Trafon 👋</p>
                <p className="text-muted-foreground text-xs mt-1">
                  Spýtajte sa ma na trafostanicu, opravu alebo revíziu.
                </p>
                <span className="absolute -right-1.5 top-1/2 -translate-y-1/2 w-3 h-3 bg-card border-t border-r border-border rotate-45" />
              </div>
            </div>
          )}

          <button
            onClick={openChat}
            aria-label="Otvoriť asistenta Trafon"
            className={`pointer-events-auto group relative bg-gradient-trust text-primary-foreground shadow-glow rounded-l-2xl pl-2 pr-3 py-3 flex items-center gap-2 hover:pr-4 transition-all duration-300 ${
              pulse ? "animate-pulse-soft" : ""
            }`}
            style={{ animation: pulse ? undefined : "slideInRight 0.6s ease-out" }}
          >
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-75 animate-ping" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-accent" />
            </span>
            <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-accent/60 bg-white">
              <img
                src={avatar}
                alt="Trafon — AI predajca TRAFON"
                className="w-full h-full object-cover object-top scale-110"
                loading="lazy"
              />
              {blink && (
                <span className="absolute inset-x-0 top-[38%] h-[6%] bg-[#d8b89a]" />
              )}
            </div>
            <div className="hidden sm:flex flex-col text-left leading-tight">
              <span className="text-[11px] uppercase tracking-wider text-accent font-semibold flex items-center gap-1">
                <Sparkles className="w-3 h-3" /> AI poradca
              </span>
              <span className="text-sm font-semibold">Trafon</span>
            </div>
          </button>
        </div>
      )}

      {/* Chat panel */}
      {open && (
        <div className="fixed inset-0 md:inset-auto md:right-4 md:bottom-4 z-[1600] md:w-[380px] md:h-[600px] md:max-h-[85vh] bg-card border border-border md:rounded-2xl shadow-elegant flex flex-col overflow-hidden animate-scale-in">
          {/* Header */}
          <div className="relative bg-gradient-trust text-primary-foreground p-4 flex items-center gap-3">
            <div className="relative w-14 h-14 rounded-full overflow-hidden ring-2 ring-accent/70 bg-white shrink-0">
              <img
                src={avatar}
                alt="Trafon"
                className="w-full h-full object-cover object-top scale-110"
              />
              {blink && (
                <span className="absolute inset-x-0 top-[38%] h-[6%] bg-[#d8b89a]" />
              )}
              <span className="absolute bottom-0 right-0 w-3.5 h-3.5 rounded-full bg-emerald-400 ring-2 ring-card" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <h3 className="font-semibold text-base">Trafon</h3>
                <span className="text-[10px] uppercase tracking-wider bg-accent/20 text-accent px-1.5 py-0.5 rounded">
                  AI · TRAFON
                </span>
              </div>
              <p className="text-xs text-primary-foreground/75">
                Odborný poradca · online
              </p>
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Zavrieť"
              className="p-1.5 rounded-full hover:bg-white/10 transition"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-3 bg-background">
            {messages.map((m, i) => (
              <div
                key={i}
                className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-3.5 py-2 text-sm leading-relaxed whitespace-pre-wrap ${
                    m.role === "user"
                      ? "bg-primary text-primary-foreground rounded-br-sm"
                      : "bg-muted text-foreground rounded-bl-sm"
                  }`}
                >
                  {m.content}
                </div>
              </div>
            ))}
            {loading && messages[messages.length - 1]?.role === "user" && (
              <div className="flex justify-start">
                <div className="bg-muted rounded-2xl rounded-bl-sm px-3.5 py-2.5 flex gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce" />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="w-1.5 h-1.5 rounded-full bg-foreground/50 animate-bounce"
                    style={{ animationDelay: "0.3s" }}
                  />
                </div>
              </div>
            )}
          </div>

          {/* Quick CTA */}
          <a
            href={PHONE_HREF}
            className="mx-3 mb-2 flex items-center justify-center gap-2 bg-gradient-warm text-accent-foreground font-semibold text-sm rounded-xl py-2.5 hover:opacity-90 transition shadow-glow"
          >
            <Phone className="w-4 h-4" /> Zavolať {PHONE}
          </a>

          {/* Input */}
          <div className="p-3 pt-1 border-t border-border bg-card">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                send();
              }}
              className="flex items-end gap-2"
            >
              <textarea
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter" && !e.shiftKey) {
                    e.preventDefault();
                    send();
                  }
                }}
                rows={1}
                placeholder="Napíšte správu Trafonovi…"
                className="flex-1 resize-none bg-background border border-input rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-ring max-h-32"
              />
              <button
                type="submit"
                disabled={loading || !input.trim()}
                aria-label="Odoslať"
                className="bg-primary text-primary-foreground rounded-xl p-2.5 hover:opacity-90 disabled:opacity-40 transition"
              >
                <Send className="w-4 h-4" />
              </button>
            </form>
            <p className="text-[10px] text-muted-foreground mt-1.5 text-center">
              AI asistent · pri záväznej ponuke vás spojí so špecialistom
            </p>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(110%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </>
  );
};

export default TrangonAssistant;
