/* eslint-disable @next/next/no-async-client-component */
'use client'

import { useState, useEffect } from "react";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Standings page declaration
export default function Test() {

  const [isVisible, setVisibility] = useState(true);
  const visibilityClass = isVisible ? '' : 'invisible';

  const [teams, setTeams] = useState<any[]>([]);



  return (
    <>
      <button onClick={() => setVisibility(false)} className={visibilityClass}>Dissapear</button>

      {teams.map((t) => {
        <p>t.name</p>
      })}
    </>
  );
};
