import database from "infra/database.js";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("Get api/v1/migration should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migration");

  console.log(process.env.NODE_ENV);
  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(200); //Verifica status
  expect(Array.isArray(responseBody)).toBe(true); //Verifica se é um vetor
  expect(responseBody.length).toBeGreaterThan(0); //Verifica se o array não é em branco
});
