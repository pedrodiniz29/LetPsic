import database from "infra/database.js";

async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = await database.query("SHOW server_version;");
  const dbActiveConnections = await database.query(
    "SELECT COUNT(*)::int FROM pg_stat_activity WHERE datname='postgres';",
  );
  const dbMaxConnections = await database.query("SHOW max_connections;");

  response.status(200).json({
    updated_at: updatedAt,
    dependencies: {
      database: {
        postgres_version: postgresVersion.rows[0].server_version,
        db_active_connections: dbActiveConnections.rows[0].count,
        db_max_connections: parseInt(dbMaxConnections.rows[0].max_connections),
      },
    },
  });
}
export default status;
