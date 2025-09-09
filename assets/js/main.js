
  document.addEventListener("DOMContentLoaded", function () {
    const navbarContent = document.getElementById("navbarContent");
    const navLinks = navbarContent.querySelectorAll("a, i, .btn-sell");

    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        const bsCollapse = new bootstrap.Collapse(navbarContent, {
          toggle: false
        });
        bsCollapse.hide();
      });
    });
  });
