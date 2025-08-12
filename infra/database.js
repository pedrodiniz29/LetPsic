import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: true,
  });
  await client.connect();

  const res = await client.query(queryObject);

  await client.end();
  return res;
}

export default {
  query: query,
};
