import { useEffect, useState } from "react";

//components
import Hero from "./components/layout/Hero";
import About from "./components/layout/About";
import Footer from "./components/layout/Footer";
import Header from "./components/layout/Header";
import Contact from "./components/layout/Contact";
import Community from "./components/layout/Community";


function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle("dark", darkMode);
  }, [darkMode]);

  return (
    <main className="min-h-screen bg-white text-slate-950 antialiased transition-colors duration-300 dark:bg-brand-ink dark:text-white">
      <Header
        darkMode={darkMode}
        menuOpen={menuOpen}
        onMenu={() => setMenuOpen((open) => !open)}
        onTheme={() => setDarkMode((mode) => !mode)}
      />
      <Hero />
      <About />
      <Community />
      <Contact />
      <Footer />
    </main>
  );
}

export default App;