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
const PAPER_URL = "/downloads/Masterthesis_JorienStassen.pdf";
const POSTER_URL = "/downloads/Poster_JorienStassen.pdf";
const CONTACT_EMAIL = "jorien.stassen@student.uhasselt.be";
const LINKEDIN_URL = "https://www.linkedin.com/in/jorien-stassen-aa3b13243/";

type CardData = {
  tag: string;
  title: string;
  tone: "primary" | "secondary" | "accent" | "muted";
  bullets: string[];
};

const cards: CardData[] = [
  {
    tag: "01",
    title: "Organisatorisch",
    tone: "primary",
    bullets: [
      "Bieden van structuur versus behouden van flexibiliteit",
      "Tempo maken versus bewust vertragen",
    ],
  },
  {
    tag: "02",
    title: "Relationeel",
    tone: "secondary",
    bullets: [
      "Individuele besluitvorming versus collectieve betrokkenheid",
      "Nabijheid versus autonomie",
      "Individuele begeleiding versus teamgerichte ondersteuning",
    ],
  },
  {
    tag: "03",
    title: "Psychologisch",
    tone: "accent",
    bullets: [
      "Vertrouwen uitstralen versus ervaren van onzekerheid",
      "Zorg dragen voor medewerkers versus zorg dragen voor zichzelf",
    ],
  },
];

