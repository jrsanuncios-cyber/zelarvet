import type { ReactNode } from 'react';
import { Reveal } from './Reveal';
import { PawPrint } from './illustrations/graphics';

type Tone = 'on-light' | 'on-color';

/**
 * Cabeçalho padrão de seção: selo + título grande + texto de apoio.
 */
export function SectionTitle({
  eyebrow,
  title,
  subtitle,
  align = 'left',
  tone = 'on-light',
  className,
  delay = 0,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: 'left' | 'center';
  tone?: Tone;
  className?: string;
  delay?: number;
}) {
  const onColor = tone === 'on-color';
  const alignCls = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <div className={`flex flex-col gap-4 ${alignCls} ${className ?? ''}`}>
      {eyebrow && (
        <Reveal delay={delay}>
          <span
            className={`eyebrow ${
              onColor ? 'border-marrom-escuro/20 bg-white/70 text-marrom-escuro' : ''
            }`}
          >
            <PawPrint className="h-3.5 w-3.5 text-terracota" />
            {eyebrow}
          </span>
        </Reveal>
      )}

      <Reveal delay={delay + 0.08}>
        <h2
          className={`font-display text-[34px] font-semibold leading-[1.08] sm:text-5xl lg:text-[56px] ${
            onColor ? 'text-marrom-escuro' : 'text-marrom'
          }`}
        >
          {title}
        </h2>
      </Reveal>

      {subtitle && (
        <Reveal delay={delay + 0.16}>
          <p
            className={`max-w-2xl text-base leading-relaxed sm:text-lg ${
              onColor ? 'text-marrom-escuro/85' : 'text-marrom/80'
            }`}
          >
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}
