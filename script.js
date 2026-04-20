// 1. Countdown
const dataEveniment = new Date("May 1, 2026 15:00:00").getTime();

const countdown = setInterval(() => {
  const acum = new Date().getTime();
  const distanta = dataEveniment - acum;

  const zile = Math.floor(distanta / (1000 * 60 * 60 * 24));
  const ore = Math.floor((distanta % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minute = Math.floor((distanta % (1000 * 60 * 60)) / (1000 * 60));
  const secunde = Math.floor((distanta % (1000 * 60)) / 1000);

  if (document.getElementById("days")) {
    document.getElementById("days").innerText = zile
      .toString()
      .padStart(2, "0");
    document.getElementById("hours").innerText = ore
      .toString()
      .padStart(2, "0");
    document.getElementById("minutes").innerText = minute
      .toString()
      .padStart(2, "0");
    document.getElementById("seconds").innerText = secunde
      .toString()
      .padStart(2, "0");
  }

  if (distanta < 0) {
    clearInterval(countdown);
    document.getElementById("timer").innerHTML = "CURSA A ÎNCEPUT!";
  }
}, 1000);

// 2. Progress Bar
window.onscroll = function () {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  if (height > 0) {
    const scrolled = (winScroll / height) * 100;
    const progressBar = document.getElementById("scroll-progress");
    if (progressBar) {
      progressBar.style.width = scrolled + "%";
    }
  }
};

// Funcție pentru animația de apariție la scroll (Reveal)
function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 150;

        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        }
    }
}

// Ascultăm evenimentul de scroll
window.addEventListener("scroll", reveal);

// Verificăm și la încărcare (în caz că elementele sunt deja vizibile)
reveal();