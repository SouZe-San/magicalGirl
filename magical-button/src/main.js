import "./style.css";
const btn = document.getElementById("clickBtn");
const image = document.getElementById("maho-img");
import msk from "./assets/mask.gif";
let isClick = false;
btn.addEventListener("click", () => {
  isClick = !isClick;
  if (isClick) {
    document.body.style.setProperty("--mask-image", `url(${msk})`);
    document.body.style.setProperty("--mask-size", "cover");
    document.body.style.setProperty("--mask-position", "center");

    image.style.visibility = "hidden";
    return;
  } else {
    image.style.visibility = "visible";
    document.body.style.setProperty("--mask-image", "linear-gradient(#fff0, #f000)");
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const magicButton = document.getElementById("magicButton");
  const sparklesContainer = document.getElementById("sparklesContainer");
  const sparkleColors = [
    "#9422ff",
    "#2175fc",
    "#EC4899",
    "#faba16",
    "#34D399",
    "#fc3254",
    "#8B5CF6",
    "#25d9f5",
    "#5255f7",
  ];

  magicButton.addEventListener("mouseenter", () => {
    createSparkles();
  });

  magicButton.addEventListener("mouseleave", () => {
    clearSparkles();
  });

  function createSparkles() {
    for (let i = 0; i < 20; i++) {
      const sparkle = document.createElement("div");
      sparkle.classList.add("sparkle");
      const size = Math.random() * 6 + 2; // size between 2-8px
      sparkle.style.width = `${size}px`;
      sparkle.style.height = `${size}px`;
      sparkle.style.left = `calc(${Math.random() * 100}% - ${size / 2}px)`;
      sparkle.style.top = `${Math.random() < 0.5 ? -20 : 120}%`;
      sparkle.style.setProperty("--tx", `${Math.random() * 200 - 100}px`);
      sparkle.style.setProperty("--ty", `${Math.random() < 0.5 ? -100 : 100}px`);
      sparkle.style.animationDuration = `${Math.random() * 0.8 + 0.6}s`;
      (sparkle.style.background = sparkleColors[Math.floor(Math.random() * sparkleColors.length)]),
        sparklesContainer.appendChild(sparkle);

      // Remove sparkle after animation
      sparkle.addEventListener("animationend", () => {
        sparkle.remove();
      });
    }
  }

  function clearSparkles() {
    while (sparklesContainer.firstChild) {
      sparklesContainer.firstChild.remove();
    }
  }
});
