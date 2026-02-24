import Logo from "@/components/grind/Logo";

export default function Footer() {
  return (
    <footer className="relative bg-grind-black border-t border-grind-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <Logo variant="lightning" size="sm" />
            <p className="font-manrope text-sm text-grind-muted">
              © 2026 GRIND. Built for African Football.
            </p>
          </div>

          {/* Footer Links */}
          <div className="flex items-center gap-8">
            {["Privacy", "Terms", "Contact"].map((link) => (
              <a
                key={link}
                href="#"
                className="font-manrope text-sm text-grind-muted hover:text-gold-primary transition-colors duration-300"
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Gold accent line */}
        <div className="mt-10 mx-auto w-16 h-[1px] bg-gradient-to-r from-transparent via-gold-primary/50 to-transparent" />
      </div>
    </footer>
  );
}
