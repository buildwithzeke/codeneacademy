
//icons
import { Sun, Moon, Menu, X } from "lucide-react";

// data
import { navItems } from "../../CONSTANT";

function Header({ darkMode, menuOpen, onMenu, onTheme }) {

  //  bg-brand-ink/[0.88] dark:bg-brand-ink/[0.86]
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray/10 backdrop-blur-xl">

      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <a href="#home" className="flex items-center gap-3" aria-label="Codene Academy">
          <img
            src="/brand/logo.jpg"
            alt="Codene Academy logo"
            className="h-11 w-11 rounded-2xl object-cover object-left"
          />
          <span className="leading-none text-white">
            <span className="block text-lg font-black">Codene</span>
            <span className="block text-lg font-black">Academy</span>
          </span>
        </a>

        <nav className="hidden items-center gap-9 text-sm font-semibold text-white lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="transition text-brand-ink dark:text-white hover:text-brand-amber dark:hover:text-brand-amber"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={onTheme}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-brand-ink/[0.86] text-white transition hover:border-brand-amber hover:text-brand-amber"
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <Sun size={19} /> : <Moon size={19} />}
          </button>
          <a
            href="#contact"
            className="hidden rounded-lg bg-gradient-to-r from-brand-orange to-brand-purple px-5 py-3 text-sm font-extrabold text-white shadow-glow transition hover:scale-[1.02] lg:inline-flex"
          >
            Book a Session
          </a>
          <button
            type="button"
            onClick={onMenu}
            className="grid h-11 w-11 place-items-center rounded-full border border-white/15 text-white/[0.76 dark:text-white lg:hidden"
            aria-label="Toggle navigation menu"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="pborder-t border-white/10 bg-brand-ink px-5 py-5 lg:hidden">
          <nav className="mx-auto grid max-w-7xl gap-4 text-sm font-bold text-slate-700">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                onClick={onMenu}
              >
                {item}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}

export default Header;