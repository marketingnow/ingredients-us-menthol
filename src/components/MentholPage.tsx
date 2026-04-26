import { useState } from "react";
import mentholImage from "@/assets/ingredient-menthol.jpg";
import useBruisesImg from "@/assets/use-bruises.jpg";
import useNeckImg from "@/assets/use-neck.jpg";
import usePostWorkoutImg from "@/assets/use-postworkout.jpg";
import useEverydayImg from "@/assets/use-everyday.jpg";

/* ============================================================
   EDITABLE INGREDIENT VARIABLES
   ------------------------------------------------------------
   INGREDIENT_NAME, INGREDIENT_CATEGORY, INGREDIENT_IMAGE,
   INGREDIENT_PRIMARY_BENEFIT, INGREDIENT_SCIENCE_POINTS,
   INGREDIENT_USE_CASES, INGREDIENT_FAQS, RELATED_INGREDIENTS
   ============================================================ */

const NAVY = "#06365a";
const NAVY_DEEP = "#042c4d";
const ACCENT = "#0f6b9c";
const PALE = "#f2f7fa";
const GOLD = "#c9972e";
const BORDER = "#d9e5ec";
const FG = "#0f1a24";
const MUTED = "#5a6b7a";

const useCaseImages = [useBruisesImg, useNeckImg, usePostWorkoutImg, useEverydayImg];

const faqs = [
  { q: "What does menthol do?", a: "Menthol activates cold-sensing TRPM8 receptors in the skin, creating a cooling sensation that helps distract from pain and reduce the perception of discomfort." },
  { q: "How fast does menthol work?", a: "Most people feel cooling within 30-60 seconds of application. Peak effect is usually reached within 5 minutes." },
  { q: "How long does it last?", a: "Cooling relief typically lasts 1-3 hours depending on concentration, application area, and individual skin chemistry." },
  { q: "Can I use it every day?", a: "Yes. Menthol is safe for daily topical use up to 3-4 times per day on intact skin. Discontinue if irritation occurs." },
  { q: "Is menthol safe for sensitive skin?", a: "Most people tolerate menthol well, but those with very sensitive skin should patch-test first. Avoid broken or irritated skin." },
  { q: "Is menthol good for muscle and joint pain?", a: "Yes. Menthol is FDA-recognized as a counterirritant for the temporary relief of minor muscle and joint aches. At 10% concentration, it creates a sustained cooling effect that competes with pain signals long enough to provide meaningful relief." },
  { q: "How much menthol is in TERRAFREEZE?", a: "TERRAFREEZE contains 10% menthol — the maximum strength recognized under the FDA OTC external analgesic monograph for topical cooling relief. Most drugstore creams use 1–3%." },
  { q: "Does menthol actually relieve pain or just mask it?", a: "Both. Menthol activates TRPM8 cold receptors which create a cooling sensation that interrupts pain signals at the skin level — a mechanism confirmed by published research and recognized by the FDA as a legitimate counterirritant effect." },
];

// Single page wrapper — every non-bleed section uses this
const WRAP = "mx-auto w-full max-w-[1080px] px-5 md:px-10";
// Section vertical padding — fixed at 40px
const SECT = "py-10";
const HR = (
  <div className="mx-auto w-full max-w-[1080px] px-5 md:px-10">
    <div className="h-px w-full" style={{ backgroundColor: BORDER }} />
  </div>
);

