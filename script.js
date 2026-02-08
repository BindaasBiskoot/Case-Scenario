document.addEventListener("DOMContentLoaded", () => {

  /* Typing animation */
  const typeElements = document.querySelectorAll(".type");
  let delay = 0;

  typeElements.forEach(el => {
    const text = el.dataset.text;
    setTimeout(() => typeText(el, text), delay);
    delay += text.length * 60 + 400;
  });

  function typeText(el, text) {
    el.textContent = "";
    el.classList.add("cursor");
    let i = 0;

    const interval = setInterval(() => {
      el.textContent += text.charAt(i);
      i++;
      if (i === text.length) {
        clearInterval(interval);
        el.classList.remove("cursor");
      }
    }, 60);
  }

  const question = document.getElementById("question");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");
  const card = document.querySelector(".card");

  /* Show question + buttons after pause */
  if (question && yesBtn && noBtn) {
    setTimeout(() => {
      question.style.display = "block";
      yesBtn.style.display = "inline-block";
      noBtn.style.display = "inline-block";
    }, 3000);
  }

  /* EXTREME PANIC NO BUTTON */
  if (noBtn && card) {
    noBtn.addEventListener("mouseover", () => {
      const cardRect = card.getBoundingClientRect();
      const btnWidth = noBtn.offsetWidth;
      const btnHeight = noBtn.offsetHeight;

      const maxX = cardRect.width - btnWidth;
      const maxY = cardRect.height - btnHeight - 80;

      noBtn.style.left = Math.random() * maxX + "px";
      noBtn.style.top = Math.random() * maxY + "px";
    });
  }

  /* YES button logic */
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {

      // Dancing happy puppy GIF 🐕🎉
      document.getElementById("proposalGif").src =
        "https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif";

      // Remove heading + question + buttons
      document.getElementById("managementHeading").style.display = "none";
      document.getElementById("question").style.display = "none";
      yesBtn.style.display = "none";
      noBtn.style.display = "none";

      // Show outcome
      document.getElementById("outcome").style.display = "block";
    });
  }

});
