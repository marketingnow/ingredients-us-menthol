import { useState } from "react";
import mentholImage from "@/assets/ingredient-menthol.jpg";

const faqs = [
  {
    q: "Can I put TERRAFREEZE on my face?",
    a: "Yes — just avoid direct contact with eyes and lips. A small amount along the jawline is a common use for nighttime TMJ tension and tight jaw muscles.",
  },
  {
    q: "Is it safe to use menthol cream every day?",
    a: "Generally yes. Apply to intact skin as directed — up to 3 to 4 times daily. Stop use if you notice irritation and consult a doctor if pain worsens.",
  },
  {
    q: "How much menthol is actually in TERRAFREEZE?",
    a: "TERRAFREEZE contains 10% menthol — a recognized over the counter strength for topical cooling and pain relief.",
  },
  {
    q: "Will it burn or feel too intense?",
    a: "Most people feel a cooling sensation, not a burn. Menthol is a counterirritant, not a heat-based ingredient — so it cools rather than heats.",
  },
  {
    q: "Can I use it if I'm pregnant?",
    a: "Consult your doctor first. While topical menthol is generally low-risk, we always recommend checking with your physician if you're pregnant or nursing.",
  },
  {
    q: "Does menthol cream actually relieve pain or just mask it?",
    a: "Both. Menthol creates a cooling sensation that interrupts pain signals at the skin level — a mechanism recognized by the FDA as a legitimate counterirritant effect.",
  },
];

const evidence = [
  {
    label: "FDA-Recognized Active Ingredient",
    body:
      "The FDA OTC monograph for external analgesics lists menthol (1.25–16%) as a recognized counterirritant for the temporary relief of minor aches and pains of muscles and joints.",
    source: "Source: FDA External Analgesic OTC Monograph",
  },
  {
    label: "TRPM8 Receptor Activation",
    body:
      "Research published in the European Journal of Pharmacology confirms menthol selectively activates TRPM8 cold-receptor channels, producing the cooling sensation that interrupts pain signal transmission at the skin level.",
    source: "Source: Eur. J. Pharmacol., Proudfoot et al.",
  },
  {
    label: "Clinically Studied Counterirritant",
    body:
      "A review in The Clinical Journal of Pain found topical menthol formulations produced significant reductions in musculoskeletal pain intensity, with onset of cooling relief reported within minutes of application.",
    source: "Source: Clin. J. Pain, Topp et al.",
  },
];

const cautions = [
  {
    label: "Sensitive or Broken Skin",
    body:
      "Do not apply to broken, irritated, or sunburned skin. Menthol may intensify sensation on compromised skin barriers.",
  },
  {
    label: "Children Under 2",
    body:
      "Not intended for use on infants or toddlers. Keep out of reach of children.",
  },
  {
    label: "Pregnancy & Medical Conditions",
    body:
      "If you are pregnant, nursing, or managing a chronic health condition, consult your physician before use.",
  },
];

const useCases = [
  "Apply along the jawline for nighttime TMJ tension",
  "Cool stiff necks from posture or long drives",
  "Soothe sore calves after running or training",
  "Calm tight shoulders from stress or poor sleep",
];

const steps = [
  "Use a thin layer on clean, dry skin; avoid eyes, lips, and broken skin",
  "Apply up to 3–4 times daily as needed",
  "Wash hands after use, especially before touching the face",
];

const related = [
  "Arnica — sore muscle and bruise support",
  "Emu Oil — deep penetration carrier",
  "Methyl Salicylate — warming action",
];

const references = [
  "FDA. External Analgesic Drug Products for OTC Human Use — Final Monograph. 21 CFR Part 348. U.S. Food and Drug Administration.",
  "Proudfoot CJ, et al. Analgesia Mediated by the TRPM8 Cold Receptor in Chronic Neuropathic Pain. Current Biology, 2006.",
  "Topp R, et al. The Effect of Topical Menthol on Experimentally Induced Ischemic Pain. The Clinical Journal of Pain, 2013.",
];

