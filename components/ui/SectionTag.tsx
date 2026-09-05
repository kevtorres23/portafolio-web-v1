import type { Icon } from "@phosphor-icons/react";

export default function SectionTag({ text, icon: IconComponent }: { text: string; icon?: Icon }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/15">
      {IconComponent && <IconComponent size={20} strokeWidth={3} className="text-white" />}
      <p className="text-sm font-normal text-white">{text}</p>
    </div>
  );
}
