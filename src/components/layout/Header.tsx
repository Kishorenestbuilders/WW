
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useIsMobile } from '@/hooks/use-mobile';

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { 
    name: 'Services', 
    href: '/services',
    submenu: [
      { name: 'Custom Software Development', href: '/services/custom-software' },
      { name: 'Software Consulting', href: '/services/consulting' },
      { name: 'Mobile & Web Development', href: '/services/mobile-web' },
      { name: 'SaaS Solutions', href: '/services/saas' },
      { name: 'Cloud Services', href: '/services/cloud' },
      { name: 'UI/UX Design', href: '/services/ui-ux' },
      { name: 'Quality Assurance', href: '/services/qa' },
      { name: 'Maintenance & Support', href: '/services/maintenance' },
    ] 
  },
  { name: 'Blog', href: '/blog' },
  { name: 'Careers', href: '/careers' },
  { name: 'Contact', href: '/contact' },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubmenu = (name: string) => {
    if (activeSubmenu === name) {
      setActiveSubmenu(null);
    } else {
      setActiveSubmenu(name);
    }
  };

  return (
    <header className={cn(
      "fixed w-full top-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-2" : "bg-transparent py-4"
    )}>
      <div className="container mx-auto px-4 flex justify-between items-center">
        <div className="flex items-center">
          <Link to="/" className="text-2xl font-bold text-whitewhiz-purple flex items-center">
            <span className="mr-2">White</span>
            <span className="font-light">Whiz</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <div key={item.name} className="relative group">
              {item.submenu ? (
                <>
                  <button 
                    className="flex items-center text-whitewhiz-gray-dark hover:text-whitewhiz-purple transition-colors"
                    onClick={() => toggleSubmenu(item.name)}
                  >
                    {item.name}
                    <ChevronDown className="ml-1 h-4 w-4" />
                  </button>
                  <div className={cn(
                    "absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 transition-all",
                    "opacity-0 invisible group-hover:opacity-100 group-hover:visible transform group-hover:translate-y-0",
                    "translate-y-2 duration-200 ease-in-out"
                  )}>
                    <div className="py-1">
                      {item.submenu.map((subitem) => (
                        <Link
                          key={subitem.name}
                          to={subitem.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-whitewhiz-purple"
                        >
                          {subitem.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <Link
                  to={item.href}
                  className="text-whitewhiz-gray-dark hover:text-whitewhiz-purple transition-colors"
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button className="bg-whitewhiz-purple hover:bg-whitewhiz-purple-light transition-colors">
            Get Started
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={toggleMenu}
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 pt-16 transition-transform duration-300 ease-in-out transform",
        isOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <div className="container mx-auto px-4 py-4">
          <nav className="space-y-4">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.submenu ? (
                  <>
                    <button 
                      className="flex items-center justify-between w-full py-2 text-whitewhiz-gray-dark border-b"
                      onClick={() => toggleSubmenu(item.name)}
                    >
                      {item.name}
                      <ChevronDown className={cn(
                        "h-4 w-4 transition-transform",
                        activeSubmenu === item.name ? "rotate-180" : ""
                      )} />
                    </button>
                    {activeSubmenu === item.name && (
                      <div className="ml-4 mt-2 space-y-2">
                        {item.submenu.map((subitem) => (
                          <Link
                            key={subitem.name}
                            to={subitem.href}
                            className="block py-2 text-sm text-gray-600 hover:text-whitewhiz-purple"
                            onClick={toggleMenu}
                          >
                            {subitem.name}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.href}
                    className="block py-2 text-whitewhiz-gray-dark border-b hover:text-whitewhiz-purple"
                    onClick={toggleMenu}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button className="w-full bg-whitewhiz-purple hover:bg-whitewhiz-purple-light transition-colors">
                Get Started
              </Button>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
