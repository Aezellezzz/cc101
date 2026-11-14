const links = document.querySelectorAll(".nav-links a,.hero-buttons a"),
  appContainer = document.getElementById("app");
function smoothScroll(element, target, duration) {
  const start = element.scrollLeft,
    change = target - start;
  let startTime = null;
  function animation(currentTime) {
    if (startTime === null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    let progress = timeElapsed / duration;
    if (progress > 1) progress = 1;
    const ease =
      progress < 0.5
        ? 2 * progress * progress
        : -1 + (4 - 2 * progress) * progress;
    element.scrollLeft = start + change * ease;
    if (timeElapsed < duration) requestAnimationFrame(animation);
    else element.scrollLeft = target;
  }
  requestAnimationFrame(animation);
}
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const targetId = link.getAttribute("href").replace("#", ""),
      targetPage = document.getElementById(targetId);
    smoothScroll(appContainer, targetPage.offsetLeft, 600);
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    document
      .querySelector(`.nav-links a[href="#${targetId}"]`)
      .classList.add("active");
  });
});
