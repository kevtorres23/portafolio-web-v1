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
      <nav className="flex items-center justify-between gap-4 px-5 py-3.5 lg:h-[94px] lg:px-[70px] lg:py-0">
        <Link
          href="/"
          className="text-[18px] font-medium tracking-[-1.2px] text-ink lg:text-[24px]"
        >
          {site.name}
        </Link>

        <ul className="flex items-center gap-5 sm:gap-10">
          {social.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-[7px] text-[18px] text-muted transition-colors hover:text-ink"
              >
                <Icon src={item.icon} size={24} />
                {/* En móvil solo se muestra el icono para dejar sitio al CTA. */}
                <span className="hidden lg:inline">{item.label}</span>
                <span className="sr-only lg:hidden">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <PillButton href={site.cv} variant="deep" size="nav">
          <span className="hidden sm:inline">Mi CV en PDF</span>
          <span className="sm:hidden">Mi CV</span>
        </PillButton>
      </nav>
    </header>
  );
}
