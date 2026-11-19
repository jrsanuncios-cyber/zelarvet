import { useId } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { MascotDuo } from './illustrations/mascots';
import { PawPrint, Blob, BrushUnderline, WaveDivider, ContactIcon } from './illustrations/graphics';
import { FloatingPaws, FloatingShapes } from './Decorations';
import { whatsappUrl } from '../lib/whatsapp';

const TITLE = 'Amor, cuidado e saúde para quem faz parte da sua família!';
const EASE = [0.22, 1, 0.36, 1] as const;

const HIGHLIGHTS = ['família!'];

export function Hero() {
  const reduce = useReducedMotion();
  const badgeId = `zv-${useId().replace(/[^a-zA-Z0-9]/g, '')}-badge`;

  const words = TITLE.split(' ');

  return (
    <section
      id="inicio"
      className="relative flex min-h-[85vh] scroll-mt-28 items-center overflow-hidden bg-creme pb-28 pt-32 sm:pt-36 lg:pb-36 lg:pt-40"
    >
      {/* Blob turquesa de fundo atrás dos mascotes (desktop) */}
      <div className="pointer-events-none absolute -right-32 top-6 hidden h-[720px] w-[720px] text-turquesa lg:block">
        <Blob className="h-full w-full opacity-95" />
      </div>

      {/* Patinhas e elementos flutuantes */}
      <FloatingPaws
        items={[
          { className: 'left-[4%] top-[18%] h-7 w-7 text-terracota/45', rot: -18, delay: 0.2 },
          { className: 'left-[46%] top-[12%] h-5 w-5 text-turquesa/50', rot: 22, delay: 1.1 },
          { className: 'left-[10%] bottom-[16%] h-9 w-9 text-coral/50', rot: 12, delay: 0.6, drift: true },
          { className: 'left-[38%] bottom-[9%] h-6 w-6 text-marrom/25', rot: -8, delay: 1.6 },
          { className: 'right-[6%] top-[14%] h-8 w-8 text-creme/80', rot: 16, delay: 0.9 },
          { className: 'right-[10%] bottom-[14%] h-10 w-10 text-creme/60', rot: -14, delay: 0.4, drift: true },
        ]}
      />
      <FloatingShapes
        items={[
          { glyph: 'heart', className: 'left-[30%] top-[24%] h-6 w-6 text-coral/70', rot: -10, delay: 0.5 },
          { glyph: 'cross', className: 'right-[42%] bottom-[20%] h-6 w-6 text-turquesa/50', rot: 8, delay: 1.3 },
        ]}
      />

      <div className="container-zv relative z-10 grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr] lg:gap-8">
        {/* ------------------------------- TEXTOS ------------------------------- */}
        <div className="max-w-xl text-center lg:text-left">
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE }}
          >
            <span className="eyebrow mx-auto lg:mx-0">
              <PawPrint className="h-3.5 w-3.5 text-terracota" />
              Cuidando de quem você ama!
            </span>
          </motion.div>

          <motion.h1
            className="mt-6 font-display text-[38px] font-semibold leading-[1.06] text-marrom sm:text-5xl lg:text-[58px] xl:text-[64px]"
            initial={reduce ? false : 'hidden'}
            animate="show"
            variants={{ hidden: {}, show: { transition: { staggerChildren: 0.07, delayChildren: 0.12 } } }}
          >
            {words.map((word, index) => {
              const highlighted = HIGHLIGHTS.includes(word);
              return (
                <span key={`${word}-${index}`} className="contents">
                  <motion.span
                    className="relative inline-block"
                    variants={{
                      hidden: { opacity: 0, y: 34, rotate: -4 },
                      show: { opacity: 1, y: 0, rotate: 0, transition: { duration: 0.6, ease: EASE } },
                    }}
                  >
                    <span className={highlighted ? 'text-terracota' : undefined}>{word}</span>
                    {highlighted && (
                      <BrushUnderline className="absolute -bottom-2 left-0 h-3 w-full text-coral sm:-bottom-3 sm:h-4" />
                    )}
                  </motion.span>
                  {index < words.length - 1 ? ' ' : null}
                </span>
              );
            })}
          </motion.h1>

          <motion.p
            className="mx-auto mt-7 max-w-lg text-base leading-relaxed text-marrom/85 sm:text-lg lg:mx-0"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: EASE }}
          >
            Na ZelarVet, cada pet recebe atenção especial, carinho e cuidado em todas as etapas da vida.
          </motion.p>

          <motion.div
            className="mt-9 flex flex-col items-center gap-3.5 sm:flex-row sm:justify-center lg:justify-start"
            initial={reduce ? false : { opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
          >
            <a
              href={whatsappUrl('agendar')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full px-8 py-4 sm:w-auto"
            >
              <ContactIcon name="whatsapp" className="h-5 w-5" />
              Agendar atendimento
            </a>
            <a href="#servicos" className="btn btn-outline w-full px-8 py-4 sm:w-auto">
              Conheça nossos serviços
            </a>
          </motion.div>

          <motion.p
            className="mt-8 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[13px] font-bold uppercase tracking-[0.14em] text-marrom/80 lg:justify-start"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.9 }}
          >
            {['Atendimento acolhedor', 'Atenção individual', 'Bem-estar animal'].map((label, index) => (
              <span key={label} className="inline-flex items-center gap-2 whitespace-nowrap">
                {index > 0 && <PawPrint className="h-3.5 w-3.5 text-terracota/70" />}
                {label}
              </span>
            ))}
          </motion.p>
        </div>

        {/* ------------------------------ MASCOTES ------------------------------ */}
        <div className="relative mx-auto w-full max-w-[300px] sm:max-w-[400px] lg:max-w-none">
          {/* Blob atrás dos mascotes no mobile/tablet */}
          <div className="pointer-events-none absolute -inset-10 text-turquesa lg:hidden">
            <Blob className="h-full w-full" />
          </div>

          <motion.div
            className="zv-bob relative z-10"
            initial={reduce ? false : { opacity: 0, y: 50, scale: 0.92 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ type: 'spring', stiffness: 90, damping: 15, delay: 0.25 }}
          >
            <MascotDuo className="h-auto w-full drop-shadow-[0_24px_30px_rgba(96,59,50,0.22)]" />
          </motion.div>

          {/* Selo circular giratório */}
          <motion.div
            className="absolute -bottom-4 -left-4 z-20 h-24 w-24 sm:h-32 sm:w-32 lg:-left-10"
            initial={reduce ? false : { opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 140, damping: 14, delay: 1 }}
          >
            <div className="relative h-full w-full">
              <svg viewBox="0 0 120 120" className="absolute inset-0 h-full w-full animate-spinSlow">
                <defs>
                  <path
                    id={badgeId}
                    d="M60,60 m-47,0 a47,47 0 1,1 94,0 a47,47 0 1,1 -94,0"
                    fill="none"
                  />
                </defs>
                <circle cx="60" cy="60" r="59" fill="#FFFFFF" stroke="#603B32" strokeWidth="3" />
                <text
                  fontSize="10.5"
                  fontWeight="800"
                  fill="#603B32"
                  letterSpacing="1.5"
                  fontFamily="Nunito, sans-serif"
                >
                  <textPath href={`#${badgeId}`} startOffset="0">
                    ZELARVET • SAÚDE E CARINHO • ZELARVET • CARINHO •
                  </textPath>
                </text>
              </svg>
              <span className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-1/2 text-coral sm:h-11 sm:w-11">
                <PawPrint className="h-full w-full" />
              </span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Onda divisória para a próxima seção */}
      <WaveDivider className="absolute -bottom-px left-0 h-[52px] w-full text-white sm:h-[86px]" />
    </section>
  );
}
