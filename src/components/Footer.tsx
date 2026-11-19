import { Logo, PawPrint, ContactIcon, WaveDivider } from './illustrations/graphics';
import { NAV_ITEMS, CONTACT } from '../lib/site';
import { whatsappUrl, whatsappUrlRaw } from '../lib/whatsapp';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="relative bg-marrom text-creme">
      <WaveDivider className="absolute -top-px left-0 h-[54px] w-full text-white" flip />

      <div className="container-zv relative z-10 grid gap-10 pb-10 pt-24 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8 lg:pt-28">
        {/* -------------------------------- MARCA -------------------------------- */}
        <div className="flex flex-col items-start gap-4">
          <Logo variant="light" showTagline />
          <p className="max-w-xs text-sm leading-relaxed text-creme">
            Cuidado, carinho e saúde para seu pet. Um atendimento acolhedor em todas as etapas da
            vida.
          </p>
          <div className="flex items-center gap-3">
            <a
              href={whatsappUrlRaw()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Falar com a ZelarVet pelo WhatsApp"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-creme/20 bg-white/10 text-creme transition-all duration-300 hover:-translate-y-1 hover:border-creme/50 hover:bg-turquesa-escuro"
            >
              <ContactIcon name="whatsapp" className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram da ZelarVet"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-creme/20 bg-white/10 text-creme transition-all duration-300 hover:-translate-y-1 hover:border-creme/50 hover:bg-turquesa-escuro"
            >
              <ContactIcon name="instagram" className="h-5 w-5" />
            </a>
            <a
              href={CONTACT.phoneHref}
              aria-label="Ligar para a ZelarVet"
              className="flex h-11 w-11 items-center justify-center rounded-2xl border-2 border-creme/20 bg-white/10 text-creme transition-all duration-300 hover:-translate-y-1 hover:border-creme/50 hover:bg-turquesa-escuro"
            >
              <ContactIcon name="phone" className="h-5 w-5" />
            </a>
          </div>
        </div>

        {/* ------------------------------ NAVEGAÇÃO ------------------------------ */}
        <nav aria-label="Navegação do rodapé">
          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-medium text-white">
            <PawPrint className="h-4 w-4 text-coral" />
            Navegação
          </h3>
          <ul className="flex flex-col gap-2.5">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="text-sm font-semibold text-creme transition-colors duration-300 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* ------------------------------- CONTATO ------------------------------- */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-medium text-white">
            <PawPrint className="h-4 w-4 text-coral" />
            Contato
          </h3>
          <ul className="flex flex-col gap-2.5 text-sm font-semibold text-creme">
            <li>
              <a href={CONTACT.phoneHref} className="transition-colors hover:text-white">
                {CONTACT.phoneDisplay}
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl('geral')}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                WhatsApp
              </a>
            </li>
            <li>
              <a
                href={CONTACT.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                {CONTACT.instagramHandle}
              </a>
            </li>
          </ul>
        </div>

        {/* --------------------------- ENDEREÇO / HORÁRIOS ----------------------- */}
        <div>
          <h3 className="mb-4 flex items-center gap-2 font-display text-lg font-medium text-white">
            <PawPrint className="h-4 w-4 text-coral" />
            Onde estamos
          </h3>
          <ul className="flex flex-col gap-3 text-sm text-creme">
            <li className="flex gap-2.5">
              <ContactIcon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <span>
                <strong className="block font-bold text-creme">{CONTACT.address}</strong>
                <span className="text-creme/95">{CONTACT.addressNote}</span>
              </span>
            </li>
            <li className="flex gap-2.5">
              <ContactIcon name="clock" className="mt-0.5 h-4 w-4 shrink-0 text-coral" />
              <span>
                <strong className="block font-bold text-creme">{CONTACT.hours}</strong>
                <span className="text-creme/95">{CONTACT.hoursNote}</span>
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="relative z-10 border-t border-creme/15">
        <div className="container-zv flex flex-col items-center justify-between gap-3 py-6 text-center text-xs font-semibold text-creme/95 sm:flex-row sm:text-left">
          <p>
            © {year} ZelarVet — Todos os direitos reservados.
          </p>
          <p className="flex items-center gap-2">
            <PawPrint className="h-3.5 w-3.5 text-coral" />
            Cuidando de quem você ama!
          </p>
        </div>
      </div>
    </footer>
  );
}
