/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

// Module imports
import { PrismaClient } from "@prisma/client";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { FormEvent } from "react";

// Util imports
import { countryCodes } from "../../../utils/countryCodes";
import { logout } from "@/app/action/logout";


// Prisma declaration
const prisma = new PrismaClient();

// Retrieve data server side
const getData = async () => {

  try {
    const teams = await prisma.team.findMany();
    const driver = await prisma.driver.findUnique({
      where: {
        mattermostTag: cookies().get('session')?.value
      },
      include: {
        team: true
      }
    });
    return { driver, teams };
  } catch (err) {
    console.log(err);
  }

  redirect('/standings');
};


// Driver create page declaration
export default async function DriverCreatePage() {

  // Page variables
  const { driver, teams } = await getData();
  const driverTeam = teams.find(team => team.id === driver?.teamId)

  // Handle form submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    'use server'

    const formData: any = Object.fromEntries(e as unknown as Iterable<readonly [PropertyKey, any]>) satisfies typeof formData;

    try {
      driver && await prisma.driver.update({
        where: {
          id: driver.id
        },
        data: formData
      });

    } catch (err) {

    }

    redirect('/');
  };

  return (
    <>
      {/* Driver page header */}
      <div className="page-header">
        <div className="content">
          <h1>Profile</h1>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Create driver form */}
      <div>
        <form className="general-form" action={onSubmit as unknown as string}>
          <input type="text" name="name" placeholder="Name" required defaultValue={driver?.name} />
          <input type="text" name="surname" placeholder="Surname" required defaultValue={driver?.surname} />
          <input type="text" name="mattermostTag" placeholder="Mattermost tag" required defaultValue={driver?.mattermostTag} />
          <select name="nationality" required >
            <option disabled>Select nationality</option>
            {countryCodes.map((country, idx) => (
              <option defaultValue={driver?.nationality} key={idx}>{country.name}</option>
            ))}
          </select>
          <select name="teamId" required>
            <option disabled>Select team</option>
            {teams.map((team, idx) => (
              <option defaultValue={driverTeam?.id} key={idx}>{team.name.toUpperCase()}</option>
            ))}
          </select>
          <button type="submit">Update</button>
          <button onClick={logout}>Logout</button>
        </form>
      </div>
    </>
  );
};
