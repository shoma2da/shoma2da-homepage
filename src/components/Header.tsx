import { siGithub } from "simple-icons";

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
            href="https://github.com/shoma2da/shoma2da-homepage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-[#FF7A00] transition-colors"
            aria-label="GitHub"
          >
            <svg
              role="img"
              viewBox="0 0 24 24"
              className="w-5 h-5"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>{siGithub.title}</title>
              <path d={siGithub.path} />
            </svg>
          </a>
        </nav>
      </div>
    </header>
  );
}