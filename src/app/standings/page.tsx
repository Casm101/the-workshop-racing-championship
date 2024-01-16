/* eslint-disable @next/next/no-async-client-component */

// Module imports
import { PrismaClient } from "@prisma/client";

// Component imports
import { Table } from "../../components";

// Declare prisma
const prisma = new PrismaClient();


// Retrieve server side data
const getData = async () => {

  const drivers = await prisma.driver.findMany({
    include: {
      team: true,
      Result: true
    }
  });
  const teams = await prisma.team.findMany();
  return { drivers, teams };
};


// Standings page declaration
export default async function Standings() {

  // Page variable declarations
  const driverTableHeader = ['pos', 'driver', 'nationality', 'team', 'pts'];
  const teamTableHeader = ['pos', 'team', 'pts'];

  let view: 'drivers' | 'teams' = 'drivers';
  let viewTable = '2024 Driver Standings';

  // Toggle table view
  const toggleView = () => {
    view = view === 'drivers' ? 'teams' : 'drivers';
    viewTable = view === 'drivers' ? '2024 Team Standings' : '2024 Driver Standings';
  };

  // Get server data
  const { drivers, teams } = (await getData());


  return (
    <>
      <div className="page-header">
        <div className="content">
          <h1>2024 Driver Standings</h1>
          <p>Check out the current driver standings for the 2024 championship.</p>
        </div>
      </div>
      <Table
        header={driverTableHeader}
        body={
          drivers.map((driver, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{driver.mattermostTag}</td>
              <td>{driver.nationality}</td>
              <td className='thin'>{driver.team?.name}</td>
              <td>{0}</td>
            </tr>
          ))
        }
      />

      <div className="spacer" />

      <div className="page-header">
        <div className="content">
          <h1>2024 Constructor Standings</h1>
          <p>Place your bets and see how your colleagues are fairing for your department.</p>
        </div>
      </div>
      <Table
        header={teamTableHeader}
        body={
          teams.map((team, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td className="thin">{team.name}</td>
              <td>{0}</td>
            </tr>
          ))
        }
      />
    </>
  );
};


// Force page to be serverside rendered
export const dynamic = 'force-dynamic';
