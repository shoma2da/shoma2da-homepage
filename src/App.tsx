import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Biography } from "./components/Biography";
import { Favorites } from "./components/Favorites";
import { Links } from "./components/Links";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Biography />
      <Favorites />
      <Links />
      <Footer />
    </div>
  );
}
