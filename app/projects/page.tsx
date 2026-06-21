export default function ProjectsPage() {
  const projects = [
    "/projects/project1.jpg",
    "/projects/project2.jpg",
    "/projects/project3.jpg",
    "/projects/project4.jpg",
    "/projects/project5.jpg",
    "/projects/project6.jpg",
  ];

  return (
    <main className="min-h-screen bg-black text-white px-8 py-24">

      <h1 className="text-5xl font-bold text-yellow-500 text-center mb-12">
        Projects / المشاريع
      </h1>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">

        {projects.map((img, i) => (
          <div key={i} className="rounded-xl overflow-hidden border border-zinc-700">
            
            <img
              src={img}
              className="h-64 w-full object-cover hover:scale-105 transition"
            />

            <div className="p-4">
              <h2 className="text-yellow-500 font-bold">
                Project {i + 1}
              </h2>
              <p className="text-gray-400 text-sm">
                Construction & infrastructure project
              </p>
            </div>

          </div>
        ))}

      </div>
    </main>
  );
}