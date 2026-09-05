import Image from "next/image";

type IconProps = {
  src: string;
  /** Vacío por defecto: los iconos del diseño son decorativos. */
  alt?: string;
  /** Atajo para iconos cuadrados. */
  size?: number;
  width?: number;
  height?: number;
  className?: string;
};

/**
 * Envoltorio de tamaño fijo para los SVG/PNG exportados de Figma.
 *
 * Siempre fija ancho **y** alto explícitos: sin ambos, un SVG sin `viewBox`
 * intrínseco se expande a su tamaño natural y rompe el layout.
 *
 * Los SVG se sirven tal cual (son vectoriales y el optimizador de Next no los
 * reescala). Los PNG sí pasan por `next/image`: los logos exportados miden
 * miles de píxeles y reducirlos a 24px con el remuestreo del navegador
 * produce aliasing; Next genera versiones a 1x y 2x con mucha mejor calidad.
 */
export default function Icon({
  src,
  alt = "",
  size,
  width,
  height,
  className = "",
}: IconProps) {
  const w = width ?? size ?? 24;
  const h = height ?? size ?? 24;
  const isVector = src.endsWith(".svg");

  return (
    <span
      className={`block shrink-0 overflow-hidden ${className}`}
      style={{ width: w, height: h }}
    >
      {isVector ? (
        /* eslint-disable-next-line @next/next/no-img-element */
        <img
          src={src}
          alt={alt}
          width={w}
          height={h}
          aria-hidden={alt === "" ? true : undefined}
          className="block h-full w-full"
        />
      ) : (
        <Image
          src={src}
          alt={alt}
          width={w}
          height={h}
          quality={95}
          aria-hidden={alt === "" ? true : undefined}
          className="block h-full w-full"
        />
      )}
    </span>
  );
}
