export default function BrandMarketing() {
  const projects = [
    {
      img: "https://via.placeholder.com/400x500?text=Marketing+1",
      title: "Social Campaign",
      desc: "Instagram campaign for a fashion brand."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Marketing+2",
      title: "Product Launch",
      desc: "Strategy and creative for a new product launch."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Marketing+3",
      title: "Influencer Collab",
      desc: "Collaboration with influencers to boost brand awareness."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Brand Marketing Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center">
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl"
            />
            <div className="p-6 w-full">
              <h2 className="text-2xl font-semibold mb-2">{proj.title}</h2>
              <p className="text-gray-600">{proj.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
