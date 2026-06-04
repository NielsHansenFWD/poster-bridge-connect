import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Strategieën hoofdverpleegkundigen bij veranderingen" },
      { name: "description", content: "Digitale uitbreiding van de poster — referenties, samenvatting en downloads." },
      { property: "og:title", content: "Strategieën hoofdverpleegkundigen bij veranderingen" },
      { property: "og:description", content: "Onderzoek naar strategieën bij opgelegde fusies en reorganisaties in Belgische ziekenhuizen." },
    ],
  }),
  component: Index,
});

/**
 * Update download/contact links here:
 * - PAPER_URL → volledige masterproef PDF
 * - POSTER_URL → poster PDF
 * - REFERENCES_URL → volledige referentielijst PDF
 * - CONTACT_EMAIL → mail-to adres
 */
const PAPER_URL = "#";
const POSTER_URL = "#";
const REFERENCES_URL = "#";
const CONTACT_EMAIL = "voornaam.naam@student.uhasselt.be";
const LINKEDIN_URL = "#";

type CardData = {
  tag: string;
  title: string;
  tone: "primary" | "secondary" | "accent" | "muted";
  bullets: string[];
  detail: string;
};

const cards: CardData[] = [
  {
    tag: "01",
    title: "Organisatorisch",
    tone: "primary",
    bullets: [
      "Heldere structuur en gefaseerde planning bij elke verandering",
      "Korte feedbacklijnen tussen directie en afdeling",
      "Realistische tijdslijnen met ruimte voor bijsturing",
    ],
    detail:
      "Hoofdverpleegkundigen creëren overzicht door verandering op te delen in beheersbare stappen, rollen expliciet te maken en regelmatig terug te koppelen naar directie en team.",
  },
  {
    tag: "02",
    title: "Relationeel",
    tone: "secondary",
    bullets: [
      "Open en regelmatige communicatie met het team",
      "Erkenning van weerstand en emoties van medewerkers",
      "Coalities bouwen met collega-leidinggevenden",
    ],
    detail:
      "Het onderhouden van vertrouwen blijkt cruciaal: aanwezig zijn op de werkvloer, individuele gesprekken voeren en signalen van het team serieus nemen.",
  },
  {
    tag: "03",
    title: "Psychologisch",
    tone: "accent",
    bullets: [
      "Zelfreflectie en bewuste emotieregulatie",
      "Steun zoeken bij peers en mentor-collega's",
      "Grenzen bewaken om burn-out te voorkomen",
    ],
    detail:
      "Veranderingen vragen veerkracht. Deelnemers benoemen het belang van intervisie, supervisie en bewust afstand nemen om kwaliteit van leidinggeven te behouden.",
  },
  {
    tag: "04",
    title: "Praktijk & aanbevelingen",
    tone: "muted",
    bullets: [
      "Investeer in verandercompetenties van hoofdverpleegkundigen",
      "Voorzie tijd en mandaat om verandering te begeleiden",
      "Borg formele ondersteuningsstructuren (intervisie, coaching)",
    ],
    detail:
      "Ziekenhuizen worden aangemoedigd om hoofdverpleegkundigen niet enkel als uitvoerders, maar als sleutelactoren in verandertrajecten te erkennen en te ondersteunen.",
  },
];

const references = [
  "Bridges, W. (2009). Managing Transitions: Making the Most of Change. Da Capo Press.",
  "Kotter, J. P. (2012). Leading Change. Harvard Business Review Press.",
  "Lewin, K. (1947). Frontiers in Group Dynamics. Human Relations, 1(1), 5–41.",
  "Salmela, S., Eriksson, K., & Fagerström, L. (2012). Leading change: a three-dimensional model of nurse leaders' main tasks. Journal of Advanced Nursing, 68(2), 423–433.",
  "Shirey, M. R. (2013). Lewin's Theory of Planned Change as a Strategic Resource. JONA, 43(2), 69–72.",
  "By, R. T. (2005). Organisational change management: A critical review. Journal of Change Management, 5(4), 369–380.",
  "Cummings, G. G., et al. (2018). Leadership styles and outcome patterns for the nursing workforce. Int. J. of Nursing Studies, 85, 19–60.",
  "Braun, V., & Clarke, V. (2006). Using thematic analysis in psychology. Qualitative Research in Psychology, 3(2), 77–101.",
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-10 sm:px-8">
        <Hero />
        <Summary />
        <Results />
        <Method />
        <Practice />
        <References />
        <Downloads />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium uppercase tracking-wider text-primary">
      {children}
    </span>
  );
}

