import migrationRunner from "node-pg-migrate";
import { join } from "node:path";

export default async function migration(request, response) {
  const migrationsObject = {
    databaseUrl: process.env.DATABASE_URL,
    dryRun: true,
    dir: join("infra", "migrations"),
    direction: "up",
    verbose: true,
    migrationsTable: "pgmigrations",
  };

  const method = request.method;

  console.log(method);
  switch (method) {
    case "POST":
      console.log("Entrou no POST");
      const migrations_post = await migrationRunner({
        ...migrationsObject,
        dryRun: false,
      });

      if (migrations_post.length > 0) {
        return response.status(201).json(migrations_post);
      }
      return response.status(200).json(migrations_post);

    case "GET":
      console.log("Entrou no GET");
      const migrations_get = await migrationRunner(migrationsObject);

      return response.status(200).json(migrations_get);

    default:
      console.log("Entrou no DEFAULT");
      return response.status(405).end();
  }
}
