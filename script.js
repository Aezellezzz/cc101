const links = document.querySelectorAll(".nav-links a,.hero-buttons a"),
  pages = document.querySelectorAll(".page");
links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    let target = link.getAttribute("href").replace("#", "");
    pages.forEach((p) => p.classList.remove("active"));
    document.getElementById(target).classList.add("active");
    document
      .querySelectorAll(".nav-links a")
      .forEach((a) => a.classList.remove("active"));
    document
      .querySelector(`.nav-links a[href="#${target}"]`)
      .classList.add("active");
    window.scrollTo(0, 0);
  });
});
