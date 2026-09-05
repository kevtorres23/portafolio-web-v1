import Icon from "@/components/ui/Icon";
import PillButton from "@/components/ui/PillButton";
import { site } from "@/lib/data/site";

const channels = [
  { label: "Email me", href: `mailto:${site.email}`, icon: "/icons/mail.svg" },
  { label: "Let's chat in Discord", href: site.links.discord, icon: "/icons/discord.svg" },
  { label: "My LinkedIn", href: site.links.linkedin, icon: "/icons/linkedin-pill.svg" },
];

/** Sección verde "¡Tengamos una charla!" (nodo 1:99). */
export default function Contact() {
  return (
    <section className="overflow-hidden bg-brand-green-cta px-5 py-24 lg:px-[100px] lg:py-[200px]">
      <div className="flex flex-col items-center gap-[30px]">
        <div className="flex flex-col items-center gap-2.5 text-center text-white lg:gap-2.5">
          <h2 className="text-[36px] font-semibold leading-[1.15] tracking-[-1.6px] lg:text-[64px] lg:tracking-[-3.2px]">
            ¡Tengamos una charla!
          </h2>
          <p className="max-w-[700px] text-[18px] tracking-[-0.72px] lg:text-[24px]">
            Estoy abierto a colaborar en cualquier proyecto de software que involucre
            diseño o desarrollo web.
          </p>
        </div>

        <ul className="flex w-full max-w-sm flex-col items-stretch gap-3 sm:w-auto sm:max-w-none sm:flex-row sm:items-center sm:justify-center sm:gap-[25px]">
          {channels.map((channel) => (
            <li key={channel.label} className="flex">
              <PillButton
                href={channel.href}
                variant="white"
                size="pill"
                className="w-full sm:w-auto"
              >
                <Icon src={channel.icon} size={20} />
                {channel.label}
              </PillButton>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
