import { useId } from 'react';
import type { Service } from '../../lib/site';

/* ---------------------------------- UTIL ------------------------------------ */

export function sanitizeId(id: string) {
  return `zv-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
}

/* --------------------------------- PATINHA ---------------------------------- */

export function PawPrint({ className, title }: { className?: string; title?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden={!title ? true : undefined} role={title ? 'img' : undefined} aria-label={title} xmlns="http://www.w3.org/2000/svg">
      <g fill="currentColor">
        <ellipse cx="32" cy="42" rx="13.5" ry="11.5" />
        <ellipse cx="13.5" cy="30" rx="6.2" ry="8" transform="rotate(-20 13.5 30)" />
        <ellipse cx="24" cy="17.5" rx="6.2" ry="8.4" transform="rotate(-8 24 17.5)" />
        <ellipse cx="40" cy="17.5" rx="6.2" ry="8.4" transform="rotate(8 40 17.5)" />
        <ellipse cx="50.5" cy="30" rx="6.2" ry="8" transform="rotate(20 50.5 30)" />
      </g>
    </svg>
  );
}

/* ----------------------------------- LOGO ----------------------------------- */

export function Logo({
  className,
  variant = 'dark',
  showTagline = false,
}: {
  className?: string;
  variant?: 'dark' | 'light';
  showTagline?: boolean;
}) {
  const isLight = variant === 'light';
  return (
    <span className={`flex flex-col items-start leading-none ${className ?? ''}`}>
      <span className="mb-0.5 inline-block -rotate-2 rounded-full bg-turquesa-escuro px-2.5 py-1 text-[9px] font-extrabold uppercase tracking-[0.22em] text-white">
        Veterinária
      </span>
      <span className="relative inline-block font-display text-[28px] font-semibold leading-none">
        <span className={isLight ? 'text-white' : 'text-turquesa-escuro'}>Zelar</span>
        <span className={isLight ? 'text-turquesa-claro' : 'text-coral-escuro'}>Vet</span>
        <PawPrint
          className={`absolute -right-5 -top-2.5 h-4 w-4 ${isLight ? 'text-turquesa-claro' : 'text-coral-escuro'}`}
        />
      </span>
      {showTagline && (
        <span
          className={`mt-1.5 font-display text-[13px] font-medium italic ${
            isLight ? 'text-creme/95' : 'text-marrom/85'
          }`}
        >
          Cuidando de quem você ama!
        </span>
      )}
    </span>
  );
}

/* --------------------------------- GLIFOS ----------------------------------- */

type GlyphName = 'heart' | 'paw' | 'cross' | 'stethoscope';

export function GlyphIcon({ name, className }: { name: GlyphName; className?: string }) {
  const common = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      {name === 'heart' && (
        <path
          d="M24,39 C11,30.5 7,22 11.5,15.5 C15.5,9.8 22,10.8 24,15.5 C26,10.8 32.5,9.8 36.5,15.5 C41,22 37,30.5 24,39 Z"
          {...common}
        />
      )}
      {name === 'paw' && (
        <g fill="currentColor">
          <ellipse cx="24" cy="31" rx="9.5" ry="8" />
          <ellipse cx="11" cy="22.5" rx="4.4" ry="5.7" transform="rotate(-20 11 22.5)" />
          <ellipse cx="18.5" cy="14" rx="4.4" ry="6" transform="rotate(-8 18.5 14)" />
          <ellipse cx="29.5" cy="14" rx="4.4" ry="6" transform="rotate(8 29.5 14)" />
          <ellipse cx="37" cy="22.5" rx="4.4" ry="5.7" transform="rotate(20 37 22.5)" />
        </g>
      )}
      {name === 'cross' && (
        <path
          d="M19,9 H29 V19 H39 V29 H29 V39 H19 V29 H9 V19 H19 Z"
          {...common}
          strokeWidth={3.4}
        />
      )}
      {name === 'stethoscope' && (
        <g {...common}>
          <path d="M14,7 V19 Q14,33 24,33 Q34,33 34,19 V7" />
          <path d="M10,7 H18 M30,7 H38" />
          <circle cx="24" cy="39.5" r="5.5" />
        </g>
      )}
    </svg>
  );
}

/* ------------------------------- ÍCONES SERVIÇO ----------------------------- */

export function ServiceIcon({ name, className }: { name: Service['icon']; className?: string }) {
  const common = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  return (
    <svg viewBox="0 0 48 48" className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      {name === 'consulta' && (
        <g {...common}>
          <path d="M14,7 V19 Q14,33 24,33 Q34,33 34,19 V7" />
          <path d="M10,7 H18 M30,7 H38" />
          <circle cx="24" cy="39.5" r="5.5" />
        </g>
      )}
      {name === 'vacinacao' && (
        <g {...common}>
          <rect x="16" y="13" width="16" height="22" rx="3.5" />
          <path d="M24,5 V13" />
          <path d="M20,35 V41 H28 V35" />
          <path d="M16.5,41 H31.5" />
          <path d="M20,19 H26 M20,25 H26" />
        </g>
      )}
      {name === 'emergencia' && (
        <g {...common}>
          <path d="M24,40 C11,31.5 7,22.5 11.5,16 C15.5,10.3 22,11.3 24,16 C26,11.3 32.5,10.3 36.5,16 C41,22.5 37,31.5 24,40 Z" />
          <path d="M13,24 H18.5 L21,19.5 L24.5,29 L27,24 H35" />
        </g>
      )}
      {name === 'exames' && (
        <g {...common}>
          <path d="M18,8 V31 a6,6 0 0 0 12,0 V8" />
          <path d="M14,8 H34" />
          <circle cx="23" cy="17" r="2.2" />
          <circle cx="28.5" cy="25" r="1.7" />
          <path
            d="M18,22 Q24,26 30,22 V31 a6,6 0 0 1 -12,0 Z"
            fill="currentColor"
            stroke="none"
            opacity="0.28"
          />
        </g>
      )}
    </svg>
  );
}

/* ----------------------------- ÍCONES DE CONTATO ---------------------------- */

export type ContactIconName = 'phone' | 'whatsapp' | 'instagram' | 'pin' | 'clock';

export function ContactIcon({ name, className }: { name: ContactIconName; className?: string }) {
  const common = {
    fill: 'none' as const,
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  if (name === 'whatsapp') {
    return (
      <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
        <path
          fill="currentColor"
          d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      {name === 'phone' && (
        <path
          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"
          {...common}
        />
      )}
      {name === 'instagram' && (
        <g {...common}>
          <rect x="2" y="2" width="20" height="20" rx="5.5" />
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
          <path d="M17.5 6.5h.01" />
        </g>
      )}
      {name === 'pin' && (
        <g {...common}>
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </g>
      )}
      {name === 'clock' && (
        <g {...common}>
          <circle cx="12" cy="12" r="9.5" />
          <path d="M12 6.5V12l3.5 2" />
        </g>
      )}
    </svg>
  );
}

/* --------------------------- PADRÃO ILUSTRADO ------------------------------- */

/**
 * Padrão visual com rostos de cachorro e gato, patinhas, corações e cruzes —
 * referência ao "padrão visual" da identidade da marca.
 */
export function AnimalPattern({
  className,
  color = '#D95735',
  opacity = 0.3,
}: {
  className?: string;
  color?: string;
  opacity?: number;
}) {
  const rawId = useId();
  const id = sanitizeId(`${rawId}-pattern`);

  const line = {
    fill: 'none',
    stroke: color,
    strokeWidth: 3,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
  };

  const dogFace = (
    <g {...line}>
      <path d="M30,14 C19,14 12,22 12,32 C12,42 19,49 30,49 C41,49 48,42 48,32 C48,22 41,14 30,14 Z" />
      <path d="M15,20 C8,15 4,22 6.5,29 C8,34 12,37 15,36" />
      <path d="M45,20 C52,15 56,22 53.5,29 C52,34 48,37 45,36" />
      <path d="M23.5,30.5 h0.01 M36.5,30.5 h0.01" strokeWidth="4.5" />
      <path d="M30,37.5 l-3,-2.2 h6 z" fill={color} />
      <path d="M30,39.5 V42.5 M30,42.5 c-2,2.4 -5.2,2.4 -6.4,0 M30,42.5 c2,2.4 5.2,2.4 6.4,0" />
    </g>
  );

  const catFace = (
    <g {...line}>
      <path d="M30,15 C20,15 14,22 14,31.5 C14,41 20,48 30,48 C40,48 46,41 46,31.5 C46,22 40,15 30,15 Z" />
      <path d="M17,20 L13,8 L25,14 Z" />
      <path d="M43,20 L47,8 L35,14 Z" />
      <path d="M21,31 q3.2,-4.4 6.4,0 M30.6,31 q3.2,-4.4 6.4,0" />
      <path d="M30,36 l-2.6,-2 h5.2 z" fill={color} />
      <path d="M16,35.5 L6,33.5 M16,39.5 L6,42 M44,35.5 L54,33.5 M44,39.5 L54,42" />
    </g>
  );

  const paw = (
    <g fill={color} stroke="none">
      <ellipse cx="30" cy="38" rx="11" ry="9" />
      <ellipse cx="14" cy="28" rx="5" ry="6.5" transform="rotate(-20 14 28)" />
      <ellipse cx="23" cy="17" rx="5" ry="6.8" transform="rotate(-8 23 17)" />
      <ellipse cx="37" cy="17" rx="5" ry="6.8" transform="rotate(8 37 17)" />
      <ellipse cx="46" cy="28" rx="5" ry="6.5" transform="rotate(20 46 28)" />
    </g>
  );

  const heart = (
    <path
      d="M30,45 C16,36 12,27.5 17,21.5 C21.5,16.5 27.5,17.5 30,21.5 C32.5,17.5 38.5,16.5 43,21.5 C48,27.5 44,36 30,45 Z"
      {...line}
    />
  );

  const cross = <path d="M24,10 H34 V20 H44 V30 H34 V40 H24 V30 H14 V20 H24 Z" {...line} />;

  return (
    <svg className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id={id} width="170" height="170" patternUnits="userSpaceOnUse">
          <g opacity={opacity}>
            <g transform="translate(6,4) scale(0.95) rotate(-6 30 30)">{dogFace}</g>
            <g transform="translate(98,12) scale(0.9) rotate(6 30 30)">{catFace}</g>
            <g transform="translate(66,70) scale(0.55)">{heart}</g>
            <g transform="translate(14,80) scale(0.78) rotate(-10 30 30)">{paw}</g>
            <g transform="translate(102,104) scale(0.86) rotate(-5 30 30)">{catFace}</g>
            <g transform="translate(52,116) scale(0.7) rotate(8 30 30)">{dogFace}</g>
            <g transform="translate(126,66) scale(0.5) rotate(-12 30 30)">{cross}</g>
            <g fill={color} stroke="none" opacity="0.8">
              <circle cx="86" cy="46" r="3" />
              <circle cx="150" cy="140" r="3" />
              <circle cx="34" cy="150" r="3" />
            </g>
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ---------------------------- ELEMENTOS DECORATIVOS ------------------------- */

/** Sublinhado orgânico em forma de traço de pincel. */
export function BrushUnderline({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 300 22" className={className} aria-hidden="true" focusable="false" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6,15 C60,4 130,3 190,7 C230,9.5 270,11 294,7"
        fill="none"
        stroke="currentColor"
        strokeWidth="9"
        strokeLinecap="round"
      />
    </svg>
  );
}

/** Forma orgânica (blob) usada como fundo de seções. */
export function Blob({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 400" className={className} aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M205,18 C275,2 350,40 378,105 C406,170 388,250 340,302 C292,354 214,378 150,362 C86,346 36,290 22,222 C8,154 44,84 100,47 C138,22 168,28 205,18 Z"
        fill="currentColor"
      />
    </svg>
  );
}

/** Onda divisória entre seções. */
export function WaveDivider({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 90"
      className={className}
      aria-hidden="true"
      focusable="false"
      preserveAspectRatio="none"
      style={flip ? { transform: 'scaleY(-1)' } : undefined}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0,52 C120,84 240,88 360,72 C480,56 600,20 720,18 C840,16 960,52 1080,66 C1200,80 1320,72 1440,44 L1440,90 L0,90 Z"
        fill="currentColor"
      />
    </svg>
  );
}
