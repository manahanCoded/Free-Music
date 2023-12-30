const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
      card.querySelector(".icon").innerHTML = "<i class='fa-solid fa-circle-play'></i>";

  });

  card.addEventListener("mouseout", () => {
    card.querySelector(".icon").innerHTML = ""; // Clear the icon text
  });
});