const references = [
  "Algethami FM, Alghaylani AS, Alrabie SM, Aljrdahi AWA, Alhurani AA, Altowairqi MA, et al. Leading Change in Healthcare: A Systematic Review of Middle Management's Role. Journal of Posthumanism. 2026;6(2):135-50.",
  "Cheraghi R, Ebrahimi H, Kheibar N, Sahebihagh MH. Reasons for resistance to change in nursing: an integrative review. BMC Nurs. 2023;22(1):310.",
  "Silvola S, Restelli U, Croce D, Basu D. Change management for services redesign in healthcare: a conceptual framework. J Prev Med Hyg. 2024;65:E410-E33.",
  "Braithwaite J, Westbrook J, Coiera E, Runciman WB, Day R, Hillman K, et al. A systems science perspective on the capacity for change in public hospitals. Isr J Health Policy Res. 2017;6:16.",
  "Lavergne T, Janssens H. Tekort aan verpleegkundigen en crisis van het 'zorgen voor'. 2024.",
  "Gerkens S, Lavergne T, Lefèvre M, Bouckaert N, Levy M, Maertens de Noordhout C, et al. Performance of the Belgian Health System: report 2024. Brussel: Belgian Healthcare Knowledge Centre (KCE). 2024.",
  "Qtait M. Systematic Review of Head Nurse Leadership Style and Nurse Performance. International Journal of Africa Nursing Sciences. 2023;18.",
  "Gonzalez-Garcia A, Pinto-Carral A, Villorejo JS, Marques-Sanchez P. Competency Model for the Middle Nurse Manager (MCGE-Logistic Level). Int J Environ Res Public Health. 2021;18(8).",
  "Giessner SR, Dawson JF, Horton KE, West M. The impact of supportive leadership on employee outcomes during organizational mergers: An organizational-level field study. J Appl Psychol. 2023;108(4):686-97.",
  "Oreg S, Berson Y. Leaders' Impact on Organizational Change: Bridging Theoretical and Methodological Chasms. Academy of Management Annals. 2019;13(1):272-307.",
  "Abdelhafiz IM, Alloubani AM, Almatari M. Impact of leadership styles adopted by head nurses on job satisfaction: a comparative study between governmental and private hospitals in Jordan. J Nurs Manag. 2016;24(3):384-92.",
  "Austin T, Chreim S, Grudniewicz A. Examining health care providers' and middle-level managers' readiness for change: a qualitative study. BMC Health Serv Res. 2020;20(1):47.",
  "Beasley L, Grace S, Horstmanshof L. Assessing individual readiness for change in healthcare: a review of measurement scales. J Health Organ Manag. 2021;ahead-of-print(ahead-of-print).",
  "Burke S, Sims D, Lazzara E, Salas E. Trust in leadership: A multi-level review and integration. The Leadership Quarterly. 2007;18:606-32.",
  "Wooten KC, LP W. Towards a theory of change role efficacy. Human Relations. 1989;42:651-9.",
  "Tong A, Sainsbury P, Craig J. Consolidated criteria for reporting qualitative research (COREQ): a 32-item checklist for interviews and focus groups. International Journal for Quality in Health Care. 2007;19(6):349-57.",
  "Braun V, Clarke V. Using thematic analysis in psychology. Qualitative Research in Psychology. 2008;3(2):77-101.",
  "Ahmed SK, Mohammed RA, Nashwan AJ, Ibrahim RH, Abdalla AQ, M. Ameen BM, et al. Using thematic analysis in qualitative research. Journal of Medicine, Surgery, and Public Health. 2025;6.",
  "Lincoln Y, Guba E. Naturalistic inquiry. Beverly Hills (CA): Sage. 1985.",
  "Smith W, Lewis M. Toward a theory of paradox: a dynamic equilibrium model of organizing. Acad Manage Rev. 2011;36(2):381-401.",
  "Zhang Y, Waldman DA, Han Y-L, Li X-B. Paradoxical Leader Behaviors in People Management: Antecedents and Consequences. Academy of Management Journal. 2015;58(2):538-66.",
  "Quinn R, Cameron K. Paradox and transformation: toward a theory of change in organization and management. Cambridge. MA: Baillinger; 1988.",
  "Borghi J, Ismail S, Hollway J, Kim RE, Sturmberg J, Brown G, et al. Viewing the global health system as a complex adaptive system - implications for research and practice. F1000Res. 2022;11:1147.",
  "Van de Ven A, Poole M. Explaining development and change in organizations. Acad Manage Rev. 1995;20(3):510-40.",
  "Vis C, van Bodegom-Vos L, Hipple-Walters B, Powell BJ, Ista E, van Nassau F. Applied methods for matching implementation strategies to determinants: a scoping review of scientific and grey literature, and qualitative exploration of practice experiences. Implement Sci. 2025;21(1):14.",
  "Waterworth S. Time and change in health care. Leadersh Health Serv (Bradf Engl). 2017;30(4):354-63.",
  "Bluedorn A, Jaussi K. Leaders, followers, and time. Leadership Quarterly. 2008;19(6):654-68.",
  "Thurlow A, Helms Mills J. Change, talk and sensemaking. Organ Change Manag. 2009;22(5):459-79.",
  "Wanser L, H L. The role of leadership in change in healthcare facilities: a qualitative study. Am J Manag. 2021;21(1):16-31.",
  "Lu H, Li F. The Dual Effect of Transformational Leadership on Individual- and Team-Level Performance: The Mediational Roles of Motivational Processes. Front Psychol. 2021;12:606066.",
  "Humphrey R. How do leaders use emotional labor? J Organ Behav. 2012;33(5):740-4.",
  "Morrison VJ, Jensen AL. Between a rock and a hard place: Nurse managers' experiences of large-scale organizational change in the public health service. J Adv Nurs. 2022;78(10):3385-97.",
  "Groulx P, Maisonneuve F, Harvey JF, Johnson KJ. The ripple effect of strain in times of change: how manager emotional exhaustion affects team psychological safety and readiness to change. Front Psychol. 2024;15:1298104.",
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <div className="mx-auto max-w-2xl px-5 pb-24 pt-10 sm:px-8">
        <Hero />
        <Summary />
        <Method />
        <Results />
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
        Jorien Stassen<sup>1</sup>, Sven De Weerdt<sup>1</sup>
      </p>
      <p className="mt-1 text-sm text-foreground/60">
        1 UHasselt, Faculteit Geneeskunde en Levenswetenschappen, Agoralaan, 3590 Diepenbeek, België
      </p>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row">
        <a
          href={PAPER_URL}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-110"
          style={{ backgroundColor: "#EFC1AC" }}
        >
          Download paper (PDF)
        </a>
        <a
          href={POSTER_URL}
          className="inline-flex items-center justify-center rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-110"
          style={{ backgroundColor: "#CED4C8" }}
        >
          Download poster (PDF)
        </a>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
          style={{ backgroundColor: "#E1E7E8" }}
        >
          Contact
        </a>
      </div>
    </section>
  );
}

