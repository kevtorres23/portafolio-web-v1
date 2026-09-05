/** Herramientas mostradas en la cuadrícula 2×2 de la sección azul. */

export type Tool = {
  name: string;
  icon: string;
  /** Cada logo tiene su propia proporción; se conservan a 24px de alto. */
  width: number;
  height: number;
};

export const tools: Tool[] = [
  { name: "Next.js", icon: "/icons/nextjs.svg", width: 24, height: 24 },
  { name: "Figma", icon: "/images/tools/figma.png", width: 16, height: 24 },
  { name: "React", icon: "/images/tools/react.png", width: 27, height: 24 },
  { name: "Tailwind CSS", icon: "/images/tools/tailwind.png", width: 38, height: 24 },
];
