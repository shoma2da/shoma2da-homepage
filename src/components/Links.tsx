import { siX, siGithub, siFacebook } from "simple-icons";

export function Links() {
  const links = [
    { 
      icon: "x", 
      label: "X (English)", 
      url: "https://x.com/EnglishMarcos",
      iconData: siX
    },
    { 
      icon: "x", 
      label: "X (Japanese)", 
      url: "https://x.com/shoma2da",
      iconData: siX
    },
    { 
      icon: "github", 
      label: "GitHub", 
      url: "https://github.com/shoma2da",
      iconData: siGithub
    },
    { 
      icon: "facebook", 
      label: "Facebook", 
      url: "https://www.facebook.com/marcos.shoichi.matsuda",
      iconData: siFacebook
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
              {item.iconData && (
                <svg
                  role="img"
                  viewBox="0 0 24 24"
                  className="w-6 h-6 text-[#888888] group-hover:text-[#FF7A00] transition-colors"
                  fill="currentColor"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>{item.iconData.title}</title>
                  <path d={item.iconData.path} />
                </svg>
              )}
              <span>{item.label}</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}