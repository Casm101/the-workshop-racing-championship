/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

// Module imports
import { PrismaClient } from "@prisma/client";

// Util imports
import { FormEvent } from "react";
import { redirect } from "next/navigation";


// Prisma declaration
const prisma = new PrismaClient();

// Retrieve data server side
const getData = async () => {
  const drivers = await prisma.driver.findMany();
  const races = await prisma.race.findMany();
  return { drivers, races };
};


// Driver create page declaration
export default async function DriverCreatePage() {

  // Page variables
  const { drivers, races } = await getData();

  // Handle form submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    'use server'

    const formData: any = Object.fromEntries(e as unknown as Iterable<readonly [PropertyKey, any]>) satisfies typeof formData;

    formData.position = parseInt(formData.position);
    formData.laps = parseInt(formData.laps);
    formData.points = parseInt(formData.points);

    try {
      await prisma.result.create({ data: formData });
    } catch (err) {
      console.log('Error creating result', err);
    }

    redirect('/driver-standings');
  };

  return (
    <>
      {/* Driver page header */}
      <div className="page-header centered">
        <div className="content">
          <h1>Create new driver</h1>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Create driver form */}
      <div>
        <form className="general-form" action={onSubmit as unknown as string}>
          <select name="raceId" defaultValue="-" required>
            <option value="-" disabled>Select race</option>
            {races.map((race, idx) => (
              <option value={race.id} key={idx}>{race.name.toUpperCase()}</option>
            ))}
          </select>
          <select name="driverId" defaultValue="-" required>
            <option value="-" disabled>Select driver</option>
            {drivers.map((driver, idx) => (
              <option value={driver.id} key={idx}>{driver.mattermostTag.toUpperCase()}</option>
            ))}
          </select>
          <input type="number" name="position" placeholder="Position" required />
          <input type="number" name="laps" placeholder="Laps" required />
          <input type="number" name="points" placeholder="Points" required />
          <input type="text" name="fastestlap" pattern="[0-9]{1,2}:[0-5][0-9]:[0-9]{1,3}" placeholder="Fastest lap (MM:SS:MS)" title="Format: MM:SS:MS" />
          <button type="submit">Create result</button>
        </form>
      </div>
    </>
  );
};
