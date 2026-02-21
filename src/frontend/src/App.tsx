import HeroSection from './components/HeroSection';
import WelcomeSection from './components/WelcomeSection';
import ShowcaseSection from './components/ShowcaseSection';
import ClosingSection from './components/ClosingSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <main className="flex-1">
        <HeroSection />
        <WelcomeSection />
        <ShowcaseSection />
        <ClosingSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
