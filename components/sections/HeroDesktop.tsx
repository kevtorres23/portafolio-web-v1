"use client";

import Image from "next/image";

import AccentText from "@/components/ui/AccentText";
import Icon from "@/components/ui/Icon";
import PillButton from "@/components/ui/PillButton";
import { heroAnnotations } from "@/lib/data/site";
import { useScaleToFit } from "@/lib/hooks/useScaleToFit";

const CANVAS_W = 1440;
const CANVAS_H = 728;

/**
 * Flechas curvas manuscritas (nodos 1:56, 1:60, 1:61).
 *
 * `x`/`y` son el centro de la flecha ya rotada; `w`/`h`, el tamaño intrínseco
 * del SVG exportado, que se rota sobre su propio centro.
 *
 * Ojo: los `x`/`y` que devuelve `get_metadata` para estos vectores NO
 * corresponden a su posición renderizada. Estos centros salen de los
 * porcentajes de posición del CSS de `get_design_context`, p. ej. para 1:56
 * `left: 56.67%` y `right: 34.32%` sobre 1440px → centro x = 880.92.
 */
const arrows = [
  { src: "/icons/arrow-1.svg", x: 880.92, y: 339.92, w: 94.72, h: 95.78, rotate: -137.53, flip: false },
  { src: "/icons/arrow-2.svg", x: 519.48, y: 386.46, w: 73.07, h: 73.68, rotate: 46.32, flip: false },
  { src: "/icons/arrow-3.svg", x: 456.98, y: 545.98, w: 93.42, h: 94.44, rotate: 133.3, flip: true },
];

/** Posición y tipografía exactas de cada anotación en el lienzo. */
const annotationLayout: Record<
  string,
  { left: number; top: number; width: number; script: number; gap: number; body: number; bodyWidth: number }
> = {
  diseno: { left: 291, top: 302, width: 174, script: 36.039, gap: 18.583, body: 20.272, bodyWidth: 157.107 },
  desarrollo: { left: 195, top: 534, width: 174, script: 36.039, gap: 18.583, body: 20.272, bodyWidth: 157.107 },
  experiencias: { left: 978, top: 334, width: 249, script: 34.728, gap: 17.906, body: 19.534, bodyWidth: 249 },
};

/**
 * Variante de escritorio del hero (nodo 1:54).
 *
 * Reproduce el lienzo de 1440×728 con posicionamiento absoluto y lo escala
 * para que quepa en el ancho disponible. Solo se muestra desde 1024px, así
 * que el factor de escala nunca baja de ~0.71 y todo sigue siendo legible.
 */
export default function HeroDesktop() {
  const { ref, scale } = useScaleToFit(CANVAS_W);

  return (
    <div
      ref={ref}
      /* `aspect-ratio` reserva la altura correcta desde el primer pintado,
         sin esperar a que el observador mida el contenedor. */
      className="relative w-full overflow-hidden bg-white"
      style={{ aspectRatio: `${CANVAS_W} / ${CANVAS_H}`, maxHeight: CANVAS_H }}
    >
      <div
        className="absolute left-1/2 top-0"
        style={{
          width: CANVAS_W,
          height: CANVAS_H,
          transform: `translateX(-50%) scale(${scale})`,
          transformOrigin: "top center",
        }}
      >
        {/* Mancha azul del fondo (nodo 15:277). El SVG ya viene con la rotación
            del diseño aplicada, así que aquí solo se posiciona. */}
        <span
          aria-hidden
          className="absolute block"
          style={{ left: 473.74, top: 250.4, width: 580.9, height: 619.38 }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/icons/hero-blob.svg" alt="" className="block h-full w-full" />
        </span>

        {/* Retrato (nodo 1:55). El PNG ya viene recortado sin fondo, así que se
            coloca entero sobre la mancha: sin caja de recorte ni sombra. Solo
            lo recorta por abajo el `overflow-hidden` del lienzo, igual que en
            el diseño. */}
        <Image
          src="/images/kevin.png"
          alt="Retrato de Kevin Torres"
          priority
          unoptimized
          width={1909}
          height={3691}
          className="absolute max-w-none"
          style={{ left: 556.55, top: 198.71, width: 472.14, height: 912.85 }}
        />

        {/* Flechas curvas */}
        {arrows.map((arrow) => (
          <span
            key={arrow.src}
            aria-hidden
            className="absolute block"
            style={{
              left: arrow.x,
              top: arrow.y,
              width: arrow.w,
              height: arrow.h,
              transform: `translate(-50%, -50%) rotate(${arrow.rotate}deg)${arrow.flip ? " scaleX(-1)" : ""}`,
            }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={arrow.src} alt="" className="block h-full w-full" />
          </span>
        ))}

        {/* Titular */}
        <div
          className="absolute flex flex-col items-center text-center"
          style={{ left: 299, top: 51, width: 842 }}
        >
          <p className="text-[46.137px] tracking-[-2.3068px] text-body">
            ¡Hola! Mi nombre es Kevin.
          </p>
          <p className="text-[57.671px] font-bold tracking-[-2.8836px] text-ink">
            <span className="text-brand">Diseñador</span> y{" "}
            <span className="text-brand-green">Desarrollador</span> Web
          </p>
        </div>

        {/* Anotaciones manuscritas */}
        {heroAnnotations.map((annotation) => {
          const layout = annotationLayout[annotation.id];
          return (
            <div
              key={annotation.id}
              className="absolute flex flex-col items-center justify-center"
              style={{ left: layout.left, top: layout.top, width: layout.width, gap: layout.gap }}
            >
              <p
                /* `leading-none`: en Figma estos textos usan `text-box-trim`,
                   que recorta la caja a la altura de mayúsculas. Sin recorte,
                   una interlínea normal alargaría el bloque hasta solaparse
                   con el botón "Mi trabajo".
                   `whitespace-nowrap`: cada línea manuscrita ocupa un solo
                   renglón, aunque el texto sea algo más ancho que su caja. */
                className="w-full whitespace-nowrap font-hand leading-none text-muted"
                style={{ fontSize: layout.script, letterSpacing: layout.script * 0.05 }}
              >
                {annotation.script}
              </p>
              <p
                className="text-center font-bold leading-[1.1] text-black"
                style={{ fontSize: layout.body, width: layout.bodyWidth }}
              >
                <AccentText parts={annotation.parts} />
              </p>
            </div>
          );
        })}

        {/* Llamada a la acción */}
        <div className="absolute" style={{ left: 993, top: 449 }}>
          <PillButton href="#trabajo" variant="brand" size="hero">
            Mi trabajo
            <Icon src="/icons/arrow-right.svg" size={36} />
          </PillButton>
        </div>
      </div>
    </div>
  );
}
