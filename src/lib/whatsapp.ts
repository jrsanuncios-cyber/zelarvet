import { WHATSAPP_NUMBER } from './site';

export const WA_MESSAGES = {
  geral: 'Olá! Conheci a ZelarVet pelo site e gostaria de informações sobre atendimento.',
  agendar: 'Olá! Gostaria de agendar um atendimento na ZelarVet.',
  servicos: 'Olá! Vi os serviços no site da ZelarVet e gostaria de mais detalhes.',
  cta: 'Olá! Quero cuidar do meu pet com a ZelarVet!',
} as const;

export type WaKey = keyof typeof WA_MESSAGES;

/** Gera o link wa.me com a mensagem pré-preenchida. */
export function whatsappUrl(key: WaKey): string {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WA_MESSAGES[key])}`;
}

/** Link direto para abrir a conversa sem mensagem pré-preenchida. */
export function whatsappUrlRaw(): string {
  return `https://wa.me/${WHATSAPP_NUMBER}`;
}
