onload = () => {
  const giftBox = document.getElementById("gift-box");
  const music = document.getElementById("bg-music");
  const introContainer = document.querySelector(".intro-container");

  // Floating Hearts Animation function
  const createHeart = () => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.left = Math.random() * 100 + "vw";
    const size = Math.random() * 10 + 15 + "px";
    heart.style.width = size;
    heart.style.height = size;
    heart.style.animationDuration = Math.random() * 2 + 4 + "s";
    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 6000);
  };

  giftBox.addEventListener("click", () => {
    // Stage 1: Zoom In
    giftBox.classList.add("zoom-in");
    introContainer.classList.add("zoom-hide");

    // Play music
    music.volume = 0.5;
    music.play().catch(error => console.log("Music play failed:", error));

    // Stage 2: Transition
    setTimeout(() => {
      document.body.classList.remove("intro-active");
      document.body.classList.remove("not-loaded");
      setInterval(createHeart, 400);
    }, 1200);
  });
};