import athlete from '../assets/runner.png';
import star from '../assets/Star.png';
import mountainBike from '../assets/biker.png';
import bride from '../assets/wedding.png';
import Card from '../components/Card';

export default function MultipleCard () {
  return (
    <div className="identical">
      <Card 
        img={athlete}
        ratings={star}
        range="5.0 "
        count='(6) • '
        country='USA'
        text='Life lessons with Katie Zafers'
        offer='From $136'
        unit=' / person'
      />
      <Card 
        img={bride}
        ratings={star}
        range="5.0 "
        count='(30) • '
        country='USA'
        text='Life wedding photography'
        offer='From $125'
        unit=' / person'
      />
      <Card 
        img={mountainBike}
        ratings={star}
        range="4.80 "
        count='(2) • '
        country='USA'
        text='Group mountain biking'
        offer='From $50'
        unit=' / person'
      />
    </div>
  );
}