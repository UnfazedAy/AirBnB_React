import './styles.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MultipleCard from './components/multipleCard';

export default function App () {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <MultipleCard />
    </div>
  );
}