document.addEventListener("DOMContentLoaded", function () {
  // Кнопки
  const hotBtn = document.getElementById("hot-section-btn");
  const coldBtn = document.getElementById("cold-section-btn");
  const callBtn = document.getElementById("call-center-btn");
  const profileBtn = document.getElementById("profile-btn");
  const backBtn = document.getElementById("back-to-main");

  // Окна
  const hotPopup = document.getElementById("hot-popup");
  const coldPopup = document.getElementById("cold-popup");
  const callPopup = document.getElementById("call-popup");
  const profilePanel = document.getElementById("profile-panel");

  // Закрытие всех окон
  function closeAllPopups() {
    hotPopup.classList.remove("show");
    coldPopup.classList.remove("show");
    callPopup.classList.remove("show");
    profilePanel.classList.remove("slide-in");
  }

  // Открытие соответствующих окон
  hotBtn.addEventListener("click", () => {
    closeAllPopups();
    hotPopup.classList.add("show");
  });

  coldBtn.addEventListener("click", () => {
    closeAllPopups();
    coldPopup.classList.add("show");
  });

  callBtn.addEventListener("click", () => {
    closeAllPopups();
    callPopup.classList.add("show");
  });

  profileBtn.addEventListener("click", () => {
    closeAllPopups();
    profilePanel.classList.add("slide-in");
  });

  backBtn.addEventListener("click", () => {
    closeAllPopups();
  });

  // Клик вне окна — закрытие
  window.addEventListener("click", (e) => {
    if (e.target.classList.contains("popup")) {
      e.target.classList.remove("show");
    }
  });
});
