import Card from '../components/Card';
import data from '../components/data';

export default function MultipleCard () {
  const datasets = data.map((dataset) => {
    return (
      <Card
        img={dataset.coverImg}
        rating={dataset.stats.rating}
        reviewCount={dataset.stats.reviewCount}
        location={dataset.location}
        title={dataset.title}
        price={dataset.price}
      />
    )
  });

  return (
    <div className='identical'>
      {datasets}
    </div>
  );
}