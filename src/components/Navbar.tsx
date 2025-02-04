import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <img 
                className="h-12 w-auto" 
                src="/lovable-uploads/84072c03-22dc-478f-b3f3-f76b27c02809.png" 
                alt="Ліцей №17 Успіх" 
              />
            </div>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white">Головна</a>
              <a href="#news" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white">Новини</a>
              <a href="#about" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white">Про нас</a>
              <a href="#gallery" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white">Галерея</a>
              <a href="#contacts" className="px-3 py-2 rounded-md text-sm font-medium hover:bg-secondary hover:text-white">Контакти</a>
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-secondary focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Головна</a>
            <a href="#news" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Новини</a>
            <a href="#about" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Про нас</a>
            <a href="#gallery" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Галерея</a>
            <a href="#contacts" className="block px-3 py-2 rounded-md text-base font-medium hover:bg-secondary">Контакти</a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;