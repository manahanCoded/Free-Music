const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
      card.querySelector(".icon").innerHTML = "<i class='fa-solid fa-circle-play'></i>";

  });

  card.addEventListener("mouseout", () => {
    card.querySelector(".icon").innerHTML = ""; // Clear the icon text
  });
});



const audio = document.getElementById("audio");
const playPauseButton = document.getElementById("play-pause");
const muteButton = document.getElementById("mute");
const progressBar = document.getElementById("progress");

//Click action
    document.querySelectorAll(".card")[0].addEventListener("click", function () {
        document.querySelector("audio").src="5PKQHJV-inspiration-ethnic-trailer.mp3"; 
        document.querySelector(".player_img img").src="Golden Hour.jpg"; 
    });

    document.querySelectorAll(".card")[1].addEventListener("click", function () {
      document.querySelector("audio").src="46GBEY9-hopeful-for.mp3"; 
    });

    document.querySelectorAll(".card")[2].addEventListener("click", function () {
      document.querySelector("audio").src="49YJQEB-looking-for-adventure.mp3"; 
    });
    
    document.querySelectorAll(".card")[3].addEventListener("click", function () {
        document.querySelector("audio").src="GKH9NUT-background-fun.mp3"; 
    });

    document.querySelectorAll(".card")[4].addEventListener("click", function () {
      document.querySelector("audio").src="NCLCMGP-sci-fi-background-cinematic.mp3"; 
    });

    document.querySelectorAll(".card")[5].addEventListener("click", function () {
      document.querySelector("audio").src="PAMH6RB-documentary-piano-epic-orchestra.mp3"; 
    });

    document.querySelectorAll(".card")[6].addEventListener("click", function () {
      document.querySelector("audio").src="SNJ9Z8M-cooking-show-background-music.mp3"; 
    });
    document.querySelectorAll(".card")[7].addEventListener("click", function () {
      document.querySelector("audio").src="TLG4RE7-background-corporate-inspiring.mp3"; 
    });

    document.querySelectorAll(".card")[8].addEventListener("click", function () {
      document.querySelector("audio").src="Z2WBSU6-death-metal-theme-ident.mp3"; 
    });

    
    playPauseButton.addEventListener("click", () => {
      if (audio.paused) {
        audio.play();
        playPauseButton.textContent = "Pause";
      } else {
        audio.pause();
        playPauseButton.textContent = "Play";
      }
    });
    
    muteButton.addEventListener("click", () => {
      audio.muted = !audio.muted;
    });
    
    audio.addEventListener("timeupdate", () => {
      const progress = audio.currentTime / audio.duration;
      progressBar.value = progress;
    });
    
    setTimeout(() => {
      audio.muted = false;
    }, 1000);