//animtion
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.2, // trigger when 20% visible
  },
);

reveals.forEach((reveal) => observer.observe(reveal));

const revealElements = document.querySelectorAll(".reveal-left, .reveal-right");

const info_Observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
        info_Observer.unobserve(entry.target); // animate once
      }
    });
  },
  {
    threshold: 0.2,
  },
);

revealElements.forEach((el) => info_Observer.observe(el));

const reasonItems = document.querySelectorAll(".reasons");

const reasonObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        reasonObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.2,
  },
);

reasonItems.forEach((item, index) => {
  // delay per pair (2 items per row)
  const pairDelay = Math.floor(index / 2) * 200;
  item.style.transitionDelay = pairDelay + "ms";
  reasonObserver.observe(item);
});

// transaction
const transactionObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active"); // This starts the animations
      }
    });
  },
  { threshold: 0.2 },
);

transactionObserver.observe(document.querySelector(".transaction"));

// form
function showLogin() {
  document.getElementById("signupBox").classList.add("hidden");
  document.getElementById("loginBox").classList.remove("hidden");
}

function showSignup() {
  document.getElementById("loginBox").classList.add("hidden");
  document.getElementById("signupBox").classList.remove("hidden");
}

//lang translate
//menu toggle
const menuBtn = document.getElementById("menuBtn");
const navLinks = document.querySelector(".nav_links");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("show");
});
// chat
const chatBtn = document.getElementById("chatButton");
const chatFrame = document.getElementById("chatFrame");

chatBtn.onclick = () => {
  if (chatFrame.style.display === "block") {
    chatFrame.style.display = "none";
  } else {
    chatFrame.style.display = "block";
  }
};
