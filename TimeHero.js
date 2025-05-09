import HoraFocusLogo from './HoraFocusLogo';

const TimeHero = () => {
  return (
    <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6 rounded-3xl shadow-xl mb-10 transform hover:scale-[1.01] transition-transform duration-300">
      <HoraFocusLogo />
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-3">Domina tu tiempo como un campeón</h2>
      <p className="text-xl text-white opacity-90">Las excusas caducan, pero HoraFocus es para siempre (o hasta que Netflix saque una nueva temporada)</p>
    </div>
  );
};

export default TimeHero;