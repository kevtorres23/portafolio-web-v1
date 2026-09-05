import type { ReactNode } from "react";

/**
 * `green`/`blue`: chips tintados sobre el título del proyecto.
 * `neutral`: chips grises del Tech Stack.
 */
type Tone = "green" | "blue" | "neutral";

const tones: Record<Tone, string> = {
  green: "bg-brand-green/10 text-brand-green",
  blue: "bg-brand/10 text-brand",
  neutral: "border border-line bg-surface-alt text-muted",
};

/**
 * Chip redondeado de las pantallas de proyecto (nodos 1:141, 1:142, 1:150).
 * En el diseño usa Figtree Medium 15px; aquí Poppins Medium, la única fuente
 * de interfaz que carga el proyecto.
 */
export default function Tag({
  tone = "neutral",
  children,
}: {
  tone?: Tone;
  children: ReactNode;
}) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full px-[15px] py-2 text-[14px] font-medium leading-normal lg:text-[15px] ${tones[tone]}`}
    >
      {children}
    </span>
  );
}
