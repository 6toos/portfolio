let tab_link = document.getElementsByClassName("tab-links");
let tab_contents = document.getElementsByClassName("tab-content");

function opentab(tabname) {
  for (tablink of tab_link) {
    tablink.classList.remove("active-links");
  }
  for (tabcontent of tab_contents) {
    tabcontent.classList.remove("active-tab");
  }
  event.currentTarget.classList.add("active-links");
  document.getElementById(tabname).classList.add("active-tab");
}

window.addEventListener("scroll", function () {
  const sticky = document.querySelector(".starting");
  sticky.classList.toggle("sticky", window.scrollY > 0);
})