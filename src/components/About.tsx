import { Reveal, StaggerGroup } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { FloatingPaws, FloatingShapes } from './Decorations';
import { Blob, PawPrint, BrushUnderline, AnimalPattern, ContactIcon } from './illustrations/graphics';
import { MascotDuo } from './illustrations/mascots';
import { whatsappUrl } from '../lib/whatsapp';

export function About() {
  return (
    <section id="sobre" className="relative overflow-hidden bg-creme py-24 lg:py-32">
      {/* Textura de padrão ilustrado no fundo */}
      <AnimalPattern className="absolute -left-24 top-0 h-[420px] w-[520px] opacity-40" color="#F47D50" opacity={0.22} />

      <FloatingPaws
        items={[
          { className: 'right-[4%] top-[10%] h-9 w-9 text-turquesa/30', rot: 16, delay: 0.4 },
          { className: 'left-[48%] bottom-[12%] h-6 w-6 text-terracota/35', rot: -12, delay: 1.2 },
          { className: 'right-[16%] bottom-[8%] h-7 w-7 text-coral/40', rot: 6, delay: 0.8, drift: true },
        ]}
      />

      <div className="container-zv relative z-10 grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* ------------------------------ ILUSTRAÇÃO ----------------------------- */}
        <Reveal direction="left" className="order-2 lg:order-1">
          <div className="relative mx-auto w-full max-w-[440px] lg:max-w-none">
            <div className="absolute -inset-4 text-turquesa sm:-inset-8">
              <Blob className="h-full w-full" />
            </div>

            <AnimalPattern
              className="absolute -bottom-6 -left-6 h-32 w-40 opacity-70 sm:-left-10 sm:h-40 sm:w-48"
              color="#FFF0D9"
              opacity={0.75}
            />

            <div className="relative z-10 px-4 py-6 sm:px-8">
              <MascotDuo className="h-auto w-full -rotate-2 drop-shadow-[0_20px_26px_rgba(96,59,50,0.25)]" />
            </div>

            {/* Etiqueta estilo adesivo */}
            <span className="absolute -bottom-3 -right-2 z-20 inline-flex -rotate-6 items-center gap-2 rounded-full border-[3px] border-marrom bg-white px-5 py-2.5 font-display text-sm font-medium text-marrom shadow-card sm:-right-6 sm:text-base">
              <PawPrint className="h-4 w-4 text-coral" />
              Cuidando de quem você ama!
            </span>
          </div>
        </Reveal>

        {/* -------------------------------- TEXTOS -------------------------------- */}
        <div className="order-1 lg:order-2">
          <SectionTitle
            eyebrow="Sobre a ZelarVet"
            title={
              <>
                Mais que uma veterinária, um cuidado{' '}
                <span className="relative inline-block text-terracota">
                  cheio de carinho
                  <BrushUnderline className="absolute -bottom-2 left-0 h-3.5 w-full text-coral sm:-bottom-3 sm:h-4" />
                </span>
                .
              </>
            }
          />

          <StaggerGroup className="mt-7 flex flex-col gap-5" stagger={0.12}>
            <Reveal>
              <p className="text-base leading-relaxed text-marrom/85 sm:text-lg">
                Na ZelarVet, acreditamos que os animais merecem cuidado, respeito e atenção especial.
                Nosso propósito é proporcionar um atendimento acolhedor, valorizando a saúde e o
                bem-estar de cada pet.
              </p>
            </Reveal>

            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                {['Respeito', 'Carinho', 'Bem-estar', 'Cuidado'].map((word) => (
                  <span
                    key={word}
                    className="inline-flex items-center gap-2 rounded-full border-2 border-marrom/15 bg-white px-4 py-2 text-sm font-bold text-marrom"
                  >
                    <PawPrint className="h-3.5 w-3.5 text-terracota" />
                    {word}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <a
                href={whatsappUrl('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary mt-2"
              >
                <ContactIcon name="whatsapp" className="h-5 w-5" />
                Falar com a ZelarVet
              </a>
            </Reveal>
          </StaggerGroup>
        </div>
      </div>

      <FloatingShapes
        items={[
          { glyph: 'heart', className: 'left-[6%] top-[16%] h-7 w-7 text-coral/60', rot: -12, delay: 0.5 },
          { glyph: 'cross', className: 'right-[6%] top-[52%] h-6 w-6 text-turquesa/50', rot: 10, delay: 1.1 },
        ]}
      />
    </section>
  );
}
