import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migration(request, response) {
  const dbClient = await database.getNewClient();

  const migrationsObject = {
    dbClient: dbClient,
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
      const migrations_post = await migrationRunner({
        ...migrationsObject,
        dryRun: false,
      });
      await dbClient.end();
      if (migrations_post.length > 0) {
        return response.status(201).json(migrations_post);
      }
      return response.status(200).json(migrations_post);

    case "GET":
      const migrations_get = await migrationRunner(migrationsObject);
      await dbClient.end();
      return response.status(200).json(migrations_get);

    default:
      console.log("Entrou no DEFAULT");
      return response.status(405).end();
  }
}
