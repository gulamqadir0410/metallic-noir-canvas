import { useState } from 'react';
import { NavLink } from './NavLink';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/services', label: 'SERVICES' },
  ];

  return (
    <nav
      className="
        absolute top-0 left-0 right-0 z-50 
        backdrop-blur-sm shadow-elegant
      "
      // 'absolute' makes it float on top but scroll away (NOT sticky).
      // 'bg-void-black/95' is removed to make it transparent.
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-6 md:px-12">
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className="font-body text-sm tracking-widest text-metallic-aluminum transition-colors hover:text-primary"
              activeClassName="text-primary"
            >
              {link.label}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-primary md:hidden"
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="bg-void-black/98 backdrop-blur-sm md:hidden">
          <div className="flex flex-col gap-6 px-6 py-8">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                to={link.to}
                className="font-body text-lg tracking-widest text-metallic-aluminum transition-colors hover:text-primary"
                activeClassName="text-primary"
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
