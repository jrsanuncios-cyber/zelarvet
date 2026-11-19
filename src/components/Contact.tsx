import { Reveal, StaggerGroup } from './Reveal';
import { SectionTitle } from './SectionTitle';
import { ContactIcon, PawPrint, type ContactIconName } from './illustrations/graphics';
import { CONTACT } from '../lib/site';
import { whatsappUrl, whatsappUrlRaw } from '../lib/whatsapp';

type InfoRow = {
  icon: ContactIconName;
  label: string;
  value: string;
  note?: string;
  href?: string;
  external?: boolean;
  tag?: string;
};

const ROWS: InfoRow[] = [
  {
    icon: 'phone',
    label: 'Telefone',
    value: CONTACT.phoneDisplay,
    href: CONTACT.phoneHref,
  },
  {
    icon: 'whatsapp',
    label: 'WhatsApp',
    value: CONTACT.whatsappDisplay,
    href: whatsappUrlRaw(),
    external: true,
  },
  {
    icon: 'instagram',
    label: 'Instagram',
    value: CONTACT.instagramHandle,
    href: CONTACT.instagramUrl,
    external: true,
  },
  {
    icon: 'pin',
    label: 'Endereço',
    value: CONTACT.address,
    note: CONTACT.addressNote,
    tag: 'Editável',
  },
  {
    icon: 'clock',
    label: 'Horários de atendimento',
    value: CONTACT.hours,
    note: CONTACT.hoursNote,
    tag: 'Editável',
  },
];

export function Contact() {
  return (
    <section id="contato" className="relative overflow-hidden bg-white py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full bg-creme"
      />
      <div
        aria-hidden="true"
        className="paw-pattern pointer-events-none absolute -left-10 bottom-0 h-64 w-72 rotate-6 opacity-60"
      />

      <div className="container-zv relative z-10">
        <SectionTitle
          eyebrow="Contato"
          title={
            <>
              Vamos conversar sobre o <span className="text-terracota">seu pet</span>?
            </>
          }
          subtitle="Escolha o canal que preferir e fale com a nossa equipe."
        />

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:gap-14">
          {/* ------------------------------- CANAIS ------------------------------- */}
          <StaggerGroup className="flex flex-col gap-4" stagger={0.08}>
            {ROWS.map((row) => {
              const content = (
                <div className="flex w-full items-center gap-4 text-left">
                  <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl border-[3px] border-marrom/10 bg-creme p-3 text-turquesa-escuro transition-colors duration-300">
                    <ContactIcon name={row.icon} className="h-6 w-6" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="flex flex-wrap items-center gap-2">
                      <span className="text-xs font-extrabold uppercase tracking-[0.16em] text-marrom/80">
                        {row.label}
                      </span>
                      {row.tag && (
                        <span className="rounded-full bg-coral/15 px-2 py-0.5 text-[10px] font-extrabold uppercase tracking-wider text-marrom">
                          {row.tag}
                        </span>
                      )}
                    </span>
                    <span className="mt-1 block break-words font-display text-lg font-medium text-marrom">
                      {row.value}
                    </span>
                    {row.note && (
                      <span className="mt-0.5 block text-[13px] leading-snug text-marrom/80">
                        {row.note}
                      </span>
                    )}
                  </span>
                  {row.href && (
                    <span className="hidden shrink-0 text-coral transition-transform duration-300 sm:block">
                      <PawPrint className="h-5 w-5" />
                    </span>
                  )}
                </div>
              );

              return (
                <Reveal key={row.label} direction="left">
                  {row.href ? (
                    <a
                      href={row.href}
                      target={row.external ? '_blank' : undefined}
                      rel={row.external ? 'noopener noreferrer' : undefined}
                      className="card block bg-creme/60 p-4 transition-all duration-300 hover:-translate-y-1 hover:border-turquesa/50 hover:bg-creme hover:shadow-card"
                    >
                      {content}
                    </a>
                  ) : (
                    <div className="card bg-creme/60 p-4">{content}</div>
                  )}
                </Reveal>
              );
            })}
          </StaggerGroup>

          {/* -------------------------------- MAPA -------------------------------- */}
          <Reveal direction="right" className="flex flex-col gap-5">
            <div className="card overflow-hidden bg-creme shadow-card">
              <div className="flex items-center justify-between gap-3 border-b-[3px] border-marrom/10 bg-white px-5 py-4">
                <span className="flex items-center gap-2 font-display text-base font-medium text-marrom">
                  <ContactIcon name="pin" className="h-5 w-5 text-terracota" />
                  Localização
                </span>
                <a
                  href={CONTACT.mapLinkUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-extrabold text-turquesa-escuro underline decoration-coral decoration-2 underline-offset-4 hover:text-marrom"
                >
                  Abrir no mapa
                </a>
              </div>

              <div className="relative h-[300px] w-full sm:h-[360px]">
                <iframe
                  title="Mapa de localização da ZelarVet"
                  src={CONTACT.mapEmbedUrl}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full border-0"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>

            <a
              href={whatsappUrl('agendar')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary w-full py-4 text-base"
            >
              <ContactIcon name="whatsapp" className="h-5 w-5" />
              Chamar no WhatsApp
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
