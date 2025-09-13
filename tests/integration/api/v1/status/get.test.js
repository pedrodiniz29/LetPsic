import orchestrador from "tests/orchestrador.js";

beforeAll(async () => {
  await orchestrador.waitForAllServices();
});

test("Get api/v1/status should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/status");

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(200); //Verifica status

  expect(responseBody.updated_at).toBeDefined(); // Verifica se tem a propriedade
  expect(responseBody.dependencies).toBeDefined(); // Verifica se tem a propriedade
  expect(responseBody.dependencies.database).toBeDefined(); // Verifica se tem a propriedade
  expect(responseBody.dependencies.database.postgres_version).toBe("16.0"); // Verifica se tem a propriedade
  expect(responseBody.dependencies.database.db_active_connections).toBe(1); // Verifica se tem a propriedade
});
