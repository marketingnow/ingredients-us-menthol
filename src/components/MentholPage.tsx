import { useState } from "react";
import mentholImage from "@/assets/ingredient-menthol.jpg";

/* ============================================================
   EDITABLE INGREDIENT VARIABLES
   ------------------------------------------------------------
   INGREDIENT_NAME             -> "Menthol"
   INGREDIENT_CATEGORY         -> "COOLING RELIEF"
   INGREDIENT_IMAGE            -> mentholImage
   INGREDIENT_PRIMARY_BENEFIT  -> See TL;DR section
   INGREDIENT_SCIENCE_POINTS   -> See "How menthol works in the body"
   INGREDIENT_USE_CASES        -> See "How people use it"
   INGREDIENT_FAQS             -> See FAQs section
   RELATED_INGREDIENTS         -> See footer block
   ============================================================ */

// Brand tokens
const NAVY = "#06365a";
const NAVY_DEEP = "#042c4d";
const ACCENT = "#0f6b9c";
const PALE = "#f2f7fa";
const GOLD = "#c9972e";
const BORDER = "#d9e5ec";
const FG = "#0f1a24";
const MUTED = "#5a6b7a";

const faqs = [
  {
    q: "What does menthol do?",
    a: "Menthol activates cold-sensing TRPM8 receptors in the skin, creating a cooling sensation that helps distract from pain and reduce the perception of discomfort.",
  },
  {
    q: "How fast does menthol work?",
    a: "Most people feel cooling within 30-60 seconds of application. Peak effect is usually reached within 5 minutes.",
  },
  {
    q: "How long does it last?",
    a: "Cooling relief typically lasts 1-3 hours depending on concentration, application area, and individual skin chemistry.",
  },
  {
    q: "Can I use it every day?",
    a: "Yes. Menthol is safe for daily topical use up to 3-4 times per day on intact skin. Discontinue if irritation occurs.",
  },
  {
    q: "Is menthol safe for sensitive skin?",
    a: "Most people tolerate menthol well, but those with very sensitive skin should patch-test first. Avoid broken or irritated skin.",
  },
];