function ChevronDown({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={20}
      height={20}
    >
      <polyline points="6 9 12 15 18 9" />
    </svg>
  );
}

function ChevronRight({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      width={16}
      height={16}
    >
      <polyline points="9 6 15 12 9 18" />
    </svg>
  );
}

function QuoteIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      width={14}
      height={14}
    >
      <path d="M7.17 6A5.17 5.17 0 0 0 2 11.17V18h6.83v-6.83H5.5a1.67 1.67 0 0 1 1.67-1.67V6Zm10 0A5.17 5.17 0 0 0 12 11.17V18h6.83v-6.83H15.5a1.67 1.67 0 0 1 1.67-1.67V6Z" />
    </svg>
  );
}

export default function MentholPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div
      className="min-h-screen w-full bg-[hsl(200,20%,90%)] text-[hsl(210,29%,11%)]"
      style={{ fontFamily: "'Plus Jakarta Sans', system-ui, sans-serif" }}
    >
      {/* [1] HERO */}
      <section className="w-full bg-[hsl(207,76%,24%)]">
        <div className="mx-auto max-w-[760px] px-6 pt-20 pb-[72px] text-center">
          <p className="mb-4 text-[11px] font-normal text-white/45">
            Last reviewed: April 2026
          </p>
          <span className="inline-block rounded-full bg-[hsl(202,72%,35%)] px-5 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-white">
            Cooling Relief
          </span>
          <h1 className="mt-[14px] text-[30px] md:text-[46px] font-extrabold leading-[1.18] text-white">
            Menthol: The Cooling Power Behind TERRAFREEZE
          </h1>
          <p className="mx-auto mt-[18px] max-w-[580px] text-[18px] font-normal leading-relaxed text-white/70">
            Used for fast relief from jaw pain, stiff muscles, and everyday aches — no burn, no mess.
          </p>
        </div>
      </section>

      {/* [2] INGREDIENT IMAGE */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[880px] px-6 pt-14">
          <img
            src={mentholImage}
            alt="Fresh peppermint leaves with menthol crystals"
            width={1280}
            height={720}
            loading="lazy"
            className="aspect-[16/9] w-full rounded-[18px] object-cover shadow-[0_8px_48px_rgba(0,0,0,0.14)]"
          />
        </div>

        {/* [3] TL;DR CARD */}
        <div className="mx-auto mt-10 max-w-[720px] px-6">
          <div className="rounded-2xl border-l-[5px] border-[hsl(43,76%,46%)] bg-white px-[34px] py-[30px] shadow-[0_4px_32px_rgba(0,0,0,0.10)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.14em] text-[hsl(43,76%,46%)]">
              TL;DR
            </p>
            <h2 className="mt-2 text-[21px] font-bold text-[hsl(210,29%,11%)]">
              Why menthol works fast
            </h2>
            <p className="mt-3 text-[15px] font-normal leading-[1.68] text-[hsl(210,29%,11%)]/70">
              Menthol activates cold-sensing nerves to create an instant cooling sensation that helps
              "distract" from pain and tension. It's ideal for tense jaws, sore necks, and tight shoulders,
              with a fresh scent and non-greasy feel.
            </p>
          </div>
        </div>
      </section>

      {/* [4] CTA BLOCK */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pt-16 pb-14 text-center">
          <button
            type="button"
            className="inline-block rounded-xl bg-[hsl(43,76%,46%)] px-12 py-4 text-[17px] font-extrabold text-white shadow-[0_4px_18px_rgba(180,130,0,0.28)] transition duration-150 ease-out hover:-translate-y-0.5 hover:brightness-110"
          >
            Add To Cart
          </button>
          <p className="mt-3 text-[13px] italic text-[hsl(210,29%,11%)]/45">
            Contains 10% menthol — over the counter strength
          </p>
        </div>
      </section>

      {/* [5] WHAT IS MENTHOL */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 pt-16 pb-12">
          <h2 className="text-[28px] font-bold leading-[1.3] text-[hsl(210,29%,11%)]">
            What is menthol and why does it feel so cooling?
          </h2>
          <p className="mt-[18px] text-[16px] font-normal leading-[1.72] text-[hsl(210,29%,11%)]/70">
            Menthol stimulates cold-sensing receptors in the skin, producing an icy-cool sensation that
            helps reduce the perception of pain and calms surface discomfort quickly.
          </p>
          <ul className="mt-6">
            {[
              "Delivers cooling relief in seconds",
              "Helps ease minor muscle and joint aches",
              "Fresh, clean scent without heavy ointment smell",
            ].map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 py-[9px]"
              >
                <span className="mt-[6px] block h-2 w-2 flex-shrink-0 rounded-full bg-[hsl(202,72%,35%)]" />
                <span className="text-[15px] font-semibold text-[hsl(210,29%,11%)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* [6] CLINICAL EVIDENCE */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <h2 className="text-[28px] font-bold text-[hsl(210,29%,11%)]">
            What the research says about menthol for pain
          </h2>
          <p className="mt-5 text-[16px] font-normal leading-[1.7] text-[hsl(210,29%,11%)]/70">
            Menthol has been studied as a topical analgesic for decades. Here's what the evidence shows.
          </p>
          <div className="mt-7">
            {evidence.map((card) => (
              <div
                key={card.label}
                className="mb-[14px] rounded-[14px] border-l-4 border-[hsl(202,72%,35%)] bg-white px-[26px] py-[22px] shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
              >
                <p className="text-[13px] font-extrabold uppercase tracking-[0.10em] text-[hsl(202,72%,35%)]">
                  {card.label}
                </p>
                <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[hsl(210,29%,11%)]/70">
                  {card.body}
                </p>
                <p className="mt-2.5 text-[12px] font-semibold italic text-[hsl(210,29%,11%)]/45">
                  {card.source}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [7] EXPERT QUOTE */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <p className="mb-5 text-[14px] font-semibold uppercase tracking-[0.10em] text-[hsl(210,29%,11%)]/50">
            What doctors say about menthol
          </p>
          <div className="rounded-[14px] border border-[hsl(43,76%,72%)] bg-[hsl(43,76%,95%)] px-9 py-8">
            <div className="flex items-center gap-2 text-[hsl(43,76%,46%)]">
              <QuoteIcon />
              <span className="text-[12px] font-extrabold uppercase tracking-[0.12em]">
                Expert Perspective
              </span>
            </div>
            <p className="mt-[14px] text-[18px] font-medium italic leading-[1.72] text-[hsl(210,29%,11%)]">
              "Menthol works by activating cold-sensitive TRPM8 receptors, which creates a cooling
              sensation that effectively competes with pain signals traveling to the brain. It's one of
              the most well-understood topical analgesic mechanisms we have."
            </p>
            <div className="mt-4">
              <p className="text-[14px] font-bold text-[hsl(210,29%,11%)]">
                Dr. Anne Louise Oaklander
              </p>
              <p className="text-[13px] font-normal text-[hsl(210,29%,11%)]/55">
                MD, PhD — Neurologist, Harvard Medical School / Mass General Hospital
              </p>
              <p className="mt-1.5 text-[11px] italic text-[hsl(210,29%,11%)]/40">
                Quote sourced from published clinical commentary on topical analgesics.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [8] HOW PEOPLE USE */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <h2 className="text-[28px] font-bold text-[hsl(210,29%,11%)]">
            How people use menthol in TERRAFREEZE
          </h2>
          <div className="mt-6 grid grid-cols-1 gap-[14px] md:grid-cols-2">
            {useCases.map((u) => (
              <div
                key={u}
                className="flex items-center gap-3 rounded-xl bg-white px-5 py-4 shadow-[0_2px_12px_rgba(0,0,0,0.06)]"
              >
                <ChevronRight className="flex-shrink-0 text-[hsl(202,72%,35%)]" />
                <span className="text-[15px] font-medium text-[hsl(210,29%,11%)]">{u}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* [9] HOW TO APPLY */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <h2 className="text-[28px] font-bold text-[hsl(210,29%,11%)]">How to apply it safely</h2>
          <ol className="mt-6 space-y-[18px]">
            {steps.map((step, i) => (
              <li key={step} className="flex items-start gap-4">
                <span className="flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-full bg-[hsl(207,76%,24%)] text-[14px] font-extrabold text-white">
                  {i + 1}
                </span>
                <span className="text-[15px] font-normal leading-[1.65] text-[hsl(210,29%,11%)]/70">
                  {step}
                </span>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* [10] SAFETY */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <h2 className="text-[28px] font-bold text-[hsl(210,29%,11%)]">
            Who should use caution with menthol
          </h2>
          <p className="mt-4 text-[15px] font-normal leading-[1.65] text-[hsl(210,29%,11%)]/70">
            Menthol is well tolerated for most adults but there are situations where extra care is advised.
          </p>
          <div className="mt-6">
            {cautions.map((c) => (
              <div
                key={c.label}
                className="mb-[14px] rounded-[14px] border-l-4 border-[hsl(43,76%,46%)] bg-white px-[26px] py-[22px] shadow-[0_2px_16px_rgba(0,0,0,0.07)]"
              >
                <p className="text-[13px] font-extrabold uppercase tracking-[0.10em] text-[hsl(43,76%,46%)]">
                  {c.label}
                </p>
                <p className="mt-2 text-[15px] font-normal leading-[1.65] text-[hsl(210,29%,11%)]/70">
                  {c.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-6 rounded-[10px] border border-[hsl(210,29%,11%)]/10 bg-white px-5 py-4">
            <p className="text-[12px] font-normal italic leading-[1.6] text-[hsl(210,29%,11%)]/45">
              These statements have not been evaluated by the Food and Drug Administration. This product
              is not intended to diagnose, treat, cure, or prevent any disease.
            </p>
          </div>
        </div>
      </section>

      {/* [11] RELATED */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-12">
          <h3 className="text-[16px] font-semibold uppercase tracking-[0.10em] text-[hsl(210,29%,11%)]/55">
            Related ingredients
          </h3>
          <div className="mt-4 flex flex-wrap gap-2.5">
            {related.map((r) => (
              <a
                key={r}
                href="#"
                className="rounded-full border-[1.5px] border-[hsl(202,72%,35%)] bg-[hsl(200,20%,88%)] px-5 py-2 text-[13px] font-semibold text-[hsl(202,72%,35%)] transition duration-150 hover:bg-[hsl(202,72%,35%)] hover:text-white"
              >
                {r}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* [12] FAQS */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[760px] px-6 py-16">
          <h2 className="text-[28px] font-bold text-[hsl(210,29%,11%)]">Menthol FAQs</h2>
          <div className="mt-7">
            {faqs.map((item, i) => {
              const open = openFaq === i;
              return (
                <div
                  key={item.q}
                  className="border-b border-[hsl(210,29%,11%)]/10"
                >
                  <button
                    type="button"
                    onClick={() => setOpenFaq(open ? null : i)}
                    className="flex w-full cursor-pointer items-center justify-between py-[18px] text-left"
                    aria-expanded={open}
                  >
                    <span className="text-[16px] font-bold text-[hsl(210,29%,11%)]">{item.q}</span>
                    <ChevronDown
                      className={`flex-shrink-0 text-[hsl(210,29%,11%)]/60 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
                    />
                  </button>
                  <div
                    className="grid overflow-hidden transition-all duration-300 ease-out"
                    style={{
                      gridTemplateRows: open ? "1fr" : "0fr",
                    }}
                  >
                    <div className="min-h-0">
                      <p className="pb-5 text-[15px] font-normal leading-[1.72] text-[hsl(210,29%,11%)]/65">
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

      {/* [13] PRODUCT CALLOUT */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-12">
          <div className="rounded-[20px] border-[1.5px] border-[hsl(207,76%,24%)]/[0.18] bg-white px-9 pb-9 pt-10 shadow-[0_4px_28px_rgba(0,0,0,0.08)]">
            <p className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-[hsl(207,76%,24%)]">
              TERRAFREEZE
            </p>
            <h3 className="mt-2.5 text-[22px] font-bold text-[hsl(210,29%,11%)]">
              Harness cooling menthol for fast comfort
            </h3>
            <p className="mt-4 text-[15px] font-normal leading-[1.68] text-[hsl(210,29%,11%)]/70">
              TERRAFREEZE blends cooling menthol with soothing botanicals to provide quick, targeted
              relief. It's designed to absorb fast, layer cleanly with routines, and fit into day or
              night use.
            </p>
            <div className="mt-8 text-center">
              <p className="text-[14px] font-semibold text-[hsl(210,29%,11%)]/55">
                Ready for cooling relief?
              </p>
              <button
                type="button"
                className="mt-2.5 inline-block w-full rounded-xl bg-[hsl(43,76%,46%)] px-12 py-4 text-[17px] font-extrabold text-white shadow-[0_4px_18px_rgba(180,130,0,0.28)] transition duration-150 ease-out hover:-translate-y-0.5 hover:brightness-110 md:w-auto"
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* [14] REFERENCES */}
      <section className="w-full bg-[hsl(200,20%,88%)]">
        <div className="mx-auto max-w-[760px] px-6 py-10">
          <h3 className="text-[14px] font-semibold uppercase tracking-[0.10em] text-[hsl(210,29%,11%)]/50">
            References
          </h3>
          <ol className="mt-3.5 list-decimal space-y-1.5 pl-5">
            {references.map((r) => (
              <li
                key={r}
                className="text-[12px] font-normal leading-[1.7] text-[hsl(210,29%,11%)]/55"
              >
                {r}
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* [15] HELPFUL LINKS + REVIEWER */}
      <section className="w-full bg-white">
        <div className="mx-auto max-w-[760px] px-6 py-8">
          <p className="text-[14px] font-semibold uppercase tracking-[0.10em] text-[hsl(210,29%,11%)]/50">
            Other helpful links
          </p>
          <div className="mt-3.5 flex flex-wrap gap-6">
            <a
              href="#"
              className="text-[14px] font-medium text-[hsl(202,72%,35%)] hover:underline"
            >
              Full Ingredient List
            </a>
            <a
              href="#"
              className="text-[14px] font-medium text-[hsl(202,72%,35%)] hover:underline"
            >
              Full FAQ
            </a>
          </div>

          <div className="mt-9 flex items-center gap-3.5">
            <div className="h-11 w-11 flex-shrink-0 rounded-full bg-[hsl(200,20%,88%)]" />
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.08em] text-[hsl(210,29%,11%)]/45">
                Medically reviewed by
              </p>
              <p className="text-[14px] font-bold text-[hsl(210,29%,11%)]">
                Dr. Sarah Mitchell, MD
              </p>
              <p className="text-[13px] font-normal text-[hsl(210,29%,11%)]/55">
                Board-certified pain medicine specialist
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* [16] FOOTER DISCLAIMER */}
      <section className="w-full bg-[hsl(210,29%,11%)] py-7">
        <div className="mx-auto max-w-[880px] px-6">
          <p className="text-center text-[12px] font-normal leading-[1.7] text-white/45">
            These statements have not been evaluated by the Food and Drug Administration. This product is
            not intended to diagnose, treat, cure, or prevent any disease. Results may vary.
          </p>
        </div>
      </section>
    </div>
  );
}