import Link from "next/link";
import type { ReactNode } from "react";

/** Color de fondo. */
type Variant = "brand" | "deep" | "white";

/**
 * Tamaños concretos del diseño. Cada uno corresponde a un lugar de la
 * Portada, con sus valores exactos de Figma bajo `lg:`.
 */
type Size = "nav" | "hero" | "pill" | "icon" | "back";

const variants: Record<Variant, string> = {
  brand: "bg-brand text-white hover:bg-brand-deep",
  deep: "bg-brand-deep text-white hover:bg-brand",
  white: "bg-white text-strong hover:bg-surface",
};

const sizes: Record<Size, string> = {
  // Navbar: "Mi CV en PDF". `leading-none` reproduce el recorte de caja de
  // texto de Figma, sin el cual la barra crecería de 94px a 108px.
  nav: "px-5 py-2.5 text-[15px] font-medium tracking-[-0.9px] lg:px-[30px] lg:py-[17px] lg:text-[16px] lg:leading-none",
  // Hero: "Mi trabajo"
  hero: "gap-2.5 px-6 py-3 text-[18px] font-medium tracking-[-1.2px] lg:px-[30px] lg:py-[15px] lg:text-[24px]",
  // Contacto: "Escríbeme", "Hablemos en Discord", "Mi LinkedIn"
  pill: "gap-[7px] px-5 py-3 text-[16px] font-medium",
  // Tarjeta de proyecto: solo la flecha
  icon: "p-2.5 lg:p-3",
  // Detalle de proyecto: "Volver" (nodo 1:136, 45px de alto)
  back: "gap-2.5 px-[25px] py-3 text-[14px] font-semibold tracking-[-0.42px]",
};

type PillButtonProps = {
  href: string;
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  /** Etiqueta accesible cuando el botón solo contiene un icono. */
  label?: string;
  className?: string;
};

/**
 * Botón/enlace redondeado. Cubre los cinco usos de la Portada (el CTA del
 * navbar, el del hero, las tres píldoras de contacto y el botón circular de
 * las tarjetas de proyecto) más el botón "Volver" del detalle de proyecto.
 *
 * Renderiza `<Link>` para rutas internas y `<a>` para enlaces externos,
 * `mailto:` y anclas.
 */
export default function PillButton({
  href,
  children,
  variant = "brand",
  size = "pill",
  label,
  className = "",
}: PillButtonProps) {
  const classes = [
    "inline-flex items-center justify-center rounded-full",
    "transition-colors duration-200",
    "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-deep",
    variants[variant],
    sizes[size],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  const isInternal = href.startsWith("/") && !href.startsWith("//");

  if (isInternal) {
    return (
      <Link href={href} className={classes} aria-label={label}>
        {children}
      </Link>
    );
  }

  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      className={classes}
      aria-label={label}
      {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}
