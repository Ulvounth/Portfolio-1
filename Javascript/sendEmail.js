exports.sendContactMessage = (req, res) => {
  if (req.method !== "POST") {
    res.status(405).send("Method Not Allowed");
    return;
  }

  // Extract the form data
  const name = req.body.name;
  const email = req.body.email;
  const message = req.body.message;

  // TODO: Add your logic here to process the message,
  // such as sending an email with the form data

  res.status(200).send("Message received successfully!");
};
