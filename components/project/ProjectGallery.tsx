import Image from "next/image";

type GalleryProps = {
  images: [string, string, string];
  projectTitle: string;
};

/** Marcos a media columna: (100vw − padding − gap) / 2, más el margen de recorte. */
const HALF_SIZES =
  "(min-width: 1024px) calc(60vw - 144px), (min-width: 640px) calc(80vw - 84px), 100vw";

/** Marco a todo lo ancho: contenedor completo menos los márgenes laterales. */
const FULL_SIZES =
  "(min-width: 1024px) calc(100vw - 200px), (min-width: 640px) calc(100vw - 80px), 100vw";

function Frame({
  src,
  alt,
  sizes,
  className = "",
}: {
  src: string;
  alt: string;
  sizes: string;
  className?: string;
}) {
  return (
    <div
      className={`relative h-[220px] w-full overflow-hidden rounded-[20px] border border-line sm:h-[300px] sm:rounded-[30px] lg:h-[400px] ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        unoptimized
        sizes={sizes}
        className="object-cover"
      />
    </div>
  );
}

/**
 * Imágenes de demostración (nodos 1:183 y 1:186): dos en fila y una a lo
 * ancho. En móvil las tres se apilan.
 *
 * Los `sizes` se calculan sobre el viewport, no sobre los anchos fijos del
 * diseño a 1440px. Además, `object-cover` recorta capturas 16:9 dentro de
 * marcos más cuadrados, así que la imagen se renderiza más ancha que su
 * contenedor; los porcentajes llevan ese margen incorporado (60vw en vez de
 * 50vw, 80vw en vez de 50vw) para que el navegador no pida un archivo
 * demasiado pequeño y lo estire.
 */
export default function ProjectGallery({ images, projectTitle }: GalleryProps) {
  const [first, second, third] = images;

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
        <Frame
          src={first}
          alt={`Captura 1 del proyecto ${projectTitle}`}
          sizes={HALF_SIZES}
        />
        <Frame
          src={second}
          alt={`Captura 2 del proyecto ${projectTitle}`}
          sizes={HALF_SIZES}
        />
      </div>
      <Frame
        src={third}
        alt={`Captura 3 del proyecto ${projectTitle}`}
        sizes={FULL_SIZES}
      />
    </div>
  );
}
