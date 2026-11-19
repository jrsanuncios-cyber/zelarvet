import type { CSSProperties } from 'react';
import { PawPrint, GlyphIcon } from './illustrations/graphics';

type Item = {
  /** Classes de posicionamento/tamanho (ex.: "left-[8%] top-24 h-8 w-8") */
  className: string;
  delay?: number;
  duration?: number;
  rot?: number;
  drift?: boolean;
};

type ShapeItem = Item & {
  glyph: 'heart' | 'cross' | 'paw' | 'stethoscope';
};

function itemStyle(item: Item): CSSProperties {
  return {
    ['--rot' as string]: `${item.rot ?? 0}deg`,
    animationDelay: `${item.delay ?? 0}s`,
    animationDuration: `${item.duration ?? 6.5}s`,
  } as CSSProperties;
}

/**
 * Patinhas flutuantes em camadas gráficas — usadas como elementos decorativos.
 */
export function FloatingPaws({ items, className }: { items: Item[]; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ''}`} aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className={`absolute ${item.className} ${item.drift ? 'zv-drift' : 'zv-float'}`}
          style={itemStyle(item)}
        >
          <PawPrint className="h-full w-full" />
        </span>
      ))}
    </div>
  );
};

/**
 * Formas geométricas e símbolos da marca (corações, cruzes, círculos).
 */
export function FloatingShapes({ items, className }: { items: ShapeItem[]; className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 ${className ?? ''}`} aria-hidden="true">
      {items.map((item, i) => (
        <span
          key={i}
          className={`absolute ${item.className} ${item.drift ? 'zv-drift' : 'zv-float'}`}
          style={itemStyle(item)}
        >
          <GlyphIcon name={item.glyph} className="h-full w-full" />
        </span>
      ))}
    </div>
  );
};

/** Círculo sólido decorativo. */
export function BlobDot({ className, style }: { className?: string; style?: CSSProperties }) {
  return (
    <span
      aria-hidden="true"
      className={`pointer-events-none absolute rounded-full ${className ?? ''}`}
      style={style}
    />
  );
}
