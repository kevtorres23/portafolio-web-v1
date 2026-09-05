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
  { name: "Figma", icon: "/icons/figma.svg", width: 16, height: 24 },
  { name: "React", icon: "/icons/react.svg", width: 27, height: 24 },
  { name: "Tailwind CSS", icon: "/icons/tailwind.svg", width: 38, height: 24 },
  { name: "Adobe Firefly", icon: "/icons/adobe.svg", width: 24, height: 24 },
];
