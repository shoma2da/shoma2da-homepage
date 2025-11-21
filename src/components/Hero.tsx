import { ImageWithFallback } from "./figma/ImageWithFallback";
import profileImage from "figma:asset/profile.png";

export function Hero() {
  return (
    <section className="max-w-4xl mx-auto px-6 py-20 text-center">
      <div className="flex justify-center mb-8">
        <div className="w-32 h-32 rounded-full overflow-hidden bg-[#e5e5e5] flex items-center justify-center">
          <ImageWithFallback 
            src={profileImage}
            alt="Shoichi Matsuda"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
      <h1 className="mb-6">Shoichi Matsuda</h1>
      
      <p className="w-full text-center mt-[0px] mr-auto mb-[16px] ml-auto">
        I’m Shoichi, a solo founder building AI and SaaS products. Let’s make something incredible 🚀
      </p>
    </section>
  );
}