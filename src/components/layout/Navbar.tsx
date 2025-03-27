import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

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
          ? "glass-effect shadow-sm backdrop-blur-lg bg-white/70"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24 md:h-28 lg:h-32">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img 
                src="/work_mate.png" 
                alt="ワークメイトAI"
                className="h-16 w-auto md:h-20 lg:h-24 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2">
            <NavItem href="#features" label="機能" />
            <NavItem href="#benefits" label="メリット" />
            <NavItem href="/pricing" label="料金" />
            <NavItem href="/blog" label="ブログ" />
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
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
            aria-label="Toggle menu"
          >
            <motion.div
              initial={false}
              animate={{ rotate: isMobileMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.2 }}
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5 text-gray-600" />
              ) : (
                <Menu className="w-5 h-5 text-gray-600" />
              )}
            </motion.div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden fixed inset-x-0 top-[96px] md:top-[112px] bg-white shadow-lg border-t border-gray-100 overflow-hidden"
          >
            <div className="container mx-auto px-4 py-4 md:py-6">
              <div className="flex flex-col space-y-2 md:space-y-3">
                <MobileNavItem href="#features" label="機能" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="#benefits" label="メリット" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="/pricing" label="料金" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="/blog" label="ブログ" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="#how-it-works" label="使い方" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="#faq" label="よくある質問" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="/guide" label="機能ガイド" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="/help" label="ヘルプセンター" onClick={() => setIsMobileMenuOpen(false)} />
                <MobileNavItem href="/contact" label="お問い合わせ" onClick={() => setIsMobileMenuOpen(false)} />
                <div className="pt-2 md:pt-3">
                  <Button asChild className="w-full bg-primary hover:bg-primary/90 text-white transition-all">
                    <Link to="/login" onClick={() => setIsMobileMenuOpen(false)}>ログイン</Link>
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

const NavItem = ({ href, label }: { href: string; label: string }) => (
  <a
    href={href}
    className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-primary transition-colors relative group"
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
    className="block py-3 text-base text-gray-700 hover:text-primary transition-colors font-medium hover:bg-gray-50 rounded-lg px-4"
    onClick={onClick}
  >
    {label}
  </a>
);

export default Navbar;
