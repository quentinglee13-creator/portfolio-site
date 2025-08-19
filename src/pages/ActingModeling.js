import { Link } from "react-router-dom";

export default function ActingModeling() {
  const projects = [
    {
      img: "https://via.placeholder.com/400x500?text=Acting+1",
      title: "Commercial Shoot",
      desc: "A still from a national TV commercial campaign."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Modeling+1",
      title: "Brand Representation",
      desc: "Walking the runway at LA Fashion Week."
    },
    {
      img: "https://via.placeholder.com/400x500?text=Acting+2",
      title: "Film Role",
      desc: "On set for an indie film project."
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-16 px-4">
      <h1 className="text-4xl font-bold text-center mb-12">Acting / Modeling Portfolio</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col items-center">
            <Link to="/acting-modeling/gallery">
              <img
                src={proj.img}
                alt={proj.title}
                className="w-full h-80 object-cover transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer"
              />
            </Link>
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
