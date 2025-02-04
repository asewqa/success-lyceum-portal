const Hero = () => {
  return (
    <div className="hero-pattern min-h-[600px] flex items-center justify-center text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <img 
          src="/lovable-uploads/d4605e79-9ec5-4d31-bbfa-87b7238b8c05.png" 
          alt="Ліцей №17 Успіх" 
          className="mx-auto mb-8 max-w-2xl w-full"
        />
        <h1 className="text-4xl font-bold mb-4">Ласкаво просимо до Ліцею №17 "Успіх"</h1>
        <p className="text-xl mb-8">Якісна освіта для успішного майбутнього</p>
        <div className="flex justify-center gap-4">
          <a href="#about" className="bg-secondary hover:bg-secondary/90 text-white font-bold py-2 px-6 rounded-lg">
            Про нас
          </a>
          <a href="#contacts" className="bg-white hover:bg-gray-100 text-primary font-bold py-2 px-6 rounded-lg">
            Контакти
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;