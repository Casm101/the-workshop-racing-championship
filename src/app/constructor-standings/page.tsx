// Module imports
import { PrismaClient } from "@prisma/client";

// Component imports
import { Table } from "../../components";

// Declare prisma
const prisma = new PrismaClient();


// Retrieve server side data
const getData = async () => {
  const teams = await prisma.team.findMany();
  return { teams };
};


// Home page declaration
export default async function Home() {

  // Page variable declarations
  const tableHeader = ['pos', 'team', 'pts'];

  // Get server data
  const teams = (await getData()).teams;

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
