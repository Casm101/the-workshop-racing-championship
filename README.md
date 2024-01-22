# The Workshop Racing Championship

Welcome to the official repository for The Workshop Racing Championship, a thrilling karting competition designed for the adrenaline seekers at our workplace. This event is open to all employees, providing an exciting opportunity to engage in friendly competition and team-building.

Check out the live site here: [The Workshop Racing Championship](http://racing-championship.christiansmithmantas.com/)

## About The Championship

The Workshop Racing Championship is an annual karting event that brings together colleagues from different departments for high-speed fun on the track. It's a chance to step away from the workstations and onto the race course, fostering camaraderie and a spirited community within our workplace.

## Features

- **Real-time Standings**: Stay up-to-date with the latest scores and rankings as the championship unfolds.
- **Driver Profiles**: Learn more about your colleagues-turned-competitors, their roles, and their racing stats.
- **Race Schedules**: Keep track of upcoming races, locations, and times so you never miss a race.
- **Point System**: Understand how drivers earn points throughout the championship.

## Technologies Used

This project leverages modern web technologies for a seamless and dynamic user experience. Here's a rundown of what's under the hood:

- **Next.js**: A powerful React framework that enables server-side rendering and generates static web pages for faster load times.
- **Prisma**: An open-source database toolkit that makes database access easy with an auto-generated and type-safe query builder.
- **TypeScript**: A typed superset of JavaScript that compiles down to plain JavaScript, ensuring type safety and enhancing development experience.
- **PostgreSQL**: A robust and reliable object-relational database system that offers scalability and performance for our application's data storage needs.
- **Sass (SCSS)**: A preprocessor scripting language that is interpreted or compiled into CSS, used for writing cleaner and more efficient stylesheets.


## Local Development

To get started with local development:

1. Clone the repository:
   ```bash
   git clone https://github.com/Casm101/the-workshop-racing-championship.git
   ```

2. Install dependencies
    ```bash
    npm i
    ```

3. Start the database
    ```bash 
    cd docker/postgres
    docker-compose up -d
    ```

4. Migrate and seed the database
    ```bash
    prisma migrate deploy
    npm run prisma:seed
    ```

5. Start the development server
    ```bash
    npm run dev
    ```

6. Open http://localhost:3000 with your browser to see the result.

## Contributions

We welcome contributions from our colleagues. If you have a suggestion to improve the site or want to add a new feature, feel free to fork this repository, make your changes, and submit a pull request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

A big thank you to all the participants who make this event possible.
Shoutout to the IT and DevOps teams for maintaining the infrastructure and keeping our karts on track.
