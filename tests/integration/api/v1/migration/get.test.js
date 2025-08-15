test("Get api/v1/migration should return 200", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migration");

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(200); //Verifica status
  expect(Array.isArray(responseBody)).toBe(true); //Verifica se é um vetor
});
