const TimeToolCard = ({ tool }) => {
  return (
    <a 
      href={tool.url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="block bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 hover:-translate-y-1 border border-gray-100"
    >
      <div className="flex items-center mb-3">
        <span className="text-3xl mr-3">{tool.icon}</span>
        <h3 className="text-xl font-bold text-gray-800">{tool.name}</h3>
      </div>
      <p className="text-gray-600 mb-2">{tool.description}</p>
      <span className="inline-block px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
        {tool.category}
      </span>
    </a>
  );
};

export default TimeToolCard;