// Module imports
import { PrismaClient } from "@prisma/client";

// Prisma declaration
const prisma = new PrismaClient();


// Championship seed data
const championshipData = {
    id: 'clrdl92p80000wmgomq8l75ku',
    year: 2024
};

// Team seed data
const teamData = [
    { name: 'Architechture' },
    { name: 'BI Analytics' },
    { name: 'Comercial' },
    { name: 'Crypto' },
    { name: 'Data' },
    { name: 'Design' },
    { name: 'DevOps' },
    { name: 'Finance' },
    { name: 'Games' },
    { name: 'ITSG' },
    { name: 'Leadership' },
    { name: 'Legal' },
    { name: 'Marketing' },
    { name: 'Operations' },
    { name: 'Payments' },
    { name: 'People' },
    { name: 'Players' },
    { name: 'Procurement' },
    { name: 'Product Development' },
    { name: 'Product' },
    { name: 'Research' },
    { name: 'Security' },
    { name: 'Service Delivery' },
    { name: 'Sports' },
    { name: 'Workplace' },
];

// Race seed data
const raceData = [
    {
        name: 'Campillos January',
        location: 'Karting Campillos',
        date: new Date(2024, 0, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos Feburay',
        location: 'Karting Campillos',
        date: new Date(2024, 1, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos March',
        location: 'Karting Campillos',
        date: new Date(2024, 2, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos April',
        location: 'Karting Campillos',
        date: new Date(2024, 3, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos May',
        location: 'Karting Campillos',
        date: new Date(2024, 4, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos June',
        location: 'Karting Campillos',
        date: new Date(2024, 5, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos July',
        location: 'Karting Campillos',
        date: new Date(2024, 6, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos August',
        location: 'Karting Campillos',
        date: new Date(2024, 7, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos September',
        location: 'Karting Campillos',
        date: new Date(2024, 8, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos October',
        location: 'Karting Campillos',
        date: new Date(2024, 9, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos November',
        location: 'Karting Campillos',
        date: new Date(2024, 10, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    },
    {
        name: 'Campillos December',
        location: 'Karting Campillos',
        date: new Date(2024, 11, 27),
        championshipId: 'clrdl92p80000wmgomq8l75ku'
    }
];


// Seed role data to DB
const main = async () => {
    try {

        // Seed championship data
        await prisma.championship.deleteMany();
        const championships = await prisma.championship.createMany({ data: championshipData })

        // Seed team data
        await prisma.team.deleteMany();
        const teams = await prisma.team.createMany({ data: teamData });

        // Seed race data
        await prisma.race.deleteMany();
        const races = await prisma.race.createMany({ data: raceData });

        console.log({
            championships,
            teams,
            races
        });

        await prisma.$disconnect();
    } catch (err) {
        console.error(err);
        await prisma.$disconnect();
        process.exit(1);
    }
};

// Seed database with roles
main();