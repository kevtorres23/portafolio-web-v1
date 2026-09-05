import Image from "next/image";

/**
 * Imagen principal del proyecto (nodo 1:144, 1240×600).
 * En el diseño la imagen está recortada mostrando su parte superior, de ahí
 * `object-top`.
 */
export default function ProjectCover({ src, alt }: { src: string; alt: string }) {
  return (
    <div className="relative h-[220px] w-full overflow-hidden rounded-[20px] border border-line sm:h-[360px] sm:rounded-[30px] lg:h-[600px]">
      <Image
        src={src}
        alt={alt}
        fill
        priority
        sizes="(max-width: 1024px) 100vw, 1240px"
        className="object-cover object-top"
      />
    </div>
  );
}
