import { Client } from "pg";

async function query(queryObject) {
  const client = new Client({
    host: process.env.POSTGRES_HOST,
    user: process.env.POSTGRES_USER,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    ssl: process.env.NODE_ENV === "production" ? true : false,
  });

  try {
    await client.connect();
    const res = await client.query(queryObject);
    return res;
  } catch (error) {
    console.error;
    throw error;
  } finally {
    await client.end();
  }
}

export default {
  query: query,
};
