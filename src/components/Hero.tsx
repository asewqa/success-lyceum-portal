import { Facebook, Instagram, Youtube, Mail, MapPin } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-[600px] flex items-center justify-center text-white">
      {/* Background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed"
        style={{
          backgroundImage: "url('/lovable-uploads/caa2b361-d008-4d06-9cc7-390c73f3a1ff.png')",
        }}
      >
        <div className="absolute inset-0 bg-primary/85 backdrop-blur-[2px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <img 
            src="/lovable-uploads/d4605e79-9ec5-4d31-bbfa-87b7238b8c05.png" 
            alt="Ліцей №17 Успіх" 
            className="mx-auto mb-12 max-w-2xl w-full animate-fade-in drop-shadow-lg"
          />
          <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
            Ласкаво просимо до Ліцею №17 "Успіх"
          </h1>
          <p className="text-xl md:text-2xl mb-8 animate-fade-in text-white/90">
            Якісна освіта для успішного майбутнього
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-white/90 backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-white/10">
          <div className="space-y-4">
            <div className="flex items-center gap-3 hover:text-secondary transition-colors">
              <MapPin className="w-6 h-6" />
              <p className="text-lg">58013, м. Чернівці, вул. Південно-Кільцева, 7-Б</p>
            </div>
            <div className="flex items-center gap-3 hover:text-secondary transition-colors">
              <Mail className="w-6 h-6" />
              <p className="text-lg">admin@lyceum-17.cv.ua</p>
            </div>
            <p className="text-sm opacity-75">Код ЄДРПОУ: 21431106</p>
          </div>

          {/* Social Media Links */}
          <div className="flex justify-center md:justify-end gap-8 items-center">
            <a 
              href="https://www.facebook.com/lyceum17.cv" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-all transform hover:scale-110"
            >
              <Facebook className="w-10 h-10" />
            </a>
            <a 
              href="https://www.instagram.com/lyceum.17/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-all transform hover:scale-110"
            >
              <Instagram className="w-10 h-10" />
            </a>
            <a 
              href="https://www.youtube.com/channel/UCelGG21u80l7RilV0WFIl3Q" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-secondary transition-all transform hover:scale-110"
            >
              <Youtube className="w-10 h-10" />
            </a>
          </div>
        </div>

        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-6 mt-16 animate-fade-in">
          <a 
            href="#about" 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Про нас
          </a>
          <a 
            href="#contacts" 
            className="bg-white hover:bg-gray-100 text-primary font-bold py-4 px-10 rounded-xl transition-all transform hover:scale-105 hover:shadow-lg"
          >
            Контакти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;