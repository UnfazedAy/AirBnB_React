import airbnbMainImage from '../assets/airbnb_images.png';
import './hero.css';

export default function Hero () {
  return (
    <section className="hero">
      <img src={airbnbMainImage} alt='section images of Airbnb' className="hero-image"/>
      <h1 className="hero-header">Online Experiences</h1>
      <p className="hero-text">
        Join unique interactive activities led by 
        one-of-a-kind hosts—all without leaving home.
      </p>
    </section>
  );
}