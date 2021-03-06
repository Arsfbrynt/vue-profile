const animatedScrollObserver = new IntersectionObserver(
  (entries, animatedScrollObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("enter2");
        animatedScrollObserver.unobserve(entry.target);
      }
    });
  },
);

export default {
  bind(el) {
    el.classList.add("before-enter2");
    animatedScrollObserver.observe(el);
  },
};
