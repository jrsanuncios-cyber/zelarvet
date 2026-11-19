import { Reveal, StaggerGroup } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { FloatingPaws } from './Decorations';
import { ServiceIcon, PawPrint } from './illustrations/graphics';
import { SERVICES, type Service } from '../lib/site';

const CARD_STYLES: Record<
  Service['accent'],
  { wrap: string; circle: string; icon: string; title: string; desc: string; deco: string }
> = {
  turquesa: {
    wrap: 'bg-turquesa border-marrom/15',
    circle: 'bg-white',
    icon: 'text-turquesa-escuro',
    title: 'text-marrom-escuro',
    desc: 'text-marrom-escuro',
    deco: 'text-white/45',
  },
  coral: {
    wrap: 'bg-coral border-marrom/15',
    circle: 'bg-white',
    icon: 'text-coral-escuro',
    title: 'text-marrom-escuro',
    desc: 'text-marrom-escuro',
    deco: 'text-white/50',
  },
  terracota: {
    wrap: 'bg-creme border-terracota/35',
    circle: 'bg-white',
    icon: 'text-terracota',
    title: 'text-marrom',
    desc: 'text-marrom/80',
    deco: 'text-terracota/30',
  },
  marrom: {
    wrap: 'bg-marrom border-marrom',
    circle: 'bg-creme',
    icon: 'text-marrom',
    title: 'text-creme',
    desc: 'text-creme',
    deco: 'text-white/15',
  },
};

export function Services() {
  return (
    <section id="servicos" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <FloatingPaws
        items={[
          { className: 'left-[3%] top-[8%] h-8 w-8 text-turquesa/25', rot: -16, delay: 0.3 },
          { className: 'right-[5%] top-[14%] h-10 w-10 text-coral/25', rot: 14, delay: 1, drift: true },
          { className: 'left-[6%] bottom-[10%] h-7 w-7 text-terracota/25', rot: 8, delay: 0.7 },
          { className: 'right-[8%] bottom-[16%] h-8 w-8 text-turquesa/25', rot: -10, delay: 1.4 },
        ]}
      />

      <div className="container-zv relative z-10">
        <SectionTitle
          eyebrow="Nossos serviços"
          align="center"
          title={
            <>
              Tudo para cuidar de <span className="text-terracota">quem você ama</span>.
            </>
          }
          subtitle="Conheça os cuidados que a ZelarVet oferece para manter seu pet saudável em cada fase da vida."
        />

        <StaggerGroup className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5" stagger={0.12}>
          {SERVICES.map((service, index) => {
            const style = CARD_STYLES[service.accent];
            return (
              <Reveal key={service.id} className={index % 2 === 1 ? 'lg:mt-10' : undefined}>
                <article
                  className={`group relative flex h-full flex-col items-start gap-4 overflow-hidden rounded-[34px] border-[3px] p-7 transition-all duration-300 hover:-translate-y-2 hover:shadow-lift ${style.wrap}`}
                >
                  {/* Elemento decorativo do card */}
                  <PawPrint
                    className={`pointer-events-none absolute -bottom-5 -right-4 h-24 w-24 rotate-12 transition-transform duration-500 group-hover:-rotate-6 group-hover:scale-110 ${style.deco}`}
                  />

                  <span
                    className={`relative flex h-16 w-16 items-center justify-center rounded-3xl transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-105 ${style.circle} ${style.icon}`}
                  >
                    <ServiceIcon name={service.icon} className="h-8 w-8" />
                  </span>

                  <h3
                    className={`relative font-display text-[22px] font-medium leading-tight ${style.title}`}
                  >
                    {service.title}
                  </h3>

                  <p className={`relative text-[15px] leading-relaxed ${style.desc}`}>
                    {service.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