function Summary() {
  const items: { label?: string; text: string }[] = [
    {
      label: "Introductie:",
      text: " door het toenemende tekort aan verpleegkundigen worden afdelingen vaak samengevoegd, een verandering die doorgaans top-down wordt opgelegd. Hoofdverpleegkundigen spelen hierbij een cruciale rol.",
    },
    {
      label: "Onderzoeksvraag:",
      text: " welke strategieën hanteren hoofdverpleegkundigen bij de opgelegde verandering namelijk het samenvoegen van 2 verblijfsafdelingen tot 1 verblijfsafdeling en welke strategieën faciliteren hierin?",
    },
    {
      label: "Methode:",
      text: " hermeneutisch fenomenologisch onderzoeksdesign. Semi-gestructureerde interviews werden afgenomen bij 13 participanten (hoofdverpleegkundigen, adjunct-hoofdverpleegkundigen, managers, stafmedewerkers en verpleegkundigen) uit drie verschillende ziekenhuizen.",
    },
    {
      label: "Resultaten:",
      text:
        " de resultaten tonen aan dat leiderschap bij de opgelegde verandering niet kan worden\n" +
        "herleid tot een vast stappenplan. De verschillende actoren ervaren de rol van hoofdverpleegkundigen\n" +
        "als het gelijktijdig hanteren van organisatorische, relationele en psychologische spanningsvelden. Deze spanningsvelden uiten zich in het evenwicht behouden tussen structuur en flexibiliteit, individuele besluitvorming en collectieve betrokkenheid, individuele begeleiding en teamgerichte ondersteuning, nabijheid en autonomie stimuleren, zorg dragen voor anderen en zorg dragen voor zichzelf, tempo maken en vertragen en het uitstralen van vertrouwen ondanks het ervaren van onzekerheid.\n",
    },
    {
      label: "Conclusie:",
      text:
        " dit onderzoek toont aan dat leiderschap bij opgelegde verandering een dynamisch en\n" +
        "contextgevoelig proces is waarin hoofdverpleegkundigen voortdurend moeten afwegen, schakelen en bijsturen. Het succes blijkt niet enkel afhankelijk te zijn van de inhoud van de verandering maar in belangrijke mate van hoe deze door de hoofdverpleegkundigen wordt vertaald, gedragen en gestuurd op afdelingsniveau. Hoofdverpleegkundigen vervullen hierbij een sleutelrol als verbindingsfiguur tussen beleid en praktijk waarbij hun vermogen om spanningsvelden te hanteren bijdraagt aan een gedragen en duurzame verandering binnen de ziekenhuiscontext. \n",
    },
  ];
  return (
    <section className="mt-14">
      <SectionTitle kicker="Samenvatting" title="Abstract" />
      <ul className="space-y-3">
        {items.map((item, i) => (
          <li key={i} className="flex gap-3 rounded-xl bg-card p-4 shadow-[0_1px_2px_rgba(0,0,0,0.04)]">
            <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-secondary" />
            <span className="text-sm text-foreground/85">
              {item.label && <strong>{item.label}</strong>}
              {item.text}
            </span>
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
      <SectionTitle kicker="Resultaten" title="Paradoxen op drie verschillende niveaus" />
      <div className="grid gap-4">
        {cards.map((c) => (
          <ResultCard key={c.tag} card={c} />
        ))}
      </div>
    </section>
  );
}

function ResultCard({ card }: { card: CardData }) {
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
    </article>
  );
}

function Method() {
  const items = [
    ["Type", "Hermeneutisch fenomenologisch onderzoeksdesign"],
    ["Participanten", "13 participanten uit 3 verschillende ziekenhuizen"],
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

type PracticeItem = {
  label: string;
  bullets: string[];
};

const practiceItems: PracticeItem[] = [
  {
    label: "Onderzoek",
    bullets: [
      "Andere vormen van opgelegde verandering",
      "Evolutie psychologisch component",
    ],
  },
  {
    label: "Praktijk",
    bullets: [
      "Reflectie, intervisie en coaching rond spanningsvelden",
      "Tijd en vertraging als randvoorwaarde",
    ],
  },
  {
    label: "Beleid",
    bullets: [
      "Rekening houden met implementatiecapaciteit",
      "Verandering benaderen als complex adaptief proces",
      "Emotionele uitputting en verlies van draagkracht voorkomen",
    ],
  },
];

function Practice() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Voor de praktijk" title="Aanbevelingen" />
      <ol className="space-y-3">
        {practiceItems.map((item, i) => (
          <li
            key={i}
            className="rounded-2xl border border-secondary/40 bg-secondary/10 p-4"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-secondary text-sm font-semibold text-secondary-foreground">
                {i + 1}
              </span>
              <span className="text-sm font-semibold text-foreground">{item.label}</span>
            </div>
            <ul className="space-y-1 pl-10">
              {item.bullets.map((b, j) => (
                <li key={j} className="flex gap-2 text-sm text-foreground/85">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary/60" />
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </section>
  );
}

function References() {
  const [expanded, setExpanded] = useState(false);
  const visible = expanded ? references : references.slice(0, 10);
  return (
    <section className="mt-14">
      <SectionTitle kicker="Bronnen" title="Referenties" />
      <ol className="space-y-2 rounded-2xl border border-border bg-card p-5 text-xs leading-relaxed text-foreground/80 sm:text-sm">
        {visible.map((r, i) => (
          <li key={i} className="flex gap-3">
            <span className="w-5 shrink-0 text-right font-mono text-foreground/40">
              {i + 1}.
            </span>
            <span>{r}</span>
          </li>
        ))}
      </ol>
      <button
        type="button"
        onClick={() => setExpanded((e) => !e)}
        className="mt-3 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        {expanded
          ? "Minder tonen −"
          : `Alle ${references.length} referenties tonen +`}
      </button>
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
          className="rounded-2xl border border-primary/20 p-5 transition hover:brightness-105"
          style={{ backgroundColor: "#EFC1AC" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Masterproef
          </p>
          <p className="mt-2 text-base font-semibold text-foreground">
            Download volledige paper
          </p>
          <p className="mt-1 text-xs text-foreground/60">PDF</p>
        </a>
        <a
          href={POSTER_URL}
          className="rounded-2xl border border-primary/20 p-5 transition hover:brightness-105"
          style={{ backgroundColor: "#CED4C8" }}
        >
          <p className="text-xs font-semibold uppercase tracking-wider text-primary/70">
            Poster
          </p>
          <p className="mt-2 text-base font-semibold text-foreground">
            Download poster
          </p>
          <p className="mt-1 text-xs text-foreground/60">PDF</p>
        </a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section className="mt-14">
      <SectionTitle kicker="Contact" title="Vragen of feedback?" />
      <div className="rounded-2xl border border-border bg-card p-5">
        <p className="text-lg font-bold text-foreground">Jorien Stassen</p>
        <p className="text-sm font-semibold text-foreground mt-1">
          Masterproef Proces- en systeeminnovatie in de gezondheidszorg
        </p>
        <p className="text-sm text-foreground/70">
          Universiteit Hasselt — Faculteit Geneeskunde en Levenswetenschappen
        </p>
        <div className="mt-4 flex flex-col gap-2 sm:flex-row">
          <a
            href={`mailto:${CONTACT_EMAIL}`}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-black shadow-sm transition hover:brightness-110"
            style={{ backgroundColor: "#CED4C8" }}
          >
            Stuur een e-mail
          </a>
          <a
            href={LINKEDIN_URL}
            className="inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold text-black transition hover:brightness-95"
            style={{ backgroundColor: "#E1E7E8" }}
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
      © 2026 · UHasselt · Masterproef Proces- en systeeminnovatie in de gezondheidszorg
      · Privacyvriendelijk — geen tracking cookies.
    </footer>
  );
}
