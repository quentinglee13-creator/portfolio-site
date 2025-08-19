export default function GraphicDesign() {
  const projects = [
    {
      img: "https://via.placeholder.com/400x500?text=Design+1",
      title: "Logo Design",
      desc: "A modern logo created for a tech startup."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Design+2",
      title: "Poster Art",
      desc: "Event poster for a local music festival."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Design+3",
      title: "Brand Identity",
      desc: "Complete branding package for a new business."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Graphic Design Portfolio</h1>
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
