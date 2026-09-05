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
        <Icon src="/icons/arrow-right.svg" size={24} className="rotate-90" />
      </PillButton>

      {/* Retrato sobre la mancha azul. `--pw` es el ancho del retrato: todo lo
          demás (alto visible y geometría de la mancha) se deriva de él con los
          mismos factores que en el lienzo de escritorio, así que basta cambiar
          esa variable para reescalar el bloque. */}
      <div className="relative h-[calc(var(--pw)*1.375)] w-[var(--pw)] shrink-0 [--pw:240px] sm:[--pw:300px]">
        <span
          aria-hidden
          className="absolute left-[calc(var(--pw)*-0.17548)] top-[calc(var(--pw)*0.10948)] block h-[calc(var(--pw)*1.3119)] w-[calc(var(--pw)*1.2303)]"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/hero-blob.svg"
            alt=""
            className="block h-full w-full"
          />
        </span>

        {/* El retrato completo es más alto que la caja; se recorta por abajo,
            como en escritorio. */}
        <span className="absolute inset-0 block overflow-hidden">
          <Image
            src="/images/kevin.png"
            alt="Retrato de Kevin Torres"
            priority
            unoptimized
            width={1909}
            height={3691}
            className="absolute left-0 top-0 h-auto w-full max-w-none"
          />
        </span>
      </div>
    </div>
  );
}
