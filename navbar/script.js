const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar");
const closeIcon = document.querySelector(".close-icon");

menuBtn.addEventListener("click", function () {
  nav.classList.toggle("nav-open");
});
topics.addEventListener('click', function(){
  sidebar.classList.toggle('sidebar-open');
})