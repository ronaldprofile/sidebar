const links = document.querySelectorAll("nav ul li a span");
const menuIcon = document.querySelector(".menu img");

const sidebar = document.querySelector(".sidebar");
const hideSidebarClass = "hide-sidebar";

menuIcon.addEventListener("click", () => {
  sidebar.classList.toggle(hideSidebarClass);
  hideLinks();
});

function hideLinks() {
  links.forEach(link => {
    link.classList.toggle("hide");
  });
}
