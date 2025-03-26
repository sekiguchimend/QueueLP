import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "glass-effect shadow-sm h-32"
          : "bg-transparent h-32"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex items-center justify-between h-full">
          <div className="flex items-center mt-2">
            <Link to="/" className="flex items-center">
              <img 
                src="/work_mate.png" 
                alt="ワークメイトAI" 
                className="h-24 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <NavItem href="#features" label="機能" />
            <NavItem href="#benefits" label="メリット" />
            <NavItem href="#how-it-works" label="使い方" />
            <NavItem href="#faq" label="よくある質問" />
            <NavItem href="/guide" label="機能ガイド" />
            <NavItem href="/help" label="ヘルプセンター" />
            <NavItem href="/contact" label="お問い合わせ" />
            <Button asChild className="ml-4 bg-primary hover:bg-primary/90 text-white transition-all shadow-md hover:shadow-lg">
              <Link to="/login">ログイン</Link>
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden flex items-center text-gray-700"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 glass-effect animate-fade-in py-8 z-50">
          <div className="container mx-auto px-4 flex flex-col space-y-6">
            <MobileNavItem href="#features" label="機能" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="#benefits" label="メリット" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="#how-it-works" label="使い方" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="#faq" label="よくある質問" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="/guide" label="機能ガイド" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="/help" label="ヘルプセンター" onClick={() => setIsMobileMenuOpen(false)} />
            <MobileNavItem href="/contact" label="お問い合わせ" onClick={() => setIsMobileMenuOpen(false)} />
            <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white transition-all mt-4">
              <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>ログイン</Link>
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="inline-flex items-center text-gray-700 hover:text-primary transition-colors font-medium relative group"
  >
    {label}
    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
  </a>
);

const MobileNavItem = ({
  href,
  label,
  onClick,
}: {
  href: string;
  label: string;
  onClick: () => void;
}) => (
  <a
    href={href}
    className="block py-3 text-xl text-gray-700 hover:text-primary transition-colors font-medium border-b border-gray-100"
    onClick={onClick}
  >
    {label}
  </a>
);

export default Navbar;
