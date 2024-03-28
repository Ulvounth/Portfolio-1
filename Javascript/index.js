document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    fetch("YOUR_CLOUD_FUNCTION_URL", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((data) => alert("Message sent!"))
      .catch((error) => console.error("Error:", error));
  });
