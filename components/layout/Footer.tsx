import Link from "next/link";

import Icon from "@/components/ui/Icon";
import { site } from "@/lib/data/site";

const social = [
  { label: "LinkedIn", href: site.links.linkedin, icon: "/icons/linkedin-lucide.svg" },
  { label: "GitHub", href: site.links.github, icon: "/icons/github-lucide.svg" },
];

/** Pie de página (nodo 1:116). */
export default function Footer() {
  return (
    <footer className="border-t border-line bg-surface px-5 py-10 lg:px-[100px] lg:py-[60px]">
      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-start lg:gap-4">
        <div className="flex flex-col justify-center gap-2.5">
          <p className="text-[22px] font-semibold tracking-[-0.84px] text-strong lg:text-[28px]">
            {site.name}
          </p>
          <a
            href={`mailto:${site.email}`}
            className="text-[16px] text-muted transition-colors hover:text-strong lg:text-[18px]"
          >
            {site.email}
          </a>
        </div>

        <div className="flex flex-col items-start gap-5 lg:items-end">
          <nav className="flex items-center gap-8 text-[16px] font-medium tracking-[-0.54px] text-strong lg:gap-10 lg:text-[18px]">
            <Link href="#trabajo" className="transition-colors hover:text-brand">
              Mis proyectos
            </Link>
            <Link href={site.cv} className="transition-colors hover:text-brand">
              Mi CV
            </Link>
          </nav>

          <ul className="flex items-center gap-2.5">
            {social.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block opacity-100 transition-opacity hover:opacity-60"
                >
                  <Icon src={item.icon} size={24} alt={item.label} />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
