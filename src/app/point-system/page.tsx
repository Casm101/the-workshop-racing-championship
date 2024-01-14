// Component imports
import { Table } from "../../components";


// Page variable declarations
const pointsTableHeader = ['position', 'points'];
const regularPoints = [
  {
    position: '1st',
    points: 25
  },
  {
    position: '2nd',
    points: 18
  },
  {
    position: '3rd',
    points: 15
  },
  {
    position: '4th',
    points: 12
  },
  {
    position: '5th',
    points: 10
  },
  {
    position: '6th',
    points: 8
  },
  {
    position: '7th',
    points: 6
  },
  {
    position: '8th',
    points: 4
  },
  {
    position: '9th',
    points: 2
  },
  {
    position: '10th',
    points: 1
  }
];

const sprintPoints = [
  {
    position: '1st',
    points: 8
  },
  {
    position: '2nd',
    points: 7
  },
  {
    position: '3rd',
    points: 6
  },
  {
    position: '4th',
    points: 5
  },
  {
    position: '5th',
    points: 4
  },
  {
    position: '6th',
    points: 3
  },
  {
    position: '7th',
    points: 2
  },
  {
    position: '8th',
    points: 1
  }
];


// Home page declaration
export default function Home() {

  return (
    <>
      {/* Page header */}
      <div className="page-header">
        <div className="content">
          <h1>The championship scoring systems</h1>
          <p>
            The scoring system used in the Workshop Racing Championship is borrowed from the official Formula 1 system, which has chenged other the years, but the basic concept stays the same - the higher a driver finishes, the more points the driver gets.
          </p>
          <p>
            The winner of each race gets 25 points, with 18 for second place and 15 if you get third spot on the podium. An extra 1 point is awarded to the driver and team who recorded the fastest lap (as long as they finished inside the top 10 points scoring positions).
          </p>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Regular scoring table */}
      <div className="page-header">
        <div className="content">
          <h2>How regular point scoring works</h2>
        </div>
      </div>
      <Table
        header={pointsTableHeader}
        body={
          regularPoints.map((pointSys, idx) => (
            <tr key={idx}>
              <td>{pointSys.position}</td>
              <td>{pointSys.points}</td>
            </tr>
          ))
        }
      />

      <div className="spacer"></div>

      {/* Sprint scoring table */}
      <div className="page-header">
        <div className="content">
          <h2>How sprint point scoring</h2>
          <p>
            As well as the one extra point for a fastest lap, sprint qualifying also awards points.
          </p>
        </div>
      </div>
      <Table
        header={pointsTableHeader}
        body={
          sprintPoints.map((pointSys, idx) => (
            <tr key={idx}>
              <td>{pointSys.position}</td>
              <td>{pointSys.points}</td>
            </tr>
          ))
        }
      />
    </>
  );
};
