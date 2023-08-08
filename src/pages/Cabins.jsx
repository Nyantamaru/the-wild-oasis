import { useEffect } from 'react';
import { getCabins } from '../services/apiCabins';
import Heading from '../ui/Heading';
import Row from '../ui/Row';

function Cabins() {
  useEffect(() => {
    getCabins().then((data) => console.log(data));
  }, []);
  return (
    <Row type="horizontal">
      <Heading as="h1">All cabins</Heading>
      <p>TEST</p>
      <img
        src="https://gfzuszbnjkbzfqtdygjo.supabase.co/storage/v1/object/public/cabin-images/cabin-001.jpg?t=2023-07-07T02%3A29%3A21.814Z"
        alt="cabin1"
      />
    </Row>
  );
}

export default Cabins;
