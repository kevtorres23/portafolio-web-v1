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

  return (
    <span
      className={`block shrink-0 overflow-hidden ${className}`}
      style={{ width: w, height: h }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        width={w}
        height={h}
        aria-hidden={alt === "" ? true : undefined}
        className="block h-full w-full"
      />
    </span>
  );
}
