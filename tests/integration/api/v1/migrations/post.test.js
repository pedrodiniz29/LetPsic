import database from "infra/database.js";
import orchestrador from "tests/orchestrador.js";

beforeAll(async () => {
  await orchestrador.waitForAllServices();
  await database.query("drop schema public cascade; create schema public;");
});

test("Post api/v1/migration should return 201", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migration", {
    method: "POST",
  });

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(201); //Verifica status
  expect(Array.isArray(responseBody)).toBe(true); //Verifica se é um vetor
  expect(responseBody.length).toBeGreaterThan(0); //Verifica se o array não é em branco
  const migrationsDone = await database.query(
    "SELECT * FROM public.pgmigrations",
  );
  expect(migrationsDone.rows.length).toBeGreaterThan(0);

  const response2 = await fetch("http://localhost:3000/api/v1/migration", {
    method: "POST",
  });
  const responseBody2 = await response2.json();
  expect(response2.status).toBe(200); //Verifica status
  expect(Array.isArray(responseBody2)).toBe(true); //Verifica se é um vetor
  expect(responseBody2.length).toBe(0); //Verifica se o array é em branco
});
