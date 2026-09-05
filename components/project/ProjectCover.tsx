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
        /* Sin optimizar: se sirve el PNG original a resolución completa para
           que la imagen aguante el zoom del navegador. `sizes` queda como
           documentación del ancho real (el contenedor menos los márgenes, no
           los 1240px fijos del diseño) y vuelve a tener efecto si algún día
           se reactiva el optimizador. */
        unoptimized
        sizes="(min-width: 1024px) calc(100vw - 200px), 100vw"
        className="object-cover object-top"
      />
    </div>
  );
}
