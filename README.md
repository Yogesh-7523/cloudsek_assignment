# Post Commenting Service


This application is a post commenting service where each post can have comments, and these comments can have child comments. Comments are editable even after they have been posted. Users can make their comments bold, italic, and also add links to their comments.

## Tech Stack
- Frontend: React.js
- Backend: Fastify, Node.js
- Database: Postgres
- ORM: Prisma

## Installation Process

Follow the steps below to set up the application:

1. **Client Setup**:
    - Navigate to the client folder.
    - Install all the dependencies using the command:
        ```bash
        npm install
        ```
    - Start the client using the command:
        ```bash
        npm start
        ```

2. **Server Setup**:
    - Navigate to the server folder.
    - In the `.env` file, replace the placeholders with your actual Supabase URL for DB storage in PostgreSQL.
    - Run the following commands:
        - To migrate the database using Prisma:
            ```bash
            npx prisma migrate dev
            ```
        - To seed the database:
            ```bash
            npx prisma db seed
            ```
        - To start the server:
            ```bash
            npm run devStart
            ```

## About Prisma and PostgreSQL
- **Prisma**: Prisma is an open-source database toolkit that helps developers to easily interact with their database.
- **PostgreSQL**: PostgreSQL is a powerful, open-source object-relational database system with a strong reputation for reliability, feature robustness, and performance.

## Note
Please replace the placeholders with your actual data where necessary. Also, ensure that you have Node.js and npm installed on your machine before running these commands.
