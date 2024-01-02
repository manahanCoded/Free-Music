const cards = document.querySelectorAll(".card");

cards.forEach(card => {
  card.addEventListener("mouseover", () => {
      card.querySelector(".icon").innerHTML = "<i class='fa-solid fa-circle-play'></i>";

  });

  card.addEventListener("mouseout", () => {
    card.querySelector(".icon").innerHTML = ""; // Clear the icon text
  });
});





//Click action
   
document.querySelector(".download_header i").addEventListener("click",function(){
  document.querySelector(".download_container").classList.add("hide");
});


    document.querySelectorAll(".card")[1].addEventListener("click", function () {
      document.querySelector("audio").src="juice wrld ~ all girls are the same ﾉ slowed + reverb ﾉ.mp3";
      document.querySelector("#album_play").src="Golden Hour.jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Golden Hour.jpg";
        document.querySelector(".download_info h1").textContent="All girls are the same";
        document.querySelector(".download_info h3").textContent="Juice Wrld";
        document.querySelector(".download_info a").href="https://youtu.be/HlSAEO7iWnk";
      });
  
      
    });

    document.querySelectorAll(".card")[2].addEventListener("click", function () {
      document.querySelector("audio").src="[AMV] - My Eyes.mp3";
      document.querySelector("#album_play").src="Andy Shauf cover art.jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Andy Shauf cover art.jpg";
        document.querySelector(".download_info h1").textContent="My Eyes";
        document.querySelector(".download_info h3").textContent="Travis Scott";
        document.querySelector(".download_info a").href="https://youtu.be/B8GM6MdSCTU";
      });
  
    });
    
    document.querySelectorAll(".card")[3].addEventListener("click", function () {
      document.querySelector("audio").src="j. cole - she knows (slowed + reverb).mp3"; 
      document.querySelector("#album_play").src="hazing.jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="hazing.jpg";
        document.querySelector(".download_info h1").textContent="She knows";
        document.querySelector(".download_info h3").textContent="J. Cole ";
        document.querySelector(".download_info a").href="https://youtu.be/XifynuEU3d4";
      });
  
    });

    document.querySelectorAll(".card")[4].addEventListener("click", function () {
        document.querySelector("audio").src="nle choppa ~ capo [ slowed • reverb ].mp3"; 
        document.querySelector("#album_play").src="Here's some music for the weekend! I've been….jpg";
        document.querySelector("#open_download").textContent="Download";

        document.querySelector("#open_download").addEventListener("click", function (){
          document.querySelector(".download_container").classList.remove("hide");
          document.querySelector(".download_pic img").src="Here's some music for the weekend! I've been….jpg";
          document.querySelector(".download_info h1").textContent="Capo";
          document.querySelector(".download_info h3").textContent="NLE Choppa";
          document.querySelector(".download_info a").href="https://youtu.be/awyqPXDTII8";
        });
    
    });

    document.querySelectorAll(".card")[5].addEventListener("click", function () {
      document.querySelector("audio").src="Playboi Carti-' 9 AM in Calabasas remix'(prod by Adrian).mp3"; 
      document.querySelector("#album_play").src="Music, Media, Games.jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Music, Media, Games.jpg";
        document.querySelector(".download_info h1").textContent="9 AM";
        document.querySelector(".download_info h3").textContent="Playboi Carti";
        document.querySelector(".download_info a").href="https://www.youtube.com/watch?v=8DB3V-pW75E";
      });
  
    });

    document.querySelectorAll(".card")[6].addEventListener("click", function () {
      document.querySelector("audio").src="𝒍𝒂𝒃𝒓𝒊𝒏𝒕𝒉 - 𝒛𝒆𝒏𝒅𝒂𝒚𝒂 - 𝒂𝒍𝒍 𝒇𝒐𝒓 𝒖𝒔 [𝒔𝒑𝒆𝒆𝒅 𝒖𝒑].mp3";
      document.querySelector("#album_play").src="NoMBe.jpg"; 
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="NoMBe.jpg";
        document.querySelector(".download_info h1").textContent="All for us";
        document.querySelector(".download_info h3").textContent="Labrinth";
        document.querySelector(".download_info a").href="https://www.youtube.com/watch?v=4JYSrXVEuig";
      });
  
    });
    document.querySelectorAll(".card")[7].addEventListener("click", function () {
      document.querySelector("audio").src="The Hills x The Color Violet x Creepin (TikTok Remix) by darkvidez.mp3"; 
      document.querySelector("#album_play").src="Showcase of Creative Album Cover Designs & Illustrations.jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Showcase of Creative Album Cover Designs & Illustrations.jpg";
        document.querySelector(".download_info h1").textContent="The Hills ";
        document.querySelector(".download_info h3").textContent="The Weeknd";
        document.querySelector(".download_info a").href="https://www.youtube.com/watch?v=Ik-P1Y2x6jg&t=4s";
      });
  
    });

    document.querySelectorAll(".card")[8].addEventListener("click", function () {
      document.querySelector("audio").src="Travis Scott - SDP Interlude - Spiderman- Into The Spiderverse [AMV-Edit] (FLASH WARNING).mp3"; 
      document.querySelector("#album_play").src="Showcase of Creative Album Cover Designs & Illustrations (1).jpg";
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Showcase of Creative Album Cover Designs & Illustrations (1).jpg";
        document.querySelector(".download_info h1").textContent="SDP";
        document.querySelector(".download_info h3").textContent="Travis Scott";
        document.querySelector(".download_info a").href="https://youtu.be/xZskdorq3cI";
      });
  
    });

    document.querySelectorAll(".card")[9].addEventListener("click", function () {
      document.querySelector("audio").src="Travis Scott - I KNOW  (Official Audio).mp3"; 
      document.querySelector("#album_play").src="Showcase of Creative Album Cover Designs & Illustrations (2).jpg"; 
      document.querySelector("#open_download").textContent="Download";

      document.querySelector("#open_download").addEventListener("click", function (){
        document.querySelector(".download_container").classList.remove("hide");
        document.querySelector(".download_pic img").src="Showcase of Creative Album Cover Designs & Illustrations (2).jpg";
        document.querySelector(".download_info h1").textContent="I KNOW";
        document.querySelector(".download_info h3").textContent="Travis Scott";
        document.querySelector(".download_info a").href="https://youtu.be/fmdLsdmYzTo";
      });
  
    });

    const audio = document.getElementById("audio");
    const playPauseButton = document.getElementById("play-pause");
    const muteButton = document.getElementById("mute");
    const progressBar = document.getElementById("progress");
    
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


   
    

    