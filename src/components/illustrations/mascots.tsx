import { useId } from 'react';

/**
 * Mascotes ZelarVet — cachorro (beagle) e gato branco com mancha turquesa.
 * Ilustrações 100% vetoriais, traços orgânicos e contorno marrom #603B32,
 * seguindo a identidade visual fornecida.
 */

const STROKE = '#603B32';
const SW = 9;

type IlustracaoProps = { className?: string; title?: string };

function sanitize(id: string) {
  return `zv-${id.replace(/[^a-zA-Z0-9]/g, '')}`;
}

/* ---------------------------------- CACHORRO --------------------------------- */

function DogBody() {
  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Orelhas (atrás da cabeça) */}
      <path
        d="M145,178 C95,158 52,196 50,256 C48,312 92,342 124,318 C152,297 154,240 145,178 Z"
        fill="#F47D50"
        stroke={STROKE}
        strokeWidth={SW}
      />
      <path
        d="M275,178 C325,158 368,196 370,256 C372,312 328,342 296,318 C268,297 266,240 275,178 Z"
        fill="#F47D50"
        stroke={STROKE}
        strokeWidth={SW}
      />
      {/* Interior das orelhas */}
      <path d="M140,196 C104,184 74,214 72,257 C70,297 98,317 120,301 C140,286 145,240 140,196 Z" fill="#D95735" />
      <path d="M280,196 C316,184 346,214 348,257 C350,297 322,317 300,301 C280,286 275,240 280,196 Z" fill="#D95735" />

      {/* Cabeça */}
      <ellipse cx="210" cy="250" rx="100" ry="88" fill="#F47D50" stroke={STROKE} strokeWidth={SW} />

      {/* Face branca (focinho e listra) */}
      <path
        d="M170,296 C166,268 186,232 210,226 C234,232 254,268 250,296 C247,322 231,334 210,334 C189,334 173,322 170,296 Z"
        fill="#FFFFFF"
      />

      {/* Olhos */}
      <ellipse cx="166" cy="244" rx="12" ry="14" fill={STROKE} />
      <ellipse cx="254" cy="244" rx="12" ry="14" fill={STROKE} />
      <circle cx="170.5" cy="238.5" r="4.2" fill="#FFFFFF" />
      <circle cx="258.5" cy="238.5" r="4.2" fill="#FFFFFF" />

      {/* Nariz e boca */}
      <path d="M186,281 Q186,269 210,269 Q234,269 234,281 Q234,301 210,308 Q186,301 186,281 Z" fill={STROKE} />
      <path
        d="M210,308 L210,316 M210,316 C205,327 192,329 185,321 M210,316 C215,327 228,329 235,321"
        fill="none"
        stroke={STROKE}
        strokeWidth="7"
      />
      {/* Pelinhos / pontos do focinho */}
      <g fill={STROKE} opacity="0.45">
        <circle cx="192" cy="311" r="2.6" />
        <circle cx="201" cy="318" r="2.6" />
        <circle cx="228" cy="311" r="2.6" />
        <circle cx="219" cy="318" r="2.6" />
      </g>

      {/* Patas dianteiras */}
      <path
        d="M148,344 C148,331 161,324 176,324 C191,324 204,331 204,344 C204,357 192,364 176,364 C160,364 148,357 148,344 Z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth="8"
      />
      <path d="M166,327 L164,341 M186,327 L188,341" fill="none" stroke={STROKE} strokeWidth="5.5" />
      <path
        d="M216,344 C216,331 229,324 244,324 C259,324 272,331 272,344 C272,357 260,364 244,364 C228,364 216,357 216,344 Z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth="8"
      />
      <path d="M234,327 L232,341 M254,327 L256,341" fill="none" stroke={STROKE} strokeWidth="5.5" />
    </g>
  );
}

/* ------------------------------------ GATO ----------------------------------- */

