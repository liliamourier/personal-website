const navLinks = Array.from(document.querySelectorAll(".site-nav a"));
const nameReveal = document.querySelector(".name-reveal");
const revealClasses = ["show-word-1", "show-word-2", "show-word-3", "show-word-4", "show-word-5"];
const revealWordCount = revealClasses.length;
const sections = navLinks
  .map((link) => document.querySelector(link.getAttribute("href")))
  .filter(Boolean);

function updateActiveNav() {
  const current = sections.reduce((active, section) => {
    return section.getBoundingClientRect().top <= 140 ? section : active;
  }, sections[0]);

  navLinks.forEach((link) => {
    link.classList.toggle("active", link.getAttribute("href") === `#${current?.id}`);
  });
}

function updateNameReveal() {
  if (!nameReveal) return;
  nameReveal.classList.toggle("is-revealed", window.scrollY > 48);
}

function setRevealWord(index) {
  if (!nameReveal) return;
  nameReveal.classList.remove(...revealClasses);
  nameReveal.classList.add(`show-word-${index}`);
}

function updateRevealWord(event) {
  if (!nameReveal) return;
  const rect = nameReveal.getBoundingClientRect();
  const progress = Math.min(Math.max((event.clientX - rect.left) / rect.width, 0), 0.999);
  const thresholds = [0.12, 0.25, 0.4, 0.55];
  const index = thresholds.findIndex((threshold) => progress < threshold);
  setRevealWord(index === -1 ? revealWordCount : index + 1);
}

if (nameReveal) {
  nameReveal.addEventListener("mouseenter", updateRevealWord);
  nameReveal.addEventListener("mousemove", updateRevealWord);
  nameReveal.addEventListener("mouseleave", () => {
    nameReveal.classList.remove(...revealClasses);
  });
  nameReveal.addEventListener("focus", () => setRevealWord(1));
  nameReveal.addEventListener("blur", () => {
    nameReveal.classList.remove(...revealClasses);
  });
}

window.addEventListener("scroll", updateActiveNav, { passive: true });
window.addEventListener("scroll", updateNameReveal, { passive: true });
window.addEventListener("load", updateActiveNav);
window.addEventListener("load", updateNameReveal);
