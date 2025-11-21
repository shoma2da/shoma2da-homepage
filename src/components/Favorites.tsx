import { Music, Drum, Guitar, Film, Map, Footprints, PenTool } from "lucide-react";

export function Favorites() {
  const favorites = [
    { icon: Music, label: "Music" },
    { icon: Drum, label: "Playing drums & guitar" },
    { icon: Film, label: "Watching movies and TV series" },
    { icon: Footprints, label: "Walking" },
    { icon: Map, label: "Looking at maps" },
    { icon: PenTool, label: "Practicing calligraphy" },
  ];

  return (
    <section className="max-w-4xl mx-auto px-6 py-16">
      <h2>Things I Like</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl">
        {favorites.map((item, index) => {
          const Icon = item.icon;
          return (
            <div 
              key={index} 
              className="flex items-center gap-4 p-4 rounded-lg group"
            >
              <Icon className="w-6 h-6 text-[#888888] group-hover:text-[#FF7A00] transition-colors" />
              <span>{item.label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}