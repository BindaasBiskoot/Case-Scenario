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

  /* Show question + buttons after pause */
  const question = document.getElementById("question");
  const yesBtn = document.getElementById("yesBtn");
  const noBtn = document.getElementById("noBtn");

  if (question && yesBtn && noBtn) {
    setTimeout(() => {
      question.style.display = "block";
      yesBtn.style.display = "inline-block";
      noBtn.style.display = "inline-block";
    }, 2500);
  }

  /* Dramatic NO button escape */
  if (noBtn) {
    noBtn.addEventListener("mouseover", () => {
      noBtn.style.left = Math.random() * 220 + "px";
      noBtn.style.top = Math.random() * 60 + "px";
    });
  }

  /* YES button logic */
  if (yesBtn) {
    yesBtn.addEventListener("click", () => {

      // Change to HAPPY puppy GIF
      document.getElementById("proposalGif").src =
        "https://media.giphy.com/media/13borq7Zo2kulO/giphy.gif";

      // Hide heading
      const heading = document.getElementById("managementHeading");
      if (heading) heading.style.display = "none";

      // Hide buttons
      yesBtn.style.display = "none";
      noBtn.style.display = "none";

      // Show outcome text
      document.getElementById("outcome").style.display = "block";
    });
  }

});
