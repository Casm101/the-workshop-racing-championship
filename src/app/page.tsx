// Component imports
import { Table } from "../components";


// Page variable declarations
const tableHeader = ['pos', 'driver', 'nationality', 'pts'];
const sampleDrivers = [
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    points: 20
  }
];

// Home page declaration
export default function Home() {

  return (
    <>
      <Table
        header={tableHeader}
        body={sampleDrivers}
      />
    </>
  );
};
