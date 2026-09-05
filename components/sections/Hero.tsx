import HeroDesktop from "@/components/sections/HeroDesktop";
import HeroMobile from "@/components/sections/HeroMobile";

/**
 * Hero de la portada (nodo 1:53).
 *
 * Las dos variantes se alternan por CSS y no con JavaScript, para que ambas
 * se rendericen en el servidor y no haya parpadeo al hidratar.
 */
export default function Hero() {
  return (
    <section aria-label="Presentación">
      {/* Ambas variantes están siempre en el DOM, así que el <h1> vive aquí
          una sola vez y los titulares visibles son párrafos. */}
      <h1 className="sr-only">
        Kevin Torres, diseñador y desarrollador web
      </h1>
      <div className="lg:hidden">
        <HeroMobile />
      </div>
      <div className="hidden lg:block">
        <HeroDesktop />
      </div>
    </section>
  );
}
