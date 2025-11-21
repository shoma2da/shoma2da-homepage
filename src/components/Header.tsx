import { Github } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 bg-white border-b border-[#e5e5e5] z-50">
      <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
        <a 
          href="https://shoma2da.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 hover:text-[#FF7A00] transition-colors cursor-pointer"
        >
          <span>Shoichi Matsuda</span>
          <span>👨‍💻</span>
        </a>
        
        <nav className="flex items-center gap-6">
          <a 
            href="https://blog.shoma2da.com" 
            className="hover:text-[#FF7A00] transition-colors"
          >
            Blog <span className="text-[#888888]">(Coming Soon)</span>
          </a>
          <a 
            href="https://github.com/shoma2da" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#FF7A00] transition-colors"
            aria-label="GitHub"
          >
            <Github className="w-5 h-5" />
          </a>
        </nav>
      </div>
    </header>
  );
}