export default function MentholPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen bg-white"
      style={{ fontFamily: '"Plus Jakarta Sans", system-ui, -apple-system, sans-serif', color: FG }}
    >
      {/* ============ 1. HERO (full bleed) ============ */}
      <section className="relative w-full" style={{ backgroundColor: NAVY_DEEP }}>
        <div className="mx-auto max-w-[900px] px-5 pt-10 pb-44 md:pt-12 md:pb-56 text-center">
          <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white">
            COOLING RELIEF
          </span>
          <h1 className="mt-7 text-white font-bold tracking-tight text-[34px] leading-[1.12] md:text-[52px]">
            Menthol for Pain Relief:<br /> How It Works in TERRAFREEZE
          </h1>
          <p className="mx-auto mt-5 text-[17px] md:text-[18px] leading-[1.6] text-white/75">
            Used for fast relief from jaw pain, stiff muscles, and everyday aches — no burn, no mess.
          </p>
        </div>

        {/* Overlapping image — wider than the text wrapper */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-110px] md:bottom-[-140px] w-[94%] max-w-[1180px] px-5">
          <div className="overflow-hidden rounded-[18px]" style={{ boxShadow: "0 24px 60px -20px rgba(0,0,0,0.45)" }}>
            <img src={mentholImage} alt="Fresh menthol leaves with ice crystals" className="block w-full h-[240px] md:h-[340px] object-cover" />
          </div>
        </div>
      </section>

      {/* spacer pulls page up tight against hero image */}
      <div className="h-[110px] md:h-[140px]" />
      <div style={{ marginTop: "-40px" }} />

      {/* ============ 2. TL;DR ============ */}
      <section className={`${WRAP} ${SECT}`} style={{ paddingTop: 64 }}>
        <div
          className="mx-auto max-w-[760px] rounded-[18px] px-7 py-8 md:px-10 md:py-10 text-center bg-white"
          style={{ border: "2px solid #1F5F4A" }}
        >
          <p className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: ACCENT }}>TL;DR</p>
          <h2 className="text-[26px] md:text-[32px] font-bold leading-[1.2]" style={{ color: NAVY, marginTop: 8 }}>
            Why menthol works fast
          </h2>
          <p className="text-[17px] leading-[1.65] mx-auto" style={{ color: MUTED, marginTop: 14, maxWidth: 620 }}>
            Menthol activates cold-sensing nerves to create an instant cooling sensation that helps "distract" from pain and tension. Ideal for tense jaws, sore necks, and tight shoulders — fresh scent, non-greasy feel.
          </p>
        </div>
      </section>
      {HR}

      {/* ============ 3. EDUCATION + SCIENCE ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-[0.92fr_1.08fr] items-start" style={{ gap: 32 }}>
          <div className="w-full">
            <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.15]" style={{ color: NAVY }}>
              What does menthol do for pain?
            </h2>
            <p className="text-[16px] leading-[1.7] w-full" style={{ color: MUTED, marginTop: 16 }}>
              Menthol stimulates cold-sensing receptors in the skin, producing an icy-cool sensation that helps reduce the perception of pain and calms surface discomfort quickly.
            </p>
            <ul style={{ marginTop: 22 }}>
              {[
                "Delivers cooling relief in seconds",
                "Helps ease minor muscle and joint aches",
                "Fresh, clean scent without heavy ointment smell",
              ].map((item, i) => (
                <li key={item} className="flex items-start gap-4" style={{ marginTop: i === 0 ? 0 : 14 }}>
                  <span className="mt-1.5 h-[18px] w-[3px] rounded-full shrink-0" style={{ backgroundColor: ACCENT }} />
                  <span className="text-[15.5px]" style={{ color: FG }}>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-[16px] p-6 md:p-7" style={{ backgroundColor: PALE }}>
            <p className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: ACCENT }}>THE SCIENCE</p>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY, marginTop: 8 }}>
              How menthol works in the body
            </h3>
            <div style={{ marginTop: 20 }}>
              {[
                {
                  title: "Activates cold receptors",
                  body: "Menthol binds to TRPM8 receptors on sensory nerves, creating a cooling sensation.",
                },
                {
                  title: "Helps reduce pain signals",
                  body: 'The cooling effect may "distract" from pain by competing with pain signals sent to the brain.',
                },
                {
                  title: "Fast acting, temporary relief",
                  body: "Cooling begins within seconds and provides short-term relief for sore, tired muscles and joints.",
                },
              ].map((p, i) => (
                <div key={p.title} className="flex gap-4" style={{ marginTop: i === 0 ? 0 : 18 }}>
                  <div
                    className="shrink-0 flex items-center justify-center h-8 w-8 rounded-full text-[14px] font-bold"
                    style={{ backgroundColor: ACCENT, color: "#fff" }}
                  >
                    {i + 1}
                  </div>
                  <div>
                    <p className="font-bold text-[16px]" style={{ color: NAVY }}>{p.title}</p>
                    <p className="text-[14.5px] leading-[1.6]" style={{ color: MUTED, marginTop: 4 }}>{p.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 3.5 RESEARCH ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <h2 className="text-[34px] font-bold leading-[1.15]" style={{ color: NAVY, fontWeight: 700 }}>
          What the research says about menthol for pain
        </h2>
        <p className="text-[16px] leading-[1.6]" style={{ color: MUTED, marginTop: 14 }}>
          Menthol has been studied as a topical analgesic for decades. Here's what the evidence shows.
        </p>
        <div style={{ marginTop: 28 }}>
          {[
            {
              label: "FDA Monograph M017",
              finding: "The FDA OTC external analgesic monograph lists menthol (1.25–16%) as a recognized counterirritant for the temporary relief of minor muscle and joint aches and pains.",
              source: "FDA OTC Monograph M017, 21 CFR Part 348",
              url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-348",
            },
            {
              label: "PAIN Journal, 2013",
              finding: "TRPM8 is the principal mediator of menthol-induced analgesia. Genetic deletion of TRPM8 completely abolished menthol's pain-relieving effect, confirming the cooling receptor as the core mechanism.",
              source: "PAIN, Vol. 154(10):2169–2177 — PubMed ID: 23820004",
              url: "https://pubmed.ncbi.nlm.nih.gov/23820004/",
            },
            {
              label: "PMC Randomized Trial, 2014",
              finding: "A triple-blind, placebo-controlled trial found topical menthol produced a 31% reduction in chronic pain scores — a moderate effect size — compared to placebo in patients with chronic musculoskeletal pain.",
              source: "PMC4178917 — Randomized Placebo-Controlled Trial",
              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4178917/",
            },
          ].map((item, i) => (
            <div
              key={item.label}
              className="grid grid-cols-1 md:grid-cols-[140px_1fr] items-start"
              style={{
                gap: 40,
                padding: "28px 0",
                borderTop: i === 0 ? "none" : `1px solid ${BORDER}`,
              }}
            >
              <div
                className="text-[12px] uppercase"
                style={{ color: ACCENT, fontWeight: 800, letterSpacing: "0.10em" }}
              >
                {item.label}
              </div>
              <div>
                <p className="text-[16px]" style={{ color: MUTED, fontWeight: 400, lineHeight: 1.72 }}>
                  {item.finding}
                </p>
                <p
                  className="text-[12px] italic"
                  style={{ color: MUTED, opacity: 0.6, fontWeight: 500, marginTop: 8 }}
                >
                  <a href={item.url} target="_blank" rel="noopener" className="underline hover:opacity-80">
                    {item.source}
                  </a>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {HR}

      {/* ============ 4. EXPERT QUOTE + FORMULA ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-2 items-stretch" style={{ gap: 48 }}>
          <div className="md:pr-12 md:border-r-2 flex flex-col justify-center" style={{ borderColor: BORDER }}>
            <div className="text-[56px] leading-none" style={{ color: ACCENT, fontFamily: "Georgia, serif" }}>"</div>
            <p className="text-[20px] md:text-[22px] italic leading-[1.55]" style={{ color: FG, marginTop: -16 }}>
              Menthol's cooling effect comes from TRPM8 receptor activation, which can help reduce the perception of discomfort at the skin level.
            </p>
            <p className="text-[15px] font-semibold" style={{ color: NAVY, marginTop: 20 }}>— Dr. Michael Andrews, DPT</p>
            <p className="text-[11px] tracking-[0.14em] font-semibold" style={{ color: MUTED, marginTop: 4 }}>PHYSICAL THERAPIST</p>
          </div>
          <div>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>
              Why we use 10% menthol in TERRAFREEZE
            </h3>
            <p className="text-[16px] leading-[1.7]" style={{ color: MUTED, marginTop: 14 }}>
              Most drugstore <span style={{ color: ACCENT }}>cooling creams</span> use 1–3% menthol. We formulated TERRAFREEZE at 10% — the maximum strength recognized under the FDA OTC external analgesic monograph — because the research is clear: concentration matters. At 10%, menthol creates a sustained cooling effect that competes with pain signals long enough to actually matter.
            </p>
            <p className="text-[16px] leading-[1.7]" style={{ color: MUTED, marginTop: 14 }}>
              But concentration alone isn't enough. Menthol sitting on the surface of the skin doesn't reach inflamed tissue. That's why we pair it with Emu Oil — a clinical-grade carrier that drives active ingredients through all 7 layers of skin.
            </p>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 5. USE CASES + CTA ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-[1.6fr_1fr] items-start" style={{ gap: 40 }}>
          <div className="rounded-[16px] border p-7 md:p-9" style={{ borderColor: BORDER }}>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>How people use menthol for pain relief</h3>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ marginTop: 24, gap: 20 }}>
              {[
                { title: "Bruising & Discoloration", body: "Apply directly to the bruised area. Cooling relief that helps calm soreness and tenderness fast." },
                { title: "Neck & Shoulders", body: "Works into knots fast. Cooling kicks in within minutes and stays through your day." },
                { title: "Post-Workout Soreness", body: "Apply right after activity. Stop the soreness before it sets in and stiffens up overnight." },
                { title: "Everyday Aches", body: "Desk pain, travel tension, stress headaches — relief that fits in your bag and your routine." },
              ].map((u, i) => (
                <div key={u.title}>
                  <img
                    src={useCaseImages[i]}
                    alt={u.title}
                    className="w-full object-cover"
                    style={{ aspectRatio: "4 / 3", borderRadius: 12, marginBottom: 14 }}
                  />
                  <p className="text-[15px] font-semibold" style={{ color: NAVY }}>{u.title}</p>
                  <p className="text-[13.5px] leading-[1.55]" style={{ color: MUTED, marginTop: 4 }}>{u.body}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[16px] p-7 md:p-8 flex flex-col" style={{ backgroundColor: NAVY_DEEP }}>
            <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.25]">Feel the difference for yourself</h3>
            <p className="text-[15px] leading-[1.6] text-white/70" style={{ marginTop: 14 }}>
              Experience fast, long-lasting cooling relief that goes where you need it.
            </p>
            <a
              href="https://terrafreeze.com/product/terrafreeze-2oz/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110 w-fit"
              style={{ backgroundColor: GOLD, marginTop: 20 }}
            >
              SHOP TERRAFREEZE<span className="ml-3">›</span>
            </a>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 6. APPLICATION + SAFETY ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-2 items-start" style={{ gap: 40 }}>
          <div>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>How to apply safely</h3>
            <ol style={{ marginTop: 24 }}>
              {[
                "Apply a thin layer to clean, dry skin",
                "Massage in until fully absorbed",
                "Reapply up to 3-4 times daily as needed",
                "Wash hands after use",
              ].map((step, i) => (
                <li key={step} className="flex gap-4" style={{ marginTop: i === 0 ? 0 : 8 }}>
                  <span className="text-[14px] font-bold w-5 shrink-0" style={{ color: ACCENT }}>{i + 1}</span>
                  <span className="text-[16px]" style={{ color: FG }}>{step}</span>
                </li>
              ))}
            </ol>
          </div>

          <div className="rounded-[16px] p-7 md:p-9" style={{ backgroundColor: PALE }}>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>Safety & cautions</h3>
            <ul style={{ marginTop: 18 }}>
              {[
                "For external use only",
                "Avoid contact with eyes and mucous membranes",
                "Do not apply to irritated or broken skin",
                "Do not bandage tightly",
                "Discontinue use if rash or irritation occurs",
              ].map((item, i) => (
                <li key={item} className="flex gap-2 text-[15px]" style={{ color: FG, marginTop: i === 0 ? 0 : 8 }}>
                  <span style={{ color: ACCENT }}>•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-[14px]" style={{ color: MUTED, marginTop: 14 }}>Not intended for children under 12.</p>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 7. CUSTOMER REVIEWS ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>What customers are saying</h3>
        <div className="grid md:grid-cols-3" style={{ marginTop: 24, gap: 20 }}>
          {[
            { body: '"I\'ve had a stiff neck for years from desk work. The cooling kicks in within minutes and actually stays. I\'ve tried a lot of cooling creams — nothing comes close."', name: "Sandra M.", tag: "Verified Buyer" },
            { body: '"I apply it along my jaw before bed for TMJ tension. Strong cooling but no burn whatsoever. I wake up with noticeably less tightness."', name: "David R.", tag: "Verified Buyer" },
            { body: '"After long runs my calves are destroyed. This absorbs clean, smells fresh, and the relief is immediate. Finally something that doesn\'t wear off in 20 minutes."', name: "Maria T.", tag: "Verified Buyer" },
          ].map((r) => (
            <div key={r.name} className="rounded-[14px] border p-5" style={{ borderColor: BORDER }}>
              <div className="flex gap-0.5" style={{ color: GOLD }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-[14.5px] leading-[1.65] italic" style={{ color: FG, marginTop: 14 }}>{r.body}</p>
              <p className="text-[14px]" style={{ color: NAVY, marginTop: 14 }}>
                <span className="font-semibold">— {r.name},</span> <span style={{ color: MUTED }}>{r.tag}</span>
              </p>
            </div>
          ))}
        </div>
      </section>
      {HR}

      {/* ============ 8. FAQ + CTA ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-[1.4fr_1fr] items-center" style={{ gap: 40 }}>
          <div>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>FAQs</h3>
            <div style={{ marginTop: 18 }}>
              {faqs.map((f, i) => {
                const open = openFaq === i;
                return (
                  <div key={f.q} style={{ borderBottom: "1px solid rgba(15,26,36,0.08)" }}>
                    <button
                      onClick={() => setOpenFaq(open ? null : i)}
                      className="flex w-full items-center justify-between py-4 text-left"
                    >
                      <span className="text-[16px] font-medium" style={{ color: NAVY }}>{f.q}</span>
                      <span className="text-[18px] transition-transform" style={{ color: MUTED, transform: open ? "rotate(45deg)" : "none" }}>+</span>
                    </button>
                    {open && (
                      <div className="text-[15px] leading-[1.65]" style={{ color: MUTED, paddingBottom: 16 }}>{f.a}</div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="rounded-[16px] p-7 md:p-8 flex flex-col h-fit self-center" style={{ backgroundColor: NAVY_DEEP }}>
            <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.25]">Ready for real relief?</h3>
            <p className="text-[15px] leading-[1.6] text-white/70" style={{ marginTop: 14 }}>
              Join thousands who trust TERRAFREEZE for fast, effective cooling relief.
            </p>
            <a
              href="https://terrafreeze.com/product/terrafreeze-2oz/"
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110 w-fit"
              style={{ backgroundColor: GOLD, marginTop: 20 }}
            >
              SHOP NOW<span className="ml-3">›</span>
            </a>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 9. REFERENCES ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <h3 className="text-[16px] font-bold" style={{ color: NAVY }}>References</h3>
        <div className="grid grid-cols-1 text-[12.5px] leading-[1.6]" style={{ color: MUTED, marginTop: 18, gap: 16 }}>
          {[
            {
              ref: "FDA OTC Monograph M017, 21 CFR Part 348",
              url: "https://www.ecfr.gov/current/title-21/chapter-I/subchapter-D/part-348",
            },
            {
              ref: "PAIN, Vol. 154(10):2169–2177 — PubMed ID: 23820004",
              url: "https://pubmed.ncbi.nlm.nih.gov/23820004/",
            },
            {
              ref: "PMC4178917 — Randomized Placebo-Controlled Trial, 2014",
              url: "https://pmc.ncbi.nlm.nih.gov/articles/PMC4178917/",
            },
          ].map((item, i) => (
            <div key={i} className="flex gap-3">
              <span className="font-semibold" style={{ color: NAVY }}>{i + 1}.</span>
              <a href={item.url} target="_blank" rel="noopener" className="underline hover:opacity-80">
                {item.ref}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ============ 10. FOOTER RESOURCE BLOCK ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="rounded-[16px] p-8 md:p-10 grid md:grid-cols-2" style={{ backgroundColor: PALE, gap: 32 }}>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>Related Ingredients</h4>
            <ul style={{ marginTop: 14 }}>
              {[
                { label: "Emu Oil", href: "https://terrafreeze.com/ingredients/emu-oil" },
                { label: "Camphor", href: "https://terrafreeze.com/ingredients/camphor" },
                { label: "Arnica", href: "https://terrafreeze.com/ingredients/arnica" },
                { label: "Aloe Vera", href: "https://terrafreeze.com/ingredients/aloe-vera" },
              ].map((r, i) => (
                <li key={r.label} className="text-[14.5px]" style={{ marginTop: i === 0 ? 0 : 8 }}>
                  <a href={r.href} className="underline" style={{ color: ACCENT }}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>Helpful Links</h4>
            <ul style={{ marginTop: 14 }}>
              {[
                { label: "About TERRAFREEZE", href: "https://terrafreeze.com/about-us" },
                { label: "How It Works", href: "https://terrafreeze.com/how-it-works" },
                { label: "Ingredients Overview", href: "https://terrafreeze.com/ingredients" },
                { label: "FAQs", href: "https://terrafreeze.com/faq" },
              ].map((r, i) => (
                <li key={r.label} className="text-[14.5px]" style={{ marginTop: i === 0 ? 0 : 8 }}>
                  <a href={r.href} className="underline" style={{ color: ACCENT }}>{r.label}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
