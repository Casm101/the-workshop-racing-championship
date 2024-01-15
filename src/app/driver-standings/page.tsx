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
  console.log(drivers);
  return { drivers };
};


// Home page declaration
export default async function Home() {

  // Page variable declarations
  const tableHeader = ['pos', 'driver', 'nationality', 'team', 'pts'];

  // Get server data
  const drivers = (await getData()).drivers;

  return (
    <>
      <div className="page-header">
        <div className="content">
          <h1>2024 Driver Standings</h1>
        </div>
      </div>
      <Table
        header={tableHeader}
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
    </>
  );
};


// Force page to be serverside rendered
export const dynamic = 'force-dynamic';