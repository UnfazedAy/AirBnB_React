import './card.css';

export default function Card (props) {
 return (
  <div className="card">
    <img src={props.img} alt='An illustration' className='card-img'/>
    <div className='card-stats'>
      <img src={props.ratings} alt='ratings' className='card-star'/>
      <span className="gray">{props.range}</span>
      <span className="gray">{props.count}</span>
      <span className="gray">{props.country}</span>
    </div>
    <p>{props.text}</p>
    <p><span className="bold">{props.offer}</span>{props.unit}</p>
  </div>
 );
}
