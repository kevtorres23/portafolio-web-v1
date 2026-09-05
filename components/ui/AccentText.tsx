import type { HeroAnnotation } from "@/lib/data/site";

const accents = {
  blue: "text-brand-deep/80",
  green: "text-brand-green",
} as const;

/**
 * Renderiza un texto con palabras sueltas resaltadas en color.
 * Lo comparten las variantes de escritorio y móvil del hero para no duplicar
 * el contenido de las anotaciones.
 */
export default function AccentText({ parts }: Pick<HeroAnnotation, "parts">) {
  return (
    <>
      {parts.map((part, index) => (
        <span key={index} className={part.accent ? accents[part.accent] : undefined}>
          {part.text}
        </span>
      ))}
    </>
  );
}
