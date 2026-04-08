function status(request, response) {
  response.status(200).json({message: "Martin's Test API is up and running!"});
}

export default status;
