import './card.css';
import star from '../assets/Star.png';

export default function Card (props) {
 return (
  <div className="card">
    <img src={props.img} alt='An illustration' className='card-img'/>
    <div className='card-stats'>
      <img src={star} alt='ratings' className='card-star'/>
      <span className="gray"> {props.rating}</span>
      <span className="gray">{props.reviewCount} • </span>
      <span className="gray">{props.location}</span>
    </div>
    <p>{props.text}</p>
    <p><span className="bold">From ${props.price}</span> / person</p>
  </div>
 );
}