function SectionTitle({ kicker, title }: { kicker: string; title: string }) {
  return (
    <header className="mb-5">
      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary/70">
        {kicker}
      </p>
      <h2 className="mt-2 text-2xl font-semibold text-foreground sm:text-3xl">
        {title}
      </h2>
    </header>
  );
}

function Hero() {
  return (
    <section className="pt-2">
      <Badge>Masterproef · UHasselt 2026</Badge>
      <h1 className="mt-5 text-3xl font-bold leading-tight text-primary sm:text-4xl">
        Gehanteerde strategieën van hoofdverpleegkundigen bij opgelegde veranderingen in
        ziekenhuizen
      </h1>
      <p className="mt-4 text-base text-foreground/80">
        Onderzoek naar strategieën van hoofdverpleegkundigen bij opgelegde fusies en reorganisaties
        in Belgische ziekenhuizen.
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={PAPER_URL}
          className="inline-flex items-center justify-center rounded-xl bg-secondary px-5 py-3 text-sm font-semibold text-secondary-foreground shadow-sm transition hover:brightness-95"
        >
          Download paper (PDF)
        </a>
        <a
          href={POSTER_URL}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-sm transition hover:brightness-110"
          style={{ backgroundColor: "#CED4C8" }}
        >
          Download poster (PDF)
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center rounded-xl border border-primary/30 px-5 py-3 text-sm font-semibold text-primary transition hover:brightness-95"
          style={{ backgroundColor: "#E1E7E8" }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}

function Summary() {
  const items = [
    "Context: voortdurende reorganisaties en fusies in Belgische ziekenhuizen.",
    "Hoofdverpleegkundigen vormen de schakel tussen directie en zorgteam.",
    "Doel: in kaart brengen welke strategieën zij hanteren bij opgelegde verandering.",
    "Aanpak: kwalitatief onderzoek met semi-gestructureerde interviews.",
    "Relevantie: aanbevelingen voor opleiding, ondersteuning en beleid.",
  ];
  return (
    <section className="mt-14">
      <SectionTitle kicker="20 seconden" title="Samenvatting" />
      <ul className="space-y-3">
        {items.map((t, i) => (
          <li key={i} className="flex gap-3 rounded-xl bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
            <span className="text-sm text-foreground/85">{t}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

function toneClasses(tone: CardData["tone"]) {
  switch (tone) {
    case "primary":
      return "border-primary/25 bg-primary/5";
    case "secondary":
      return "border-secondary/40 bg-secondary/15";
    case "accent":
      return "border-accent/40 bg-accent/15";
    default:
      return "border-muted bg-muted/40";
  }
}

function Results() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Resultaten" title="Vier strategiedomeinen" />
      <div className="grid gap-4">
        {cards.map((c) => (
          <ResultCard key={c.tag} card={c} />
        ))}
      </div>
    </section>
  );
}

function ResultCard({ card }: { card: CardData }) {
  const [open, setOpen] = useState(false);
  return (
    <article
      className={`rounded-2xl border ${toneClasses(card.tone)} p-5 shadow-[0_2px_6px_rgba(74,107,112,0.06)]`}
    >
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="text-lg font-semibold text-primary">{card.title}</h3>
        <span className="text-xs font-mono text-foreground/50">{card.tag}</span>
      </div>
      <ul className="mt-3 space-y-2">
        {card.bullets.map((b, i) => (
          <li key={i} className="flex gap-2 text-sm text-foreground/85">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
            <span>{b}</span>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="mt-4 text-xs font-semibold uppercase tracking-wider text-primary/80 hover:text-primary"
        aria-expanded={open}
      >
        {open ? "Verberg toelichting −" : "Toon toelichting +"}
      </button>
      {open && (
        <p className="mt-3 border-t border-primary/10 pt-3 text-sm text-foreground/75">
          {card.detail}
        </p>
      )}
    </article>
  );
}

function Method() {
  const items = [
    ["Type", "Kwalitatief, exploratief onderzoek"],
    ["Deelnemers", "Hoofdverpleegkundigen uit Belgische ziekenhuizen"],
    ["Periode", "Februari – april 2026"],
    ["Dataverzameling", "Semi-gestructureerde interviews"],
    ["Analyse", "Thematische analyse met NVivo"],
  ];
  return (
    <section className="mt-14">
      <SectionTitle kicker="Aanpak" title="Methode" />
      <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
        {items.map(([k, v]) => (
          <div key={k} className="flex flex-col gap-1 px-4 py-3 sm:flex-row sm:items-baseline sm:gap-6">
            <dt className="w-40 shrink-0 text-xs font-semibold uppercase tracking-wider text-primary/70">
              {k}
            </dt>
            <dd className="text-sm text-foreground/85">{v}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}

function Practice() {
  const tips = [
    "Plan vandaag één korte feedbackronde met je team over de lopende verandering.",
    "Maak ruimte in je agenda voor intervisie met collega-hoofdverpleegkundigen.",
    "Bespreek met je directie welk mandaat en welke tijd je krijgt voor verandering.",
  ];
  return (
    <section className="mt-14">
      <SectionTitle kicker="Voor de praktijk" title="What to do tomorrow" />
      <ol className="space-y-3">
        {tips.map((t, i) => (
          <li
            key={i}
            className="flex gap-3 rounded-2xl border border-secondary/40 bg-secondary/10 p-4"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
              {i + 1}
            </span>
            <span className="text-sm text-foreground/85">{t}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}

function References() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Bronnen" title="Belangrijkste referenties" />
      <ol className="space-y-2 rounded-2xl border border-border bg-card p-5 text-xs leading-relaxed text-foreground/80 sm:text-sm">
        {references.map((r, i) => (
          <li key={i} className="flex gap-3">
            <span className="w-5 shrink-0 text-right font-mono text-foreground/40">
              {i + 1}.
            </span>
            <span>{r}</span>
          </li>
        ))}
      </ol>
      <a
        href={REFERENCES_URL}
        className="mt-3 inline-flex text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        Volledige referentielijst downloaden (PDF) →
      </a>
    </section>
  );
}

function Downloads() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Materiaal" title="Downloads" />
      <div className="grid gap-3 sm:grid-cols-2">
        <a
          href={PAPER_URL}
          className="rounded-2xl border border-primary/20 bg-card p-5 transition hover:bg-primary/5"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Masterproef
          </p>
          <p className="mt-2 text-base font-semibold text-foreground">
            Download volledige paper
          </p>
          <p className="mt-1 text-xs text-foreground/60">PDF · ~ enkele MB</p>
        </a>
        <a
          href={POSTER_URL}
          className="rounded-2xl border border-primary/20 bg-card p-5 transition hover:bg-primary/5"
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Poster
          </p>
          <p className="mt-2 text-base font-semibold text-foreground">
            Download poster
          </p>
          <p className="mt-1 text-xs text-foreground/60">PDF · A0 formaat</p>
        </a>
      </div>
      <p className="mt-4 rounded-xl bg-muted/60 p-3 text-xs text-foreground/70">
        Documenten beschikbaar gesteld voor persoonlijk gebruik. Contacteer de
        auteur voor vragen of reproductie.
      </p>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Contact" title="Vragen of feedback?" />
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="text-sm font-semibold text-foreground">
          Masterproef Verpleegkunde
        </p>
        <p className="text-sm text-foreground/70">
          Universiteit Hasselt — Faculteit Geneeskunde en Levenswetenschappen
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground hover:brightness-110"
          >
            Stuur een e-mail
          </a>
          <a
            href={LINKEDIN_URL}
            className="inline-flex items-center justify-center rounded-xl border border-primary/30 px-4 py-2.5 text-sm font-semibold text-primary hover:bg-primary/5"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="mt-16 border-t border-border pt-6 text-center text-xs text-foreground/55">
      © 2026 · UHasselt · Masterproef Verpleegkunde · Privacyvriendelijk —
      geen tracking cookies.
    </footer>
  );
}
