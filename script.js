const modal = document.getElementById("modal");
const modalName = document.getElementById("modalName");
const modalPrice = document.getElementById("modalPrice");
const closeModal = document.getElementById("closeModal");

document.querySelectorAll(".view-btn").forEach((button) => {
  button.addEventListener("click", () => {
    modalName.textContent = button.dataset.name;
    modalPrice.textContent = button.dataset.price;
    modal.classList.add("show");
  });
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});

modal.addEventListener("click", (event) => {
  if (event.target === modal) {
    modal.classList.remove("show");
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("show");
  }
});
