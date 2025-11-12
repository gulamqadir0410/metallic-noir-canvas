import { Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="border-t border-border bg-void-black px-6 py-12">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold text-primary">
              LOHAM
            </h3>
          </div>

          {/* Social Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Instagram"
            >
              <Instagram className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Facebook"
            >
              <Facebook className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
            <a
              href="#"
              className="group relative text-metallic-aluminum transition-colors hover:text-metallic-chrome"
              aria-label="Twitter"
            >
              <Twitter className="h-5 w-5" />
              <span className="absolute -bottom-1 left-0 h-px w-0 bg-gradient-metallic transition-all duration-300 group-hover:w-full" />
            </a>
          </div>

          {/* Legal */}
          <div className="flex gap-8 font-body text-sm text-metallic-gunmetal">
            <a href="#" className="transition-colors hover:text-metallic-aluminum">
              Loham123@gmail.com
            </a>
            <a href="#" className="transition-colors hover:text-metallic-aluminum">
              +91854625741
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 border-t border-border pt-8 text-center">
          <p className="font-body text-xs tracking-widest text-metallic-gunmetal">
            © 2025 LOHAM. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
