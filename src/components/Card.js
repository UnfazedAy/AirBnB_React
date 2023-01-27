import './card.css';
import star from '../assets/Star.png';

export default function Card (props) {
  let badgeText;
  if (props.dataset.openSpots === 0) badgeText = 'SOLD OUT';
  else if (props.dataset.location === 'Online') badgeText = 'ONLINE';
 
  return (
  <div className="card">
    {badgeText && <div className='card-barge'>{badgeText}</div>}
    <img src={props.dataset.coverImg} alt='An illustration' className='card-img'/>
    <div className='card-stats'>
      <img src={star} alt='ratings' className='card-star'/>
      <span className="gray"> {props.dataset.stats.rating}</span>
      <span className="gray"> ({props.dataset.stats.reviewCount}) •</span>
      <span className="gray"> {props.dataset.location}</span>
    </div>
    <p>{props.dataset.title}</p>
    <p><span className="bold">From ${props.dataset.price}</span> / person</p>
  </div>
 );
}
