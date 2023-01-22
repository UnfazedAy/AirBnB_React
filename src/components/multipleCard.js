import athlete from '../assets/runner.png';
import mountainBike from '../assets/biker.png';
import bride from '../assets/wedding.png';
import Card from '../components/Card';

export default function MultipleCard () {
  return (
    <div className="identical">
      <Card 
        img={athlete}
        rating={5.0}
        reviewCount={6}
        location='USA'
        title='Life lessons with Katie Zafers'
        price='136'
      />
      <Card 
        img={bride}
        rating={5.0}
        reviewCount={30}
        location='USA'
        title='Life wedding photography'
        price='125'
      />
      <Card 
        img={mountainBike}
        rating={4.80}
        reviewCount={2}
        location='USA'
        title='Group mountain biking'
        price='50'
      />
    </div>
  );
}