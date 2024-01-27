function animateIntro() {
  const elementsToAnimate = document.querySelectorAll(".animate-intro");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
        } else {
          entry.target.classList.remove("fade-in");
        }
      });
    },
    { threshold: 0.9 }
  );

  elementsToAnimate.forEach((element) => {
    observer.observe(element);
  });
}

function animateOnScroll() {
  const elementsToAnimate = document.querySelectorAll(".animate-on-scroll");

  window.addEventListener("scroll", function () {
    elementsToAnimate.forEach((element) => {
      const elementRect = element.getBoundingClientRect();
      const isVisible =
        elementRect.top < window.innerHeight && elementRect.bottom >= 0;

      if (isVisible) {
        element.style.transition = "opacity 1s"; // Set your desired duration
        element.classList.add("fade-in");
        element.classList.remove("fade-out");
      } else {
        element.style.transition = "opacity 0.1s"; // Set your desired duration
        element.classList.add("fade-out");
        element.classList.remove("fade-in");
      }
    });
  });
}

function animateBox() {
  const boxes = document.querySelectorAll(".animate-box");

  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            entry.target.classList.add("fade-in");
            entry.target.classList.remove("fade-out");
          }, index * 500); // Adjust the delay as needed
        } else {
          entry.target.classList.add("fade-out");
          entry.target.classList.remove("fade-in");
        }
      });
    },
    { threshold: 0.5, rootMargin: "0px 0px -100px 0px" }
  );

  boxes.forEach((box) => {
    observer.observe(box);
  });
}

function animateRows() {
  const rows = document.querySelectorAll(".animate-row");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("fade-in");
          entry.target.classList.remove("slide-out");
        } else {
          entry.target.classList.remove("fade-in");
          entry.target.classList.add("slide-out");
        }
      });
    },
    { threshold: 0.5 } // Adjust the threshold based on your preference
  );

  rows.forEach((row) => {
    observer.observe(row);
  });
}

document.addEventListener("DOMContentLoaded", function () {
  animateIntro();
  animateOnScroll();
  animateBox();
  animateRows();
});
