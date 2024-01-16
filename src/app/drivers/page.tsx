// Module imports
import { DriverCard, DriverCardProps } from "@/components";
import { PrismaClient } from "@prisma/client";

// Component imports

// Declare prisma
const prisma = new PrismaClient();


// Retrieve server side data
const getData = async () => {

  const drivers = await prisma.driver.findMany({
    orderBy: {
      surname: "asc"
    },
    include: {
      team: true
    }
  });
  return { drivers };
};


// Home page declaration
export default async function Home() {

  // Get server data
  const drivers = (await getData()).drivers;

  return (
    <>
      <div className="page-header">
        <div className="content">
          <h1>Championship Drivers 2024</h1>
          <p>Check out this seasson&apos;s line-up. Full breakdown of drivers, points and current positions. Follow your collegues on and off the track.</p>
        </div>
      </div>
      <div className="grid">
        {drivers.map((driver, idx) => (
          <DriverCard {...driver as DriverCardProps} key={idx} />
        ))}
      </div>
    </>
  );
};


// Force page to be serverside rendered
export const dynamic = 'force-dynamic';
