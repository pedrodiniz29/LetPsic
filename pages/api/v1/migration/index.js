import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migration(request, response) {
  const method = request.method;
  console.log(method);
  switch (method) {
    case "POST":
      console.log("Entrou no POST");
      response.status(201).json([]);
      break;

    case "GET":
      console.log("Entrou no GET");
      const migrations = await migrationRunner({
        databaseUrl: process.env.DATABASE_URL,
        dryRun: true,
        dir: join("infra", "migrations"),
        direction: "up",
        verbose: true,
        migrationsTable: "pgmigrations",
      });

      response.status(200).json([]);
      break;
    default:
      console.log("Entrou no DEFAULT");
      response.status(405);
      break;
  }
}
