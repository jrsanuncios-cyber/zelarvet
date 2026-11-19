import { ContactIcon } from './illustrations/graphics';
import { whatsappUrl } from '../lib/whatsapp';

/** Botão flutuante de WhatsApp — presente em todos os dispositivos. */
export function WhatsAppFloat() {
  return (
    <a
      href={whatsappUrl('geral')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a ZelarVet pelo WhatsApp"
      className="group fixed bottom-5 right-4 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_12px_28px_-8px_rgba(37,211,102,0.7)] ring-4 ring-white/70 transition-transform duration-300 hover:scale-110 sm:bottom-7 sm:right-7 sm:h-16 sm:w-16"
    >
      <span
        aria-hidden="true"
        className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 animate-ping"
      />
      <ContactIcon name="whatsapp" className="relative h-7 w-7 sm:h-8 sm:w-8" />
    </a>
  );
}
