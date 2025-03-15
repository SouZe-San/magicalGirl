import "./style.css";
const btn = document.getElementById("clickBtn");
const image = document.getElementById("maho-img");

let isClick = false;
btn.addEventListener("click", () => {
  isClick = !isClick;
  if (isClick) {
    document.body.style.maskImage = "url('mask.gif')";
    document.body.style.maskSize = "cover";
    document.body.style.maskPosition = "center";
    image.style.visibility = "hidden";
    return;
  }
  image.style.visibility = "visible";
  document.body.style.maskImage = "linear-gradient(#fff0,#f000)";
});

document.addEventListener("DOMContentLoaded", () => {
  const magicButton = document.getElementById("magicButton");
  const sparklesContainer = document.getElementById("sparklesContainer");
  const sparkleColors = [
    "#A855F7",
    "#3B82F6",
    "#EC4899",
    "#FBBF24",
    "#34D399",
    "#F43F5E",
    "#8B5CF6",
    "#22D3EE",
    "#6366F1",
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
