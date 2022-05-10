import './App.css';
import Footer from './components/Footer';
import Header from './components/Header';
import MainSection from './components/MainSection';
import Services from './components/Services';
import WhyWe from './components/WhyWe';

function App() {
  return (
    <div className="App">
      <Header/>
      <MainSection/>
      <WhyWe/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App;
