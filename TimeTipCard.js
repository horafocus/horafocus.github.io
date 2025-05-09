const TimeTipCard = ({ icon, title, description, color }) => {
  return (
    <div className={`${color} p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-white hover:border-gray-200`}>
      <div className="text-4xl mb-4">{icon}</div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-700">{description}</p>
    </div>
  );
};

export default TimeTipCard;