import Image from "next/image";

import AccentText from "@/components/ui/AccentText";
import Icon from "@/components/ui/Icon";
import PillButton from "@/components/ui/PillButton";
import { heroAnnotations } from "@/lib/data/site";

/**
 * Variante móvil y tablet del hero (< 1024px).
 *
 * No escala el lienzo de escritorio: usa su propio layout en flujo normal con
 * una jerarquía de tamaños pensada para pantallas angostas. Las flechas
 * curvas se omiten porque su trazado solo tiene sentido uniendo puntos del
 * lienzo absoluto; en vertical apuntarían a la nada.
 */
export default function HeroMobile() {
  return (
    <div className="flex flex-col items-center gap-8 bg-white px-5 py-12 text-center sm:gap-10 sm:py-16">
      <div className="flex flex-col gap-1">
        <p className="text-[22px] tracking-[-0.05em] text-body sm:text-[28px]">
          ¡Hola! Mi nombre es Kevin.
        </p>
        <p className="text-[30px] font-bold leading-[1.15] tracking-[-0.05em] text-ink sm:text-[40px]">
          <span className="text-brand">Diseñador</span> y{" "}
          <span className="text-brand-green">Desarrollador</span> Web
        </p>
      </div>

      <div
        className="relative w-[220px] shrink-0 overflow-hidden sm:w-[280px]"
        style={{ aspectRatio: "354 / 515", boxShadow: "var(--shadow-portrait-sm)" }}
      >
        <Image
          src="/images/kevin.png"
          alt="Retrato de Kevin Torres"
          priority
          width={738}
          height={830}
          className="absolute max-w-none"
          style={{ width: "208.49%", height: "161.23%", left: "-58.51%", top: "-7.65%" }}
        />
      </div>

      <ul className="flex w-full max-w-md flex-col gap-7 sm:grid sm:max-w-none sm:grid-cols-3 sm:gap-6">
        {heroAnnotations.map((annotation) => (
          <li key={annotation.id} className="flex flex-col items-center gap-2">
            <p className="font-hand text-[24px] tracking-[0.05em] text-muted sm:text-[28px]">
              {annotation.script}
            </p>
            <p className="text-[16px] font-bold text-black sm:text-[18px]">
              <AccentText parts={annotation.parts} />
            </p>
          </li>
        ))}
      </ul>

      <PillButton href="#trabajo" variant="brand" size="hero">
        Mi trabajo
        <Icon src="/icons/arrow-right.svg" size={24} />
      </PillButton>
    </div>
  );
}
