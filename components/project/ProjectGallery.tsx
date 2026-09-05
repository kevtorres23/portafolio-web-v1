import Image from "next/image";

type GalleryProps = {
  images: [string, string, string];
  projectTitle: string;
};

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
      <Image src={src} alt={alt} fill sizes={sizes} className="object-cover" />
    </div>
  );
}

/**
 * Imágenes de demostración (nodos 1:183 y 1:186): dos en fila y una a lo
 * ancho. En móvil las tres se apilan.
 */
export default function ProjectGallery({ images, projectTitle }: GalleryProps) {
  const [first, second, third] = images;

  return (
    <div className="flex flex-col gap-6 lg:gap-10">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:gap-10">
        <Frame
          src={first}
          alt={`Captura 1 del proyecto ${projectTitle}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
        <Frame
          src={second}
          alt={`Captura 2 del proyecto ${projectTitle}`}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        />
      </div>
      <Frame
        src={third}
        alt={`Captura 3 del proyecto ${projectTitle}`}
        sizes="(max-width: 1024px) 100vw, 1240px"
      />
    </div>
  );
}
