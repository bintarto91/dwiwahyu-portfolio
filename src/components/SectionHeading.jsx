import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, description, centered = false, light = false }) {
  return (
    <Reveal className={`${centered ? "mx-auto text-center" : ""} max-w-3xl`}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className={`mt-5 font-display text-[clamp(2.6rem,6vw,5.4rem)] font-semibold leading-[.94] tracking-[-.05em] ${light ? "text-cream" : "text-ink"}`}>{title}</h2>
      {description && <p className={`mt-6 max-w-2xl text-base leading-7 sm:text-lg ${centered ? "mx-auto" : ""} ${light ? "text-cream/70" : "text-ink/70"}`}>{description}</p>}
    </Reveal>
  );
}
