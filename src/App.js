import ScrollReveal from 'scrollreveal';

import Header from './components/Header';
import Intro from './components/Intro';
import Features from './components/Features';
import Extensions from './components/Extensions';
import Ask from './components/Ask';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {

  ScrollReveal().reveal('#intro', { origin: 'top', duration: 1000, delay: 150, distance: '100px', scale: 1, easing: 'ease' });
  ScrollReveal().reveal('#features', { origin: 'top', duration: 1000, delay: 150, distance: '100px', scale: 1, easing: 'ease' });
  ScrollReveal().reveal('#extensions', { origin: 'top', duration: 1000, delay: 150, distance: '100px', scale: 1, easing: 'ease' });
  ScrollReveal().reveal('#ask', { origin: 'top', duration: 1000, delay: 150, distance: '100px', scale: 1, easing: 'ease' });
  ScrollReveal().reveal('#contact', { origin: 'top', duration: 1000, delay: 150, distance: '100px', scale: 1, easing: 'ease' });

  return (
    <div className="font-medium">
      <Header />
      <Intro />
      <Features />
      <Extensions />
      <Ask />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
