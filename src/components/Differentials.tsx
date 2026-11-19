import { StaggerGroup, Reveal } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { BrushUnderline, GlyphIcon, AnimalPattern, PawPrint } from './illustrations/graphics';
import { DIFFERENTIALS } from '../lib/site';

const CIRCLE_STYLES = [
  'bg-white text-turquesa-escuro',
  'bg-coral text-marrom-escuro',
  'bg-creme text-terracota',
  'bg-marrom text-creme',
];

export function Differentials() {
  return (
    <section
      id="diferenciais"
      className="relative overflow-hidden bg-turquesa py-24 lg:py-32"
    >
      {/* Textura branca de patinhas/rostinhos */}
      <AnimalPattern
        className="absolute inset-0 h-full w-full opacity-60"
        color="#FFF0D9"
        opacity={0.45}
      />

      <div className="container-zv relative z-10">
        <SectionTitle
          eyebrow="Por que a ZelarVet"
          tone="on-color"
          align="center"
          title={
            <>
              Cuidado que sente{' '}
              <span className="relative inline-block">
                na prática
                <BrushUnderline className="absolute -bottom-1.5 left-0 h-2.5 w-full text-white" />
              </span>
              .
            </>
          }
          subtitle="Quatro compromissos que atravessam cada atendimento."
        />

        <StaggerGroup
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-6"
          stagger={0.12}
        >
          {DIFFERENTIALS.map((item, index) => (
            <Reveal
              key={item.title}
              className={index % 2 === 1 ? 'lg:mt-10' : undefined}
            >
              <div className="group flex flex-col items-center gap-4 text-center">
                <span
                  className={`flex h-24 w-24 items-center justify-center rounded-[36px] border-[3px] border-marrom/15 shadow-card transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${CIRCLE_STYLES[index % CIRCLE_STYLES.length]}`}
                >
                  <GlyphIcon name={item.icon} className="h-11 w-11" />
                </span>

                <h3 className="max-w-[240px] font-display text-xl font-medium leading-snug text-marrom-escuro">
                  {item.title}
                </h3>

                <p className="max-w-[260px] text-[15px] leading-relaxed text-marrom-escuro/85">
                  {item.description}
                </p>
              </div>
            </Reveal>
          ))}
        </StaggerGroup>

        <Reveal className="mt-14 flex justify-center" delay={0.1}>
          <span className="inline-flex items-center gap-3 rounded-full bg-white/85 px-6 py-3 font-display text-base font-medium text-marrom shadow-card">
            <PawPrint className="h-5 w-5 text-terracota" />
            Amor em cada detalhe
            <PawPrint className="h-5 w-5 text-turquesa-escuro" />
          </span>
        </Reveal>
      </div>
    </section>
  );
}
