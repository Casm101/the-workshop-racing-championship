// Component imports
import { Table } from "../../components";


// Page variable declarations
const tableHeader = ['pos', 'driver', 'nationality', 'team', 'pts'];
const sampleDrivers = [
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  },
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  },
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  }, {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  },
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  },
  {
    name: 'Laurent',
    surname: 'Spitaels',
    nationality: 'BEL',
    team: 'MSP',
    points: 50
  },
  {
    name: 'Amit',
    surname: 'Kumar',
    nationality: 'GER',
    team: 'Core Tech',
    points: 40
  },
  {
    name: 'Ernesto',
    surname: 'Sin',
    nationality: 'MEX',
    team: 'Design',
    points: 30
  },
  {
    name: 'Christian',
    surname: 'Smith Mantas',
    nationality: 'GBR / ESP',
    team: 'Games Co.',
    points: 20
  }
];

// Home page declaration
export default function Home() {

  return (
    <>
      <div className="page-header">
        <div className="content">
          <h1>2024 Constructor Standings</h1>
          <p>Hello there</p>
        </div>
      </div>
      <Table
        header={tableHeader}
        body={
          sampleDrivers.map((driver, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{driver.surname.split(' ')[0]}</td>
              <td>{driver.nationality}</td>
              <td className='thin'>{driver.team}</td>
              <td>{driver.points}</td>
            </tr>
          ))
        }
      />
    </>
  );
};
