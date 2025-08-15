test("Post api/v1/migration should return 201", async () => {
  const response = await fetch("http://localhost:3000/api/v1/migration", {
    method: "POST",
  });

  const responseBody = await response.json();
  console.log(responseBody);
  expect(response.status).toBe(201); //Verifica status
});
