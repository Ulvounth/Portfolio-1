document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(this);
    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    fetch("/.netlify/functions/sendEmail.js", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log("Success:", data);
        // Handle success (show success message, clear form, etc.)
      })
      .catch((error) => {
        console.error("Error:", error);
        // Handle error (show error message)
      });
  });
