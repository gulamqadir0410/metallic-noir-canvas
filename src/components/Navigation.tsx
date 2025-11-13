import { useState } from 'react'; // Removed useEffect
import { NavLink } from './NavLink';
import { Menu, X } from 'lucide-react';
// import lohamLogo from '@/assets/loham-logo.png'; // Removed logo import

const Navigation = () => {
  // const [isScrolled, setIsScrolled] = useState(false); // Removed scroll state
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Removed the useEffect hook that listened for scroll events
  // useEffect(() => {
  //   const handleScroll = () => {
  //     setIsScrolled(window.scrollY > 50);
  //   };
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const navLinks = [
    { to: '/', label: 'HOME' },
    { to: '/services', label: 'SERVICES' },
  ];

  return (
    <nav
      // Removed 'fixed', 'left-0', 'right-0', 'top-0', 'z-50', and the conditional logic
      // This nav will now be a static block at the top of the page
      className="bg-void-black/95 backdrop-blur-sm shadow-elegant"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-end px-6 py-6 md:px-12">
        {/* ^-- Changed justify-between to justify-end to push links to the right */}

        {/* Logo Block Removed */}
        {/* <NavLink
          to="/"
          className="flex items-center"
        >
          <img 
            src={lohamLogo} 
            alt="Loham - Architectural Metals Simplified" 
            className="h-12 w-auto md:h-16 transition-opacity hover:opacity-80"
          />
        </NavLink>
        */}

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
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
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
