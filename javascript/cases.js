// Write your code below
const boxes = document.querySelectorAll(".box:not(:first-child)");

const options = {
  threshold: 0.5,
};

function addSlideIn(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    }
  });
}

function addSlideIn(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("slide-in");
    } else {
      // this else part is not compulsory
      entry.target.classList.remove("slide-in");
    }
  });
}

const observer = new IntersectionObserver(addSlideIn, options);

boxes.forEach((item) => {
  observer.observe(item);
});
