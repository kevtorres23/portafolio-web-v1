import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  images: {
    /* Las imágenes grandes (portadas, tarjetas, galería, retrato) llevan
       `unoptimized` en su propio componente: se sirve el PNG original a
       resolución completa para que aguanten el zoom sin reescalado.
       La configuración de abajo solo aplica ya a los logos de herramientas,
       que sí se benefician del optimizador porque se reducen de miles de
       píxeles a 24px y el remuestreo del navegador es peor que el de sharp. */
    qualities: [95],
    deviceSizes: [640, 750, 828, 1080, 1200, 1440, 1600, 1920, 2048, 2560, 3840],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
