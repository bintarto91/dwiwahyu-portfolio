import { useReveal } from "../hooks/useReveal";

/**
 * Pembungkus animasi: elemen akan muncul (fade + naik) saat di-scroll.
 * delay dalam milidetik.
 */
export default function Reveal({ children, delay = 0, className = "" }) {
  const [ref, visible] = useReveal();

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transform-gpu transition-all duration-700 ease-out motion-reduce:transition-none ${
        visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      } ${className}`}
    >
      {children}
    </div>
  );
}
