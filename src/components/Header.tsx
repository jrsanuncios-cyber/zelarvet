import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Logo, PawPrint } from './illustrations/graphics';
import { NAV_ITEMS } from '../lib/site';
import { whatsappUrl } from '../lib/whatsapp';

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>('#inicio');

  /* Cabeçalho com blur ao rolar */
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Seção ativa (scrollspy) */
  useEffect(() => {
    const els = NAV_ITEMS.map((item) => document.getElementById(item.href.slice(1))).filter(
      (el): el is HTMLElement => Boolean(el),
    );
    if (!els.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(`#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px', threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  /* Menu mobile: trava scroll e fecha com ESC */
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 px-3 transition-all duration-500 sm:px-6 ${
          scrolled ? 'py-3' : 'py-5'
        }`}
      >
        <div
          className={`mx-auto flex max-w-6xl items-center justify-between gap-4 rounded-[26px] transition-all duration-500 ${
            scrolled
              ? 'bg-white/85 px-4 py-2.5 shadow-card backdrop-blur-md'
              : 'bg-transparent px-2 py-1'
          }`}
        >
          <a
            href="#inicio"
            className="shrink-0 transition-transform duration-300 hover:-translate-y-0.5"
          >
            <Logo />
          </a>

          <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
            {NAV_ITEMS.map((item) => {
              const isActive = active === item.href;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  aria-current={isActive ? 'true' : undefined}
                  className={`relative rounded-full px-4 py-2.5 text-[15px] font-bold transition-colors duration-300 ${
                    isActive ? 'text-turquesa-escuro' : 'text-marrom hover:text-turquesa-escuro'
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-4 bottom-1 h-[3px] rounded-full bg-coral transition-transform duration-300 ${
                      isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
                  />
                </a>
              );
            })}
            <a
              href={whatsappUrl('agendar')}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary ml-3 py-3"
            >
              Agendar atendimento
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="menu-mobile"
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            className={`relative z-50 flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl border-[3px] transition-colors duration-300 lg:hidden ${
              open
                ? 'border-marrom-escuro bg-marrom-escuro'
                : 'border-marrom/20 bg-white text-marrom'
            }`}
          >
            <span
              className={`absolute block h-[3px] w-5 rounded-full transition-all duration-300 ${
                open ? 'rotate-45 bg-creme' : '-translate-y-1.5 bg-current'
              }`}
            />
            <span
              className={`absolute block h-[3px] w-5 rounded-full transition-all duration-300 ${
                open ? 'opacity-0 bg-creme' : 'opacity-100 bg-current'
              }`}
            />
            <span
              className={`absolute block h-[3px] w-5 rounded-full transition-all duration-300 ${
                open ? '-rotate-45 bg-creme' : 'translate-y-1.5 bg-current'
              }`}
            />
          </button>
        </div>
      </header>

      {/* ------------------------------ MENU MOBILE ------------------------------ */}
      <AnimatePresence>
        {open && (
          <div id="menu-mobile" className="fixed inset-0 z-40 lg:hidden">
            <motion.button
              type="button"
              aria-label="Fechar menu"
              className="absolute inset-0 h-full w-full cursor-default bg-marrom-escuro/45 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
            />

            <motion.nav
              aria-label="Navegação mobile"
              className="absolute right-3 top-[84px] w-[calc(100%-1.5rem)] max-w-sm overflow-hidden rounded-[34px] border-[3px] border-marrom/10 bg-creme p-6 shadow-lift sm:right-6 sm:max-w-md"
              initial={{ opacity: 0, y: -22, scale: 0.97 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -14, scale: 0.98 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
            >
              <div className="mb-4 flex items-center justify-between">
                <span className="eyebrow">
                  <PawPrint className="h-3.5 w-3.5 text-terracota" />
                  Menu
                </span>
              </div>

              <ul className="flex flex-col gap-1">
                {NAV_ITEMS.map((item, index) => (
                  <motion.li
                    key={item.href}
                    initial={{ opacity: 0, x: -18 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.08 + index * 0.06, duration: 0.4 }}
                  >
                    <a
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center justify-between rounded-2xl px-4 py-3 font-display text-xl font-medium transition-colors ${
                        active === item.href
                          ? 'bg-white text-turquesa-escuro'
                          : 'text-marrom hover:bg-white/70'
                      }`}
                    >
                      {item.label}
                      <span className="text-coral" aria-hidden="true">
                        <PawPrint className="h-4 w-4" />
                      </span>
                    </a>
                  </motion.li>
                ))}
              </ul>

              <motion.a
                href={whatsappUrl('agendar')}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="btn btn-primary mt-5 w-full"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.38, duration: 0.4 }}
              >
                Agendar atendimento
              </motion.a>
            </motion.nav>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
