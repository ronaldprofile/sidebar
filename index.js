const links = document.querySelectorAll("nav ul li a span");
const menuIcon = document.querySelector(".menu img");
const logo = document.querySelector(".logo img");
const inputForm = document.querySelector("input");

const sidebar = document.querySelector(".sidebar");
const avatar = document.querySelector("footer .avatar");

menuIcon.addEventListener("click", () => {
  links.forEach(link => {
    link.classList.toggle("hide");
  });

  sidebar.style.width = "78px";

  inputForm.classList.toggle("hide");
  logo.classList.toggle("hide");
  avatar.classList.toggle("hide");
});
