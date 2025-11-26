import { Github, Facebook } from "lucide-react";

export function Links() {
  const links = [
    { 
      icon: "X", 
      label: "X (English)", 
      url: "https://x.com/EnglishMarcos" 
    },
    { 
      icon: "X", 
      label: "X (Japanese)", 
      url: "https://x.com/shoma2da" 
    },
    { 
      icon: Github, 
      label: "GitHub", 
      url: "https://github.com/shoma2da" 
    },
    { 
      icon: Facebook, 
      label: "Facebook", 
      url: "https://www.facebook.com/marcos.shoichi.matsuda" 
    },
  ];

  return (
    <section className="w-full py-16 bg-[#fafafa]">
      <div className="max-w-4xl mx-auto px-6">
        <h2>Links</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {links.map((item, index) => (
            <a
              key={index}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 p-4 bg-white rounded-lg border border-[#e5e5e5] hover:border-[#FF7A00] transition-colors group"
            >
              {typeof item.icon === "string" ? (
                <div className="w-6 h-6 flex items-center justify-center text-[#888888] group-hover:text-[#FF7A00] transition-colors">
                  <span>𝕏</span>
                </div>
              ) : (
                <item.icon className="w-6 h-6 text-[#888888] group-hover:text-[#FF7A00] transition-colors" />
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}