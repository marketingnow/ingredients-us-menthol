import { useState } from "react";
import mentholImage from "@/assets/ingredient-menthol.jpg";

const fg = "210, 29%, 11%";
const blue = "202, 72%, 35%";
const navy = "207, 76%, 24%";
const tint = "200, 20%, 94%";
const gold = "43, 76%, 46%";

const research = [
  {
    label: "FDA Monograph",
    finding:
      "The FDA OTC external analgesic monograph lists menthol (1.25–16%) as a recognized counterirritant for temporary relief of minor muscle and joint aches.",
    source: "FDA External Analgesic OTC Monograph, 21 CFR Part 348",
  },
  {
    label: "Eur. J. Pharmacology",
    finding:
      "Research confirms menthol selectively activates TRPM8 cold-receptor channels, producing the cooling sensation that interrupts pain signal transmission at the skin level.",
    source: "Proudfoot et al. — European Journal of Pharmacology",
  },
  {
    label: "Clin. J. Pain",
    finding:
      "Topical menthol formulations produced significant reductions in musculoskeletal pain intensity, with onset of cooling relief reported within minutes of application.",
    source: "Topp et al. — The Clinical Journal of Pain",
  },
];

const useCases = [
  { label: "JAW & FACE", text: "Apply along the jawline for nighttime TMJ tension" },
  { label: "NECK & POSTURE", text: "Cool stiff necks from long drives or desk work" },
  { label: "POST-WORKOUT", text: "Soothe sore calves after running or training" },
  { label: "SHOULDERS", text: "Calm tight shoulders from stress or poor sleep" },
];

const steps = [
  "Use a thin layer on clean, dry skin — avoid eyes, lips, and broken skin",
  "Apply up to 3–4 times daily as needed",
  "Wash hands after use, especially before touching the face",
];

const cautions = [
  { label: "SENSITIVE SKIN", text: "Do not apply to broken, irritated, or sunburned skin." },
  { label: "CHILDREN UNDER 2", text: "Not intended for infants or toddlers. Keep out of reach of children." },
  { label: "PREGNANCY", text: "Consult your physician before use if pregnant, nursing, or managing a health condition." },
];

const faqs = [
  {
    q: "Can I put TERRAFREEZE on my face?",
    a: "Yes — avoid direct contact with eyes and lips. A small amount along the jawline is common for nighttime TMJ tension.",
  },
  {
    q: "Is it safe to use menthol cream every day?",
    a: "Generally yes. Apply to intact skin as directed, up to 3 to 4 times daily. Stop if irritation occurs.",
  },
  {
    q: "How much menthol is actually in TERRAFREEZE?",
    a: "10% menthol — a recognized over the counter strength for topical cooling relief.",
  },
  {
    q: "Will it burn or feel too intense?",
    a: "Most people feel a cooling sensation, not a burn. Menthol is a counterirritant, not a heat-based ingredient.",
  },
  {
    q: "Can I use it if I'm pregnant?",
    a: "Consult your doctor first. We recommend checking with your physician if you're pregnant or nursing.",
  },
  {
    q: "Does menthol cream actually relieve pain or just mask it?",
    a: "Both. Menthol creates a cooling sensation that interrupts pain signals at the skin level — a mechanism the FDA recognizes as a legitimate counterirritant effect.",
  },
];

const references = [
  "FDA External Analgesic OTC Monograph. 21 CFR Part 348.",
  "Proudfoot CJ, et al. Analgesia mediated by the TRPM8 cold receptor. Current Biology, 2006.",
  "Topp R, et al. The effect of topical menthol on ischemic pain. The Clinical Journal of Pain, 2013.",
];

