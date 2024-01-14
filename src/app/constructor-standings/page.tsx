// Component imports
import { Table } from "../../components";


// Page variable declarations
const tableHeader = ['pos', 'team', 'pts'];
const sampleTeams = [
  {
    name: 'Design',
    points: 20
  },
  {
    name: 'Games Co.',
    points: 20
  },
  {
    name: 'MSP',
    points: 20
  },
  {
    name: 'Core Tech',
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
        </div>
      </div>
      <Table
        header={tableHeader}
        body={
          sampleTeams.map((team, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td className="thin">{team.name}</td>
              <td>{team.points}</td>
            </tr>
          ))
        }
      />
    </>
  );
};
