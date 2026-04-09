import { TreePine } from "lucide-react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Gallery", href: "#gallery" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  const scrollTo = (href: string) => {
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-3 gap-12">
          {/* Branding */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <TreePine className="h-6 w-6 text-primary-light" />
              <span className="text-lg font-bold text-primary-foreground">Advanced Tree Service</span>
            </div>
            <p className="text-sm leading-relaxed">
              Northeast Oklahoma's trusted experts in tree removal, land clearing, and stump grinding.
            </p>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Quick Links</h4>
            <div className="space-y-2">
              {links.map((link) => (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className="block text-sm hover:text-primary-foreground transition-colors"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-primary-foreground mb-4">Contact</h4>
            <div className="space-y-2 text-sm">
              <p>(918) 555-0123</p>
              <p>info@advancedtreeservice.com</p>
              <p>Tulsa, Oklahoma</p>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-primary-foreground/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Advanced Tree Service. All rights reserved.</p>
          <div className="flex gap-6">
            <button className="hover:text-primary-foreground transition-colors">Privacy Policy</button>
            <button className="hover:text-primary-foreground transition-colors">Terms of Service</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
