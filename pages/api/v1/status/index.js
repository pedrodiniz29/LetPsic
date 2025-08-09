function status(request, response) {
  response.status(200).json({
    response: "Deu certo",
  });
}
export default status;
