const profileBtn = document.getElementById("profileBtn");
const sidebar = document.getElementById("profileSidebar");
const closeSidebar = document.getElementById("closeSidebar");

profileBtn.onclick = () => {
  sidebar.classList.add("open");
};

closeSidebar.onclick = () => {
  sidebar.classList.remove("open");
};