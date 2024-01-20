/* eslint-disable @next/next/no-async-client-component */
/* eslint-disable react-hooks/exhaustive-deps */

// Module imports
import { PrismaClient } from "@prisma/client";

// Util imports
import { FormEvent } from "react";
import { redirect } from "next/navigation";


// Prisma declaration
const prisma = new PrismaClient();


// Driver create page declaration
export default async function DriverCreatePage() {

  // Handle form submit
  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    'use server'

    const formData: any = Object.fromEntries(e as unknown as Iterable<readonly [PropertyKey, any]>) satisfies typeof formData;

    try {
      const driver = await prisma.driver.findUnique({
        where: {
          mattermostTag: formData.mattermostTag
        }
      });

      console.log(driver);

    } catch (err) {

    }

    // redirect('/driver-standings');
  };

  return (
    <>
      {/* Driver page header */}
      <div className="page-header centered">
        <div className="content">
          <h1>Driver log in</h1>
        </div>
      </div>

      <div className="spacer"></div>

      {/* Driver login form */}
      <div>
        <form className="general-form" action={onSubmit as unknown as string}>
          <input type="text" name="mattermostTag" placeholder="Mattermost tag" required />
          <input type="password" name="password" placeholder="Password" required />
          <button type="submit">Login</button>
          <a href="/drivers/sign-up" className="link-button">Sign up</a>
        </form>
      </div>
    </>
  );
};