function Chevron({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      width={18}
      height={18}
      className={`transition-transform duration-200 ${open ? "rotate-180" : ""}`}
      style={{ color: `hsl(${fg} / 0.35)` }}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

export default function MentholPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen w-full bg-white"
      style={{
        fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif",
        color: `hsl(${fg})`,
      }}
    >
      {/* SECTION 1 — HERO */}
      <section className="w-full" style={{ backgroundColor: `hsl(${navy})` }}>
        <div className="mx-auto max-w-[820px] px-6 pt-[72px] pb-20 text-center">
          <p className="mb-3 text-[11px] font-normal text-white/40">
            Last reviewed: April 2026
          </p>
          <span className="inline-block rounded-full border border-white/30 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-white/70">
            Cooling Relief
          </span>
          <h1 className="mt-4 text-[32px] font-extrabold leading-[1.12] text-white md:text-[52px]">
            Menthol: The Cooling Power Behind TERRAFREEZE
          </h1>
          <p className="mx-auto mt-5 max-w-[560px] text-[19px] font-light leading-[1.6] text-white/65">
            Used for fast relief from jaw pain, stiff muscles, and everyday aches — no burn, no mess.
          </p>
        </div>
      </section>

      {/* SECTION 2 — HERO IMAGE (overlapping) */}
      <section className="w-full bg-white">
        <div className="mx-auto -mt-12 max-w-[960px] px-8">
          <img
            src={mentholImage}
            alt="Fresh peppermint leaves with menthol crystals on marble"
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[3/2] w-full rounded-[20px] object-cover shadow-[0_24px_80px_rgba(0,0,0,0.18)]"
          />
        </div>
      </section>

      {/* SECTION 3 — TL;DR */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[680px] px-6 pt-16">
          <p
            className="text-[11px] font-extrabold uppercase tracking-[0.16em]"
            style={{ color: `hsl(${blue})` }}
          >
            TL;DR
          </p>
          <h2 className="mt-2.5 text-[26px] font-bold">Why menthol works fast</h2>
          <p
            className="mt-3.5 text-[17px] font-normal leading-[1.75]"
            style={{ color: `hsl(${fg} / 0.62)` }}
          >
            Menthol activates cold-sensing nerves to create an instant cooling sensation that helps
            "distract" from pain and tension. It's ideal for tense jaws, sore necks, and tight shoulders,
            with a fresh scent and non-greasy feel.
          </p>
          <hr className="mt-12 border-0 border-t" style={{ borderColor: `hsl(${fg} / 0.08)` }} />
        </div>
      </section>

      {/* SECTION 4 — CTA */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[680px] px-6 pt-12 pb-16 text-center">
          <button
            type="button"
            className="inline-block rounded-[10px] text-[16px] font-extrabold text-white shadow-[0_6px_24px_rgba(180,130,0,0.22)] transition duration-150 hover:-translate-y-0.5 hover:brightness-[1.07]"
            style={{ backgroundColor: `hsl(${gold})`, padding: "18px 56px" }}
          >
            Add To Cart
          </button>
          <p
            className="mt-3 text-[13px] italic"
            style={{ color: `hsl(${fg} / 0.38)` }}
          >
            Contains 10% menthol — over the counter strength
          </p>
        </div>
      </section>

      {/* SECTION 5 — WHAT IS MENTHOL */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-[72px]">
          <h2 className="max-w-[600px] text-[34px] font-bold leading-[1.25]">
            What is menthol and why does it feel so cooling?
          </h2>
          <p
            className="mt-5 text-[18px] font-normal leading-[1.72]"
            style={{ color: `hsl(${fg} / 0.68)` }}
          >
            Menthol stimulates cold-sensing receptors in the skin, producing an icy-cool sensation that
            helps reduce the perception of pain and calms surface discomfort quickly.
          </p>
          <ul className="mt-7 space-y-3">
            {[
              "Delivers cooling relief in seconds",
              "Helps ease minor muscle and joint aches",
              "Fresh, clean scent without heavy ointment smell",
            ].map((item) => (
              <li
                key={item}
                className="border-l-2 py-1 pl-4 text-[16px] font-medium"
                style={{ borderColor: `hsl(${blue})` }}
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* SECTION 6 — RESEARCH */}
      <section className="w-full" style={{ backgroundColor: `hsl(${tint})` }}>
        <div className="mx-auto max-w-[760px] px-6 py-20">
          <h2 className="max-w-[520px] text-[34px] font-bold leading-[1.2]">
            What the research says about menthol for pain
          </h2>
          <p
            className="mt-4 text-[16px] font-normal"
            style={{ color: `hsl(${fg} / 0.58)` }}
          >
            Menthol has been studied as a topical analgesic for decades.
          </p>
          <div className="mt-12">
            {research.map((item, i) => (
              <div
                key={item.label}
                className="grid grid-cols-1 gap-4 py-8 md:grid-cols-[1fr_3fr] md:gap-8"
                style={{
                  borderTop: i === 0 ? `1px solid hsl(${fg} / 0.08)` : "none",
                  borderBottom: `1px solid hsl(${fg} / 0.08)`,
                }}
              >
                <div
                  className="text-[12px] font-extrabold uppercase tracking-[0.1em]"
                  style={{ color: `hsl(${blue})` }}
                >
                  {item.label}
                </div>
                <div>
                  <p
                    className="text-[16px] font-normal leading-[1.72]"
                    style={{ color: `hsl(${fg} / 0.7)` }}
                  >
                    {item.finding}
                  </p>
                  <p
                    className="mt-2.5 text-[12px] font-medium"
                    style={{ color: `hsl(${fg} / 0.4)` }}
                  >
                    {item.source}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — EXPERT QUOTE */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-[88px]">
          <span
            className="block text-[96px] font-extrabold leading-[0.8] -mb-4"
            style={{ color: `hsl(${blue} / 0.2)`, fontFamily: "Georgia, serif" }}
            aria-hidden="true"
          >
            “
          </span>
          <blockquote
            className="max-w-[680px] text-[20px] font-medium italic leading-[1.6] md:text-[28px]"
          >
            Menthol works by activating cold-sensitive TRPM8 receptors, which creates a cooling
            sensation that effectively competes with pain signals traveling to the brain. It's one of
            the most well-understood topical analgesic mechanisms we have.
          </blockquote>
          <div className="mt-6 flex flex-col items-start gap-3 md:flex-row md:items-center md:gap-3.5">
            <span
              className="block h-0.5 w-6"
              style={{ backgroundColor: `hsl(${blue})` }}
              aria-hidden="true"
            />
            <p className="text-[14px]">
              <span className="font-bold">Dr. Anne Louise Oaklander, MD PhD</span>
              <span style={{ color: `hsl(${fg} / 0.5)` }}>
                {" "}
                — Neurologist, Harvard Medical School
              </span>
            </p>
          </div>
          <p
            className="mt-3 text-[11px] italic"
            style={{ color: `hsl(${fg} / 0.35)` }}
          >
            Quote sourced from published clinical commentary on topical analgesics.
          </p>
        </div>
      </section>

      {/* SECTION 8 — HOW PEOPLE USE IT */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pb-20">
          <hr
            className="mb-14 border-0 border-t"
            style={{ borderColor: `hsl(${fg} / 0.08)` }}
          />
          <h2 className="text-[34px] font-bold leading-[1.2]">
            How people use menthol in TERRAFREEZE
          </h2>
          <div className="mt-7 grid grid-cols-1 gap-5 md:grid-cols-2">
            {useCases.map((u) => (
              <div
                key={u.label}
                className="pt-5"
                style={{ borderTop: `1px solid hsl(${fg} / 0.1)` }}
              >
                <p
                  className="text-[11px] font-extrabold uppercase tracking-[0.1em]"
                  style={{ color: `hsl(${blue})` }}
                >
                  {u.label}
                </p>
                <p className="mt-1.5 text-[15px] font-medium leading-[1.55]">
                  {u.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 9 — HOW TO APPLY */}
      <section className="w-full" style={{ backgroundColor: `hsl(${tint})` }}>
        <div className="mx-auto max-w-[760px] px-6 pt-20">
          <h2 className="text-[34px] font-bold leading-[1.2]">How to apply it safely</h2>
          <ol className="mt-8">
            {steps.map((s, i) => (
              <li key={s} className="mb-7 flex gap-6">
                <span
                  className="min-w-[28px] pt-[3px] text-[13px] font-extrabold"
                  style={{ color: `hsl(${blue})` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className="text-[16px] font-normal leading-[1.68]"
                  style={{ color: `hsl(${fg} / 0.7)` }}
                >
                  {s}
                </span>
              </li>
            ))}
          </ol>
        </div>

        {/* SECTION 10 — SAFETY (same tint bg) */}
        <div className="mx-auto max-w-[760px] px-6 pb-20">
          <hr
            className="mb-14 border-0 border-t"
            style={{ borderColor: `hsl(${fg} / 0.08)` }}
          />
          <h2 className="text-[34px] font-bold leading-[1.2]">Who should use caution</h2>
          <p
            className="mt-4 text-[16px] font-normal leading-[1.65]"
            style={{ color: `hsl(${fg} / 0.58)` }}
          >
            Menthol is well tolerated for most adults, but extra care is advised in these cases.
          </p>
          <ul className="mt-7">
            {cautions.map((c) => (
              <li key={c.label} className="mb-7 flex gap-6">
                <span
                  className="min-w-[140px] pt-[3px] text-[11px] font-extrabold uppercase tracking-[0.08em]"
                  style={{ color: `hsl(${fg} / 0.4)` }}
                >
                  {c.label}
                </span>
                <span
                  className="text-[15px] font-normal leading-[1.65]"
                  style={{ color: `hsl(${fg} / 0.65)` }}
                >
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
          <p
            className="mt-10 max-w-[600px] text-[12px] font-normal italic leading-[1.65]"
            style={{ color: `hsl(${fg} / 0.38)` }}
          >
            These statements have not been evaluated by the Food and Drug Administration. This product
            is not intended to diagnose, treat, cure, or prevent any disease.
          </p>
        </div>
      </section>

      {/* SECTION 11 — RELATED INGREDIENTS */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <p
            className="text-[12px] font-bold uppercase tracking-[0.12em]"
            style={{ color: `hsl(${fg} / 0.4)` }}
          >
            Related ingredients
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-x-3 gap-y-2">
            {["Arnica Montana", "Emu Oil", "Methyl Salicylate"].map((r, i) => (
              <span key={r} className="flex items-center gap-3">
                <a
                  href="#"
                  className="text-[14px] font-medium hover:underline"
                  style={{ color: `hsl(${blue})` }}
                >
                  {r}
                </a>
                {i < 2 && (
                  <span style={{ color: `hsl(${fg} / 0.2)` }} aria-hidden="true">
                    ·
                  </span>
                )}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — FAQS */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pb-20">
          <hr
            className="mb-14 border-0 border-t"
            style={{ borderColor: `hsl(${fg} / 0.08)` }}
          />
          <h2 className="text-[34px] font-bold leading-[1.2]">Menthol FAQs</h2>
          <div className="mt-8">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  style={{ borderBottom: `1px solid hsl(${fg} / 0.08)` }}
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between py-5 text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[16px] font-semibold">{item.q}</span>
                    <Chevron open={open} />
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
                  >
                    <div className="min-h-0">
                      <p
                        className="pb-5 text-[15px] font-normal leading-[1.75]"
                        style={{ color: `hsl(${fg} / 0.6)` }}
                      >
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 13 — PRODUCT CALLOUT */}
      <section className="w-full" style={{ backgroundColor: `hsl(${navy})` }}>
        <div className="mx-auto max-w-[680px] px-6 py-20">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-white/45">
            TERRAFREEZE
          </p>
          <h2 className="mt-2.5 text-[26px] font-bold leading-[1.2] text-white md:text-[36px]">
            Harness cooling menthol for fast comfort
          </h2>
          <p className="mt-4 text-[17px] font-normal leading-[1.7] text-white/65">
            TERRAFREEZE blends 10% menthol with soothing botanicals to deliver quick, targeted relief
            that absorbs fast and wears cleanly through the day.
          </p>
          <div className="mt-10 text-center">
            <p className="text-[14px] font-medium text-white/55">
              Ready for cooling relief?
            </p>
            <button
              type="button"
              className="mt-3 inline-block rounded-[10px] px-12 py-4 text-[16px] font-extrabold text-white shadow-[0_4px_20px_rgba(0,0,0,0.3)] transition duration-150 hover:-translate-y-0.5 hover:brightness-[1.08]"
              style={{ backgroundColor: `hsl(${gold})` }}
            >
              Add To Cart
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 14 — REFERENCES */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pt-12 pb-8">
          <p
            className="text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: `hsl(${fg} / 0.35)` }}
          >
            References
          </p>
          <ol
            className="mt-3.5 list-decimal space-y-1 pl-5 text-[12px] font-normal leading-[1.8]"
            style={{ color: `hsl(${fg} / 0.42)` }}
          >
            {references.map((r) => (
              <li key={r}>{r}</li>
            ))}
          </ol>
        </div>
      </section>

      {/* SECTION 15 — FOOTER */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pt-6 pb-16">
          <p
            className="mb-2.5 text-[11px] font-bold uppercase tracking-[0.12em]"
            style={{ color: `hsl(${fg} / 0.35)` }}
          >
            Other helpful links
          </p>
          <div className="flex flex-wrap items-center gap-3 text-[14px] font-medium">
            <a
              href="#"
              className="hover:underline"
              style={{ color: `hsl(${blue})` }}
            >
              Full Ingredient List
            </a>
            <span style={{ color: `hsl(${fg} / 0.2)` }} aria-hidden="true">·</span>
            <a
              href="#"
              className="hover:underline"
              style={{ color: `hsl(${blue})` }}
            >
              Full FAQ
            </a>
          </div>

          <div className="mt-12">
            <p
              className="text-[11px] font-semibold uppercase tracking-[0.12em]"
              style={{ color: `hsl(${fg} / 0.35)` }}
            >
              Medically reviewed by
            </p>
            <p className="mt-1 text-[14px] font-bold">Dr. Sarah Mitchell, MD</p>
            <p
              className="text-[13px] font-normal"
              style={{ color: `hsl(${fg} / 0.5)` }}
            >
              Board-certified pain medicine specialist
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}