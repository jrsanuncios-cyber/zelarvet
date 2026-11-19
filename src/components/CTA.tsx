import { Reveal } from './Reveal';
import { AnimalPattern, PawPrint, ContactIcon } from './illustrations/graphics';
import { DogSticker } from './illustrations/mascots';
import { FloatingPaws } from './Decorations';
import { whatsappUrl } from '../lib/whatsapp';

export function CTA() {
  return (
    <section className="relative overflow-hidden bg-coral py-24 lg:py-28">
      {/* Padrão ilustrado da marca */}
      <AnimalPattern
        className="absolute inset-0 h-full w-full opacity-50"
        color="#D95735"
        opacity={0.4}
      />

      <FloatingPaws
        items={[
          { className: 'left-[6%] top-[18%] h-8 w-8 text-white/60', rot: -16, delay: 0.3 },
          { className: 'left-[24%] bottom-[14%] h-6 w-6 text-white/50', rot: 12, delay: 1 },
          { className: 'right-[38%] top-[12%] h-7 w-7 text-creme/70', rot: 6, delay: 0.6, drift: true },
        ]}
      />

      <div className="container-zv relative z-10 grid items-end gap-10 lg:grid-cols-[1.15fr_0.85fr]">
        <div className="max-w-2xl">
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border-2 border-marrom-escuro/20 bg-white/80 px-4 py-1.5 text-xs font-extrabold uppercase tracking-[0.18em] text-marrom-escuro">
              <PawPrint className="h-3.5 w-3.5 text-terracota" />
              Agende seu atendimento
            </span>
          </Reveal>

          <Reveal delay={0.08}>
            <h2 className="mt-5 font-display text-[36px] font-semibold leading-[1.06] text-marrom-escuro sm:text-5xl lg:text-[58px]">
              Seu melhor amigo merece esse cuidado!
            </h2>
          </Reveal>

          <Reveal delay={0.16}>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-marrom-escuro sm:text-lg">
              Entre em contato com nossa equipe e agende um atendimento.
            </p>
          </Reveal>

          <Reveal delay={0.24}>
            <a
              href={whatsappUrl('cta')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-light mt-8 px-9 py-4 text-base"
            >
              <ContactIcon name="whatsapp" className="h-5 w-5" />
              Falar com a ZelarVet
            </a>
          </Reveal>
        </div>

        {/* Mascote interagindo com a seção */}
        <Reveal direction="right" delay={0.15} className="relative">
          <div className="relative mx-auto w-full max-w-[380px] translate-y-6 lg:max-w-none lg:translate-y-10">
            <DogSticker className="h-auto w-full drop-shadow-[0_18px_24px_rgba(96,59,50,0.28)]" />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
