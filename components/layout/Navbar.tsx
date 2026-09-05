import Link from "next/link";

import Icon from "@/components/ui/Icon";
import PillButton from "@/components/ui/PillButton";
import { site } from "@/lib/data/site";

const social = [
  { label: "LinkedIn", href: site.links.linkedin, icon: "/icons/linkedin.svg" },
  { label: "GitHub", href: site.links.github, icon: "/icons/github.svg" },
];

/** Barra superior (nodo 1:264). */
export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white">
      {/* Con `justify-between` la lista central quedaba descentrada, porque el
          nombre y el botón del CV no miden lo mismo. Envolviendo cada lateral
          en un `flex-1` (base 0) ambos reciben el mismo ancho y el centro cae
          justo en el eje de la barra. Si falta espacio, el `min-width: auto`
          de cada lateral evita que su contenido se comprima. */}
      <nav className="flex items-center gap-4 px-5 py-3.5 lg:px-[70px]">
        <div className="flex flex-1 justify-start">
          <Link
            href="/"
            className="whitespace-nowrap text-[18px] font-medium tracking-[-1.2px] text-ink lg:text-lg"
          >
            {site.name}
          </Link>
        </div>

        <ul className="flex shrink-0 items-center gap-5 sm:gap-10">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[7px] text-base text-muted transition-colors hover:text-ink"
              >
                <Icon src={item.icon} size={24} />
                {/* En móvil solo se muestra el icono para dejar sitio al CTA. */}
                <span className="hidden lg:inline">{item.label}</span>
                <span className="sr-only lg:hidden">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="flex flex-1 justify-end">
          <PillButton href={site.cv} variant="deep" size="nav">
            <span className="hidden sm:inline">Mi CV en PDF</span>
            <span className="sm:hidden">Mi CV</span>
          </PillButton>
        </div>
      </nav>
    </header>
  );
}
