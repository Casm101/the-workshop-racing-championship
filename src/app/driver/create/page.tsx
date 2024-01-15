/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

// Module imports
import { PrismaClient } from "@prisma/client";

// Util imports
import { countryCodes } from "../../../utils/countryCodes";
import { FormEvent } from "react";


// Prisma declaration
const prisma = new PrismaClient();

// Retrieve data server side
const getData = async () => {
  const teams = await prisma.team.findMany();
  return { teams };
};


// Driver create page declaration
export default async function DriverCreatePage() {

  // Page variables
  const teams = (await getData()).teams;

  // Handle form submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    'use server'

    const formData: any = Object.fromEntries(e as unknown as Iterable<readonly [PropertyKey, any]>) satisfies typeof formData;
    const driver = await prisma.driver.create({ data: formData });
    console.log(driver);
  };

  return (
    <>
      {/* Driver page header */}
      <div className="page-header">
        <div className="content">
          <h1>Create new driver</h1>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Create driver form */}
      <div>
        <form action={onSubmit as unknown as string}>
          <input type="text" name="name" />
          <input type="text" name="surname" />
          <input type="text" name="mattermostTag" />
          <select name="nationality" defaultValue="-">
            <option value="-" disabled>Select nationality</option>
            {countryCodes.map((country, idx) => (
              <option value={country.alpha3} key={idx}>{country.name}</option>
            ))}
          </select>
          <select name="teamId" defaultValue="-">
            <option value="-" disabled>Select team</option>
            {teams.map((team, idx) => (
              <option value={team.id} key={idx}>{team.name.toUpperCase()}</option>
            ))}
          </select>
          <button type="submit">Create driver</button>
        </form>
      </div>
    </>
  );
};