export default function MentholPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-white"
      style={{
        fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif',
        color: FG,
      }}
    >
      {/* ============ 1. HERO ============ */}
      <section className="relative" style={{ backgroundColor: NAVY_DEEP }}>
        <div className="mx-auto max-w-[960px] px-6 pt-14 pb-44 md:pt-20 md:pb-56 text-center">
          <p className="text-[12px] tracking-wide text-white/60 mb-5">
            Last reviewed: April 2026
          </p>
          <span
            className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white"
          >
            {/* INGREDIENT_CATEGORY */}
            COOLING RELIEF
          </span>
          <h1 className="mt-7 text-white font-bold tracking-tight text-[34px] leading-[1.12] md:text-[52px]">
            {/* INGREDIENT_NAME */}
            Menthol: The Cooling Power
            <br className="hidden md:block" /> Behind TERRAFREEZE
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[17px] md:text-[18px] leading-[1.6] text-white/75">
            Used for fast relief from jaw pain, stiff muscles, and everyday aches — no burn, no mess.
          </p>
        </div>

        {/* Overlapping image */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-110px] md:bottom-[-140px] w-[92%] max-w-[880px] px-6">
          <div
            className="overflow-hidden rounded-[18px]"
            style={{ boxShadow: "0 24px 60px -20px rgba(0,0,0,0.45)" }}
          >
            <img
              /* INGREDIENT_IMAGE */
              src={mentholImage}
              alt="Fresh menthol leaves with ice crystals"
              className="block w-full h-[220px] md:h-[300px] object-cover"
            />
          </div>
        </div>
      </section>

      {/* spacer for overlapping image */}
      <div className="h-[120px] md:h-[150px]" />

      {/* ============ 2. TL;DR ============ */}
      <section className="mx-auto max-w-[960px] px-6">
        <div className="max-w-[720px]">
          <p
            className="text-[11px] font-semibold tracking-[0.16em]"
            style={{ color: ACCENT }}
          >
            TL;DR
          </p>
          <h2
            className="mt-3 text-[22px] md:text-[26px] font-bold"
            style={{ color: NAVY }}
          >
            Why menthol works fast
          </h2>
          {/* INGREDIENT_PRIMARY_BENEFIT */}
          <p className="mt-4 text-[17px] leading-[1.65]" style={{ color: MUTED }}>
            Menthol activates cold-sensing nerves to create an instant cooling sensation that helps "distract" from pain and tension. Ideal for tense jaws, sore necks, and tight shoulders — fresh scent, non-greasy feel.
          </p>
        </div>
        <div className="mt-8 h-px" style={{ backgroundColor: BORDER }} />
      </section>

      {/* ============ 3. EDUCATION + SCIENCE ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <div className="grid md:grid-cols-2 gap-10 md:gap-14">
          {/* Left */}
          <div>
            <h2
              className="text-[28px] md:text-[32px] font-bold leading-[1.2]"
              style={{ color: NAVY }}
            >
              What is menthol and why does it feel so cooling?
            </h2>
            <p className="mt-5 text-[17px] leading-[1.65]" style={{ color: MUTED }}>
              Menthol stimulates cold-sensing receptors in the skin, producing an icy-cool sensation that helps reduce the perception of pain and calms surface discomfort quickly.
            </p>
            <ul className="mt-7 space-y-3">
              {[
                "Delivers cooling relief in seconds",
                "Helps ease minor muscle and joint aches",
                "Fresh, clean scent without heavy ointment smell",
              ].map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span
                    className="mt-1.5 h-[18px] w-[3px] rounded-full shrink-0"
                    style={{ backgroundColor: ACCENT }}
                  />
                  <span className="text-[15.5px]" style={{ color: FG }}>
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right - Science card */}
          <div
            className="rounded-[18px] p-7 md:p-9"
            style={{ backgroundColor: PALE }}
          >
            <p
              className="text-[11px] font-semibold tracking-[0.16em]"
              style={{ color: ACCENT }}
            >
              THE SCIENCE
            </p>
            <h3
              className="mt-2 text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              How menthol works in the body
            </h3>
            <div className="mt-6 space-y-5">
              {/* INGREDIENT_SCIENCE_POINTS */}
              {[
                {
                  icon: <SnowflakeIcon />,
                  title: "Activates cold receptors",
                  body: "Menthol binds to TRPM8 receptors on sensory nerves, creating a cooling sensation.",
                },
                {
                  icon: <SnowflakeIcon />,
                  title: "Helps reduce pain signals",
                  body: 'The cooling effect may "distract" from pain by competing with pain signals sent to the brain.',
                },
                {
                  icon: <ClockIcon />,
                  title: "Fast acting, temporary relief",
                  body: "Cooling begins within seconds and provides short-term relief for sore, tired muscles and joints.",
                },
              ].map((p) => (
                <div key={p.title} className="flex items-start gap-4">
                  <div
                    className="shrink-0 grid place-items-center h-9 w-9 rounded-full"
                    style={{ color: ACCENT }}
                  >
                    {p.icon}
                  </div>
                  <div>
                    <p className="font-semibold text-[15.5px]" style={{ color: NAVY }}>
                      {p.title}
                    </p>
                    <p className="mt-1 text-[15px] leading-[1.6]" style={{ color: MUTED }}>
                      {p.body}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 h-px" style={{ backgroundColor: BORDER }} />
      </section>

      {/* ============ 4. EXPERT QUOTE + FORMULA ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="md:border-r md:pr-12" style={{ borderColor: BORDER }}>
            <div
              className="text-[56px] leading-none font-serif"
              style={{ color: ACCENT, fontFamily: "Georgia, serif" }}
            >
              "
            </div>
            <p
              className="text-[20px] md:text-[22px] italic leading-[1.55] -mt-4"
              style={{ color: FG }}
            >
              Menthol's cooling effect comes from TRPM8 receptor activation, which can help reduce the perception of discomfort at the skin level.
            </p>
            <p className="mt-6 text-[15px] font-semibold" style={{ color: NAVY }}>
              — Dr. Michael Andrews, DPT
            </p>
            <p
              className="text-[11px] tracking-[0.14em] font-semibold mt-1"
              style={{ color: MUTED }}
            >
              PHYSICAL THERAPIST
            </p>
          </div>
          <div>
            <h3
              className="text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              Why we use 10% menthol in TERRAFREEZE
            </h3>
            <p className="mt-4 text-[16px] leading-[1.7]" style={{ color: MUTED }}>
              Most drugstore <span style={{ color: ACCENT }}>cooling creams</span> use 1–3% menthol. We formulated TERRAFREEZE at 10% — the maximum strength recognized under the FDA OTC external analgesic monograph — because the research is clear: concentration matters. At 10%, menthol creates a sustained cooling effect that competes with pain signals long enough to actually matter.
            </p>
            <p className="mt-4 text-[16px] leading-[1.7]" style={{ color: MUTED }}>
              But concentration alone isn't enough. Menthol sitting on the surface of the skin doesn't reach inflamed tissue. That's why we pair it with Emu Oil — a clinical-grade carrier that drives active ingredients through all 7 layers of skin. The cooling goes where the pain is, not just where you applied it.
            </p>
          </div>
        </div>
      </section>

      {/* ============ 5. USE CASES + CTA ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <div className="grid md:grid-cols-[1.6fr_1fr] gap-8">
          <div
            className="rounded-[18px] border p-7 md:p-9"
            style={{ borderColor: BORDER }}
          >
            <h3
              className="text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              How people use it
            </h3>
            {/* INGREDIENT_USE_CASES */}
            <div className="mt-7 grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { icon: <HeadIcon />, title: "Jaw & TMJ", body: "Apply along jawline and temples." },
                { icon: <NeckIcon />, title: "Neck & Shoulders", body: "Massage into tight, sore muscles." },
                { icon: <RunIcon />, title: "After Exercise", body: "Use post-workout for temporary relief." },
                { icon: <DeskIcon />, title: "Daily Tension", body: "Perfect for desk work, stress, and travel." },
              ].map((u) => (
                <div key={u.title} className="text-center">
                  <div
                    className="mx-auto h-12 w-12 grid place-items-center"
                    style={{ color: ACCENT }}
                  >
                    {u.icon}
                  </div>
                  <p
                    className="mt-3 text-[15px] font-semibold"
                    style={{ color: NAVY }}
                  >
                    {u.title}
                  </p>
                  <p className="mt-1 text-[13.5px] leading-[1.55]" style={{ color: MUTED }}>
                    {u.body}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div
            className="rounded-[18px] p-7 md:p-8 flex flex-col justify-between"
            style={{ backgroundColor: NAVY_DEEP }}
          >
            <div>
              <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.25]">
                Feel the difference for yourself
              </h3>
              <p className="mt-3 text-[15px] leading-[1.6] text-white/70">
                Experience fast, long-lasting cooling relief that goes where you need it.
              </p>
            </div>
            <button
              className="mt-6 inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110"
              style={{ backgroundColor: GOLD }}
            >
              SHOP TERRAFREEZE
              <span className="ml-3">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============ 6. APPLICATION + SAFETY ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3
              className="text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              How to apply safely
            </h3>
            <ol className="mt-6 space-y-4">
              {[
                "Apply a thin layer to clean, dry skin",
                "Massage in until fully absorbed",
                "Reapply up to 3-4 times daily as needed",
                "Wash hands after use",
              ].map((step, i) => (
                <li key={step} className="flex gap-4">
                  <span
                    className="text-[14px] font-bold w-5 shrink-0"
                    style={{ color: ACCENT }}
                  >
                    {i + 1}
                  </span>
                  <span className="text-[15.5px]" style={{ color: FG }}>
                    {step}
                  </span>
                </li>
              ))}
            </ol>
            <p
              className="mt-6 text-[14.5px] flex gap-2 items-start"
              style={{ color: MUTED }}
            >
              <span style={{ color: GOLD }}>💡</span>
              <span>
                <strong style={{ color: NAVY }}>Tip:</strong> A little goes a long way.
              </span>
            </p>
          </div>

          <div
            className="rounded-[18px] p-7 md:p-9"
            style={{ backgroundColor: PALE }}
          >
            <h3
              className="text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              Safety & cautions
            </h3>
            <ul className="mt-5 space-y-2.5 text-[15px]" style={{ color: FG }}>
              {[
                "For external use only",
                "Avoid contact with eyes and mucous membranes",
                "Do not apply to irritated or broken skin",
                "Do not bandage tightly",
                "Discontinue use if rash or irritation occurs",
              ].map((item) => (
                <li key={item} className="flex gap-2">
                  <span style={{ color: ACCENT }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="mt-5 text-[14px]" style={{ color: MUTED }}>
              Not intended for children under 12.
            </p>
          </div>
        </div>
        <div className="mt-8 h-px" style={{ backgroundColor: BORDER }} />
      </section>

      {/* ============ 7. CUSTOMER REVIEWS ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <h3
          className="text-[22px] md:text-[26px] font-bold"
          style={{ color: NAVY }}
        >
          What customers are saying
        </h3>
        <div className="mt-6 relative">
          <button
            aria-label="Previous"
            className="absolute -left-2 md:-left-6 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center text-2xl"
            style={{ color: MUTED }}
          >
            ‹
          </button>
          <button
            aria-label="Next"
            className="absolute -right-2 md:-right-6 top-1/2 -translate-y-1/2 h-9 w-9 grid place-items-center text-2xl"
            style={{ color: MUTED }}
          >
            ›
          </button>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              {
                body: '"I\'ve had a stiff neck for years from desk work. The cooling kicks in within minutes and actually stays. I\'ve tried a lot of cooling creams — nothing comes close."',
                name: "Sandra M.",
                tag: "Verified Buyer",
              },
              {
                body: '"I apply it along my jaw before bed for TMJ tension. Strong cooling but no burn whatsoever. I wake up with noticeably less tightness."',
                name: "David R.",
                tag: "Verified Buyer",
              },
              {
                body: '"After long runs my calves are destroyed. This absorbs clean, smells fresh, and the relief is immediate. Finally something that doesn\'t wear off in 20 minutes."',
                name: "Maria T.",
                tag: "Verified Buyer",
              },
            ].map((r) => (
              <div
                key={r.name}
                className="rounded-[14px] border p-5"
                style={{ borderColor: BORDER }}
              >
                <div className="flex gap-0.5" style={{ color: GOLD }}>
                  {"★★★★★".split("").map((s, i) => (
                    <span key={i}>{s}</span>
                  ))}
                </div>
                <p className="mt-3 text-[14.5px] leading-[1.65] italic" style={{ color: FG }}>
                  {r.body}
                </p>
                <p className="mt-4 text-[14px]" style={{ color: NAVY }}>
                  <span className="font-semibold">— {r.name},</span>{" "}
                  <span style={{ color: MUTED }}>{r.tag}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-8 h-px" style={{ backgroundColor: BORDER }} />
      </section>

      {/* ============ 8. FAQ + CTA ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <div className="grid md:grid-cols-[1.4fr_1fr] gap-8">
          <div>
            <h3
              className="text-[22px] md:text-[26px] font-bold"
              style={{ color: NAVY }}
            >
              FAQs
            </h3>
            {/* INGREDIENT_FAQS */}
            <div className="mt-5 space-y-2">
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div
                    key={f.q}
                    className="rounded-[10px] border overflow-hidden"
                    style={{ borderColor: BORDER }}
                  >
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between px-4 py-3.5 text-left"
                    >
                      <span className="text-[15px] font-medium" style={{ color: NAVY }}>
                        {f.q}
                      </span>
                      <span
                        className="text-[18px] transition-transform"
                        style={{ color: MUTED, transform: open ? "rotate(45deg)" : "none" }}
                      >
                        +
                      </span>
                    </button>
                    {open && (
                      <div
                        className="px-4 pb-4 text-[14.5px] leading-[1.65]"
                        style={{ color: MUTED }}
                      >
                        {f.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div
            className="rounded-[18px] p-7 md:p-8 flex flex-col justify-center h-fit"
            style={{ backgroundColor: NAVY_DEEP }}
          >
            <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.25]">
              Ready for real relief?
            </h3>
            <p className="mt-3 text-[15px] leading-[1.6] text-white/70">
              Join thousands who trust TERRAFREEZE for fast, effective cooling relief.
            </p>
            <button
              className="mt-6 inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110 w-fit"
              style={{ backgroundColor: GOLD }}
            >
              SHOP NOW
              <span className="ml-3">›</span>
            </button>
          </div>
        </div>
      </section>

      {/* ============ 9. REFERENCES ============ */}
      <section className="mx-auto max-w-[960px] px-6 py-8">
        <h3
          className="text-[16px] font-bold"
          style={{ color: NAVY }}
        >
          References
        </h3>
        <div className="mt-5 grid md:grid-cols-3 gap-6 text-[12.5px] leading-[1.6]" style={{ color: MUTED }}>
          {[
            "Eccles R. The pharmacology of menthol and its therapeutic use in respiratory disorders. Br J Pharmacol. 1994.",
            "Derry S, Moore RA. Topical menthol for chronic pain in adults. Cochrane Database Syst Rev. 2012.",
            "Davis MF, Stanczyk FZ, Swenberg JA. Menthol: A review of its pharmacology and toxicology. Food Chem Toxicol. 1988.",
          ].map((ref, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-semibold" style={{ color: NAVY }}>{i + 1}.</span>
              <span>{ref}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 10. FOOTER RESOURCE BLOCK ============ */}
      <section className="mx-auto max-w-[960px] px-6 pb-12 pt-4">
        <div
          className="rounded-[18px] p-8 md:p-10 grid md:grid-cols-3 gap-8"
          style={{ backgroundColor: PALE }}
        >
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>
              Related Ingredients
            </h4>
            {/* RELATED_INGREDIENTS */}
            <ul className="mt-4 space-y-2 text-[14.5px]">
              {["Emu Oil", "Camphor", "Arnica", "Aloe Vera"].map((r) => (
                <li key={r}>
                  <a href="#" className="underline" style={{ color: ACCENT }}>
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>
              Helpful Links
            </h4>
            <ul className="mt-4 space-y-2 text-[14.5px]">
              {["About TERRAFREEZE", "How It Works", "Ingredients Overview", "FAQs"].map((r) => (
                <li key={r}>
                  <a href="#" className="underline" style={{ color: ACCENT }}>
                    {r}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>
              Medical Reviewer
            </h4>
            <div className="mt-4 flex items-center gap-3">
              <div
                className="h-12 w-12 rounded-full grid place-items-center text-white font-bold"
                style={{ backgroundColor: NAVY }}
              >
                MA
              </div>
              <div>
                <p className="text-[14.5px] font-semibold" style={{ color: NAVY }}>
                  Dr. Michael Andrews, DPT
                </p>
                <p className="text-[12px]" style={{ color: MUTED }}>
                  Doctor of Physical Therapy
                </p>
                <p className="text-[12px]" style={{ color: MUTED }}>
                  Medical Reviewer
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ===== Inline icons ===== */
function SnowflakeIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <path d="M12 2v20M2 12h20M4.5 4.5l15 15M19.5 4.5l-15 15" />
    </svg>
  );
}
function ClockIcon() {
  return (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round">
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3 2" />
    </svg>
  );
}
function HeadIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4">
      <path d="M18 5c5 0 9 4 9 9 0 3-1 5-2 7v4h-3v3h-8v-5c-2-2-3-4-3-7 0-5 4-11 7-11z" />
    </svg>
  );
}
function NeckIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4">
      <circle cx="18" cy="11" r="5" />
      <path d="M10 30c0-5 4-8 8-8s8 3 8 8" />
    </svg>
  );
}
function RunIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="22" cy="7" r="2.5" />
      <path d="M11 18l5-4 4 3 3 5M14 30l3-7 4 2 2 5M9 13l3 1" />
    </svg>
  );
}
function DeskIcon() {
  return (
    <svg width="36" height="36" viewBox="0 0 36 36" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round">
      <circle cx="14" cy="9" r="3" />
      <path d="M9 30v-6c0-3 2-5 5-5h2v8M16 22h12M28 22v8M22 30v-4" />
    </svg>
  );
}
