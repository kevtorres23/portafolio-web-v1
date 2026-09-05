"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";

/** `useLayoutEffect` avisa en SSR; en servidor se degrada a `useEffect`. */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

/**
 * Devuelve la escala necesaria para que un lienzo de ancho fijo `designWidth`
 * quepa en su contenedor, sin pasar de 1:1.
 *
 * Mide el contenedor con `ResizeObserver` en lugar de usar `100vw`, para no
 * contar el ancho de la barra de scroll.
 */
export function useScaleToFit(designWidth: number) {
  const ref = useRef<HTMLDivElement>(null);
  const [scale, setScale] = useState(1);

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    if (!element) return;

    const update = () => {
      setScale(Math.min(1, element.clientWidth / designWidth));
    };

    update();

    const observer = new ResizeObserver(update);
    observer.observe(element);

    return () => observer.disconnect();
  }, [designWidth]);

  return { ref, scale };
}
