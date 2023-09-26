let modal = document.querySelector("#myModal");
let img = document.querySelector(".project-card-img");
let modalImg = document.querySelector("#img");

// Open modal when image is clicked
img.onclick = function () {
  modal.style.display = "block";
  modalImg.src = this.src;

  // Close modal when clicked outside
  window.addEventListener("click", function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });
};
