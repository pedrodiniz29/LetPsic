import migrationRunner from "node-pg-migrate";
import { join } from "node:path";
import database from "infra/database.js";

export default async function migration(request, response) {
  let dbClient;

  try {
    dbClient = await database.getNewClient();
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
    let migrations;
    switch (method) {
      case "POST":
        console.log("Entrou no POST");
        migrations = await migrationRunner({
          ...migrationsObject,
          dryRun: false,
        });
        if (migrations.length > 0) {
          return response.status(201).json(migrations);
        }
        return response.status(200).json(migrations);

      case "GET":
        console.log("Entrou no GET");
        migrations = await migrationRunner(migrationsObject);
        return response.status(200).json(migrations);

      default:
        console.log("Entrou no DEFAULT");
        return response.status(405).end();
    }
  } catch (error) {
    console.log(error);
    throw error;
  } finally {
    await dbClient.end();
  }
}
