import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import Projetos from './components/Projetos/Projetos';
import Sobre from './components/Sobre/Sobre';
import Footer from './components/Footer/Footer';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Hero />
      <Projetos />
      <Sobre />
      <Footer />
    </>
  );
}

export default App;
