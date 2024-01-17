/* eslint-disable @next/next/no-async-client-component */

// Module imports
import { PrismaClient } from "@prisma/client";

// Component imports
import { Table, Countdown } from "../../components";

// Util imports
import { monthsShort } from "../../utils/months";


// Declare prisma
const prisma = new PrismaClient();


// Retrieve server side data
const getData = async () => {
  const races = await prisma.race.findMany({
    orderBy: {
      date: 'asc'
    },
    include: {
      Result: true
    }
  });
  return { races };
};


// Standings page declaration
export default async function Standings() {

  // Page variable declarations
  const raceTableHeader = ['grand prix', 'date', 'winner', 'kart', 'laps', 'time'];

  // Get server data
  const { races } = (await getData());


  return (
    <>
      <div className="page-header">
        <div className="content">
          <h1>Next race</h1>
          <p>Here&apos;s the info on the upcoming race.</p>
        </div>
      </div>

      <Countdown targetDate={races[0].date} />

      <div className="spacer" />

      <div className="page-header">
        <div className="content">
          <h1>Races</h1>
          <p>Check out the current races so far for this season.</p>
        </div>
      </div>
      <Table
        header={raceTableHeader}
        body={
          races.map((race, idx) => (
            <tr key={idx}>
              <td>{race.name}</td>
              <td className="thin">{new Date(race.date).getUTCDate()} {monthsShort[new Date(race.date).getUTCMonth()]} {new Date(race.date).getUTCFullYear()}</td>
              <td>{race.Result[0]?.driverId || 'TBD'}</td>
              <td>{race.Result[0]?.driverId || 'TBD'}</td>
              <td>{race.Result[0]?.laps || 'TBD'}</td>
              <td>{race.Result[0]?.fastestlap || 'TBD'}</td>
            </tr>
          ))
        }
      />
    </>
  );
};


// Force page to be serverside rendered
export const dynamic = 'force-dynamic';
