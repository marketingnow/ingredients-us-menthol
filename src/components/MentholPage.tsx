import { useState } from "react";
import mentholImage from "@/assets/ingredient-menthol.jpg";

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

const useCaseImages = [
  "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=400&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=400&q=80",
  "https://images.unsplash.com/photo-1538805060514-97d9cc17730c?w=400&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80",
];

const faqs = [
  { q: "What does menthol do?", a: "Menthol activates cold-sensing TRPM8 receptors in the skin, creating a cooling sensation that helps distract from pain and reduce the perception of discomfort." },
  { q: "How fast does menthol work?", a: "Most people feel cooling within 30-60 seconds of application. Peak effect is usually reached within 5 minutes." },
  { q: "How long does it last?", a: "Cooling relief typically lasts 1-3 hours depending on concentration, application area, and individual skin chemistry." },
  { q: "Can I use it every day?", a: "Yes. Menthol is safe for daily topical use up to 3-4 times per day on intact skin. Discontinue if irritation occurs." },
  { q: "Is menthol safe for sensitive skin?", a: "Most people tolerate menthol well, but those with very sensitive skin should patch-test first. Avoid broken or irritated skin." },
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
        <div className="mx-auto max-w-[640px] px-5 pt-14 pb-44 md:pt-20 md:pb-56 text-center">
          <p className="text-[12px] tracking-wide text-white/60 mb-5">Last reviewed: April 2026</p>
          <span className="inline-block rounded-full border border-white/30 px-4 py-1.5 text-[11px] font-semibold tracking-[0.14em] text-white">
            COOLING RELIEF
          </span>
          <h1 className="mt-7 text-white font-bold tracking-tight text-[34px] leading-[1.12] md:text-[52px]">
            Menthol: The Cooling Power<br className="hidden md:block" /> Behind TERRAFREEZE
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
      <section className={`${WRAP} ${SECT}`}>
        <p className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: ACCENT }}>TL;DR</p>
        <h2 className="text-[26px] md:text-[32px] font-bold leading-[1.2]" style={{ color: NAVY, marginTop: 8 }}>
          Why menthol works fast
        </h2>
        <p className="text-[17px] leading-[1.65]" style={{ color: MUTED, marginTop: 14 }}>
          Menthol activates cold-sensing nerves to create an instant cooling sensation that helps "distract" from pain and tension. Ideal for tense jaws, sore necks, and tight shoulders — fresh scent, non-greasy feel.
        </p>
      </section>
      {HR}

      {/* ============ 3. EDUCATION + SCIENCE ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-2 items-start" style={{ gap: 40 }}>
          <div className="w-full">
            <h2 className="text-[28px] md:text-[34px] font-bold leading-[1.15]" style={{ color: NAVY }}>
              What is menthol and why does it feel so cooling?
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

          <div className="rounded-[16px] p-7 md:p-9" style={{ backgroundColor: PALE }}>
            <p className="text-[11px] font-semibold tracking-[0.16em]" style={{ color: ACCENT }}>THE SCIENCE</p>
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY, marginTop: 8 }}>
              How menthol works in the body
            </h3>
            <div style={{ marginTop: 24 }}>
              {[
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93M7 5l5 3 5-3M7 19l5-3 5 3M5 7l3 5-3 5M19 7l-3 5 3 5" />
                    </svg>
                  ),
                  title: "Activates cold receptors",
                  body: "Menthol binds to TRPM8 receptors on sensory nerves, creating a cooling sensation.",
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <path d="M12 2v20M4.93 4.93l14.14 14.14M2 12h20M4.93 19.07L19.07 4.93M7 5l5 3 5-3M7 19l5-3 5 3M5 7l3 5-3 5M19 7l-3 5 3 5" />
                    </svg>
                  ),
                  title: "Helps reduce pain signals",
                  body: 'The cooling effect may "distract" from pain by competing with pain signals sent to the brain.',
                },
                {
                  icon: (
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className="h-7 w-7">
                      <circle cx="12" cy="12" r="9" />
                      <path d="M12 7v5l3 2" />
                    </svg>
                  ),
                  title: "Fast acting, temporary relief",
                  body: "Cooling begins within seconds and provides short-term relief for sore, tired muscles and joints.",
                },
              ].map((p, i) => (
                <div key={p.title} className="flex gap-4" style={{ marginTop: i === 0 ? 0 : 22 }}>
                  <div className="shrink-0" style={{ color: ACCENT }}>{p.icon}</div>
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

      {/* ============ 4. EXPERT QUOTE + FORMULA ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <div className="grid md:grid-cols-2 items-start" style={{ gap: 40 }}>
          <div className="md:pr-10 md:border-r" style={{ borderColor: BORDER }}>
            <div className="text-[56px] leading-none" style={{ color: ACCENT, fontFamily: "Georgia, serif" }}>"</div>
            <p className="text-[20px] md:text-[22px] italic leading-[1.55]" style={{ color: FG, marginTop: -16 }}>
              Menthol's cooling effect comes from TRPM8 receptor activation, which can help reduce the perception of discomfort at the skin level.
            </p>
            <p className="text-[15px] font-semibold" style={{ color: NAVY, marginTop: 24 }}>— Dr. Michael Andrews, DPT</p>
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
            <h3 className="text-[22px] md:text-[26px] font-bold" style={{ color: NAVY }}>How people use it</h3>
            <div className="grid grid-cols-2 md:grid-cols-4" style={{ marginTop: 24, gap: 20 }}>
              {[
                { title: "Jaw & TMJ", body: "Apply along jawline and temples." },
                { title: "Neck & Shoulders", body: "Massage into tight, sore muscles." },
                { title: "After Exercise", body: "Use post-workout for temporary relief." },
                { title: "Daily Tension", body: "Perfect for desk work, stress, and travel." },
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
            <button
              className="inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110 w-fit"
              style={{ backgroundColor: GOLD, marginTop: 20 }}
            >
              SHOP TERRAFREEZE<span className="ml-3">›</span>
            </button>
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
        <div className="grid md:grid-cols-[1.4fr_1fr] items-start" style={{ gap: 40 }}>
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

          <div className="rounded-[16px] p-7 md:p-8 flex flex-col h-fit" style={{ backgroundColor: NAVY_DEEP }}>
            <h3 className="text-[22px] md:text-[26px] font-bold text-white leading-[1.25]">Ready for real relief?</h3>
            <p className="text-[15px] leading-[1.6] text-white/70" style={{ marginTop: 14 }}>
              Join thousands who trust TERRAFREEZE for fast, effective cooling relief.
            </p>
            <button
              className="inline-flex items-center justify-between rounded-md px-5 py-3 text-[12.5px] font-bold tracking-[0.12em] text-white transition hover:brightness-110 w-fit"
              style={{ backgroundColor: GOLD, marginTop: 20 }}
            >
              SHOP NOW<span className="ml-3">›</span>
            </button>
          </div>
        </div>
      </section>
      {HR}

      {/* ============ 9. REFERENCES ============ */}
      <section className={`${WRAP} ${SECT}`}>
        <h3 className="text-[16px] font-bold" style={{ color: NAVY }}>References</h3>
        <div className="grid md:grid-cols-3 text-[12.5px] leading-[1.6]" style={{ color: MUTED, marginTop: 18, gap: 24 }}>
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
      <section className={`${WRAP} ${SECT}`}>
        <div className="rounded-[16px] p-8 md:p-10 grid md:grid-cols-3" style={{ backgroundColor: PALE, gap: 32 }}>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>Related Ingredients</h4>
            <ul style={{ marginTop: 14 }}>
              {["Emu Oil", "Camphor", "Arnica", "Aloe Vera"].map((r, i) => (
                <li key={r} className="text-[14.5px]" style={{ marginTop: i === 0 ? 0 : 8 }}>
                  <a href="#" className="underline" style={{ color: ACCENT }}>{r}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>Helpful Links</h4>
            <ul style={{ marginTop: 14 }}>
              {["About TERRAFREEZE", "How It Works", "Ingredients Overview", "FAQs"].map((r, i) => (
                <li key={r} className="text-[14.5px]" style={{ marginTop: i === 0 ? 0 : 8 }}>
                  <a href="#" className="underline" style={{ color: ACCENT }}>{r}</a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-[15px] font-bold" style={{ color: NAVY }}>Medical Reviewer</h4>
            <p className="text-[14.5px] font-semibold" style={{ color: NAVY, marginTop: 14 }}>Dr. Michael Andrews, DPT</p>
            <p className="text-[12px]" style={{ color: MUTED, marginTop: 4 }}>Doctor of Physical Therapy</p>
            <p className="text-[12px]" style={{ color: MUTED, marginTop: 2 }}>Medical Reviewer</p>
          </div>
        </div>
      </section>
    </div>
  );
}
