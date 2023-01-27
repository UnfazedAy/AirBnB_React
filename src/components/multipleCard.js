import Card from '../components/Card';
import data from '../components/data';

export default function MultipleCard () {
  const datasets = data.map((dataset) => {
    return (
      <Card
        key={dataset.id}
        dataset={dataset}
      />
    )
  });

  return (
    <div className='identical'>
      {datasets}
    </div>
  );
}