function CatBody() {
  const rawId = useId();
  const clipId = sanitize(`${rawId}-cat-head`);

  return (
    <g strokeLinejoin="round" strokeLinecap="round">
      {/* Orelhas (atrás da cabeça) */}
      <path d="M82,70 L68,22 L116,50 Z" fill="#40B9BF" stroke={STROKE} strokeWidth={SW} />
      <path d="M178,70 L192,22 L144,50 Z" fill="#FFFFFF" stroke={STROKE} strokeWidth={SW} />
      {/* Interior das orelhas */}
      <path d="M84,64 L76,34 L104,50 Z" fill="#F47D50" />
      <path d="M176,64 L184,34 L156,50 Z" fill="#F47D50" />

      {/* Corpo / peito */}
      <ellipse cx="130" cy="148" rx="44" ry="26" fill="#FFFFFF" stroke={STROKE} strokeWidth={SW} />

      {/* Cabeça */}
      <circle cx="130" cy="105" r="58" fill="#FFFFFF" stroke={STROKE} strokeWidth={SW} />

      {/* Mancha turquesa */}
      <defs>
        <clipPath id={clipId}>
          <circle cx="130" cy="105" r="58" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <path d="M70,40 C110,30 140,52 136,85 C132,112 108,132 74,142 L56,142 L56,40 Z" fill="#40B9BF" />
      </g>

      {/* Olhos: esquerdo aberto (sobre a mancha), direito piscando */}
      <ellipse cx="112" cy="103" rx="11" ry="13" fill={STROKE} />
      <circle cx="116" cy="97.5" r="4" fill="#FFFFFF" />
      <path d="M152,106 Q164,92 176,106" fill="none" stroke={STROKE} strokeWidth="7.5" />

      {/* Nariz, boca e língua */}
      <path d="M124,116 Q131,111 138,116 Q138,124 131,127 Q124,124 124,116 Z" fill={STROKE} />
      <path
        d="M131,127 C131,134 125,138 119,135 M131,127 C131,134 137,138 143,135"
        fill="none"
        stroke={STROKE}
        strokeWidth="6"
      />
      <path d="M125,133 Q131,146 137,133 Z" fill="#F47D50" stroke={STROKE} strokeWidth="3.5" />

      {/* Bigodes */}
      <path
        d="M96,116 L70,110 M96,124 L70,128 M166,116 L192,110 M166,124 L192,128"
        fill="none"
        stroke={STROKE}
        strokeWidth="4.5"
      />

      {/* Patinhas apoiadas sobre o cachorro */}
      <path
        d="M72,151 C72,141 82,135 92,135 C102,135 112,141 112,151 C112,163 102,169 92,169 C82,169 72,163 72,151 Z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth="8"
      />
      <path d="M84,138 L83,151 M100,138 L101,151" fill="none" stroke={STROKE} strokeWidth="5" />
      <path
        d="M148,151 C148,141 158,135 168,135 C178,135 188,141 188,151 C188,163 178,169 168,169 C158,169 148,163 148,151 Z"
        fill="#FFFFFF"
        stroke={STROKE}
        strokeWidth="8"
      />
      <path d="M160,138 L159,151 M176,138 L177,151" fill="none" stroke={STROKE} strokeWidth="5" />
    </g>
  );
}

/* -------------------------------- COMPONENTES -------------------------------- */

/** Cachorro isolado (sticker). */
export function DogSticker({ className, title = 'Mascote cachorro ZelarVet' }: IlustracaoProps) {
  return (
    <svg
      viewBox="40 152 340 220"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <DogBody />
    </svg>
  );
}

/** Gato isolado (sticker). */
export function CatSticker({ className, title = 'Mascote gato ZelarVet' }: IlustracaoProps) {
  return (
    <svg
      viewBox="58 14 140 164"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <CatBody />
    </svg>
  );
}

/** Dupla de mascotes: gato sobre o cachorro — imagem principal do hero. */
export function MascotDuo({ className, title = 'Mascotes da ZelarVet: gato branco sobre cachorro laranja' }: IlustracaoProps) {
  return (
    <svg
      viewBox="0 0 420 400"
      className={className}
      role="img"
      aria-label={title}
      xmlns="http://www.w3.org/2000/svg"
    >
      <DogBody />
      <g transform="translate(80,0)">
        <CatBody />
      </g>
      {/* Marcas de movimento ao lado do gato */}
      <path
        d="M316,58 L336,48 M322,76 L344,72 M310,40 L322,26"
        fill="none"
        stroke="#F47D50"
        strokeWidth="7"
        strokeLinecap="round"
      />
    </svg>
  );
}
