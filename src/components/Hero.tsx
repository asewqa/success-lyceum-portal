const Hero = () => {
  return (
    <div className="hero-pattern min-h-[600px] flex items-center justify-center text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <img 
          src="/lovable-uploads/d4605e79-9ec5-4d31-bbfa-87b7238b8c05.png" 
          alt="Ліцей №17 Успіх" 
          className="mx-auto mb-8 max-w-2xl w-full animate-fade-in"
        />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in">Ласкаво просимо до Ліцею №17 "Успіх"</h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in">Якісна освіта для успішного майбутнього</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 animate-fade-in">
          <a 
            href="#about" 
            className="bg-secondary hover:bg-secondary/90 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Про нас
          </a>
          <a 
            href="#contacts" 
            className="bg-white hover:bg-gray-100 text-primary font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Контакти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;