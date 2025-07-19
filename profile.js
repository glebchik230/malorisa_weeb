document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("registration-form");
  const nameInput = document.getElementById("name");
  const phoneInput = document.getElementById("phone");
  const tgIdInput = document.getElementById("tgId");
  const errorMsg = document.getElementById("error-msg");
  const mainContent = document.getElementById("main-content");
  const profileSection = document.getElementById("profile-section");
  const profileName = document.getElementById("profile-name");
  const profilePhone = document.getElementById("profile-phone");
  const profileTgId = document.getElementById("profile-tgid");
  const returnBtn = document.getElementById("return-btn");
  const openProfileBtn = document.getElementById("open-profile");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = nameInput.value.trim();
    const phone = phoneInput.value.trim();
    const tgId = tgIdInput.value.trim();

    if (!name  !phone  !tgId) {
      errorMsg.textContent = "Пожалуйста, заполните все поля.";
      errorMsg.style.display = "block";

      [nameInput, phoneInput, tgIdInput].forEach((input) => {
        input.classList.toggle("border-red-500", !input.value.trim());
      });

      return;
    }

    errorMsg.style.display = "none";

    profileName.textContent = name;
    profilePhone.textContent = phone;
    profileTgId.textContent = tgId;

    mainContent.classList.add("hidden");
    profileSection.classList.remove("hidden");

    // В этом месте можно отправить данные администратору
  });

  returnBtn.addEventListener("click", function () {
    profileSection.classList.add("hidden");
    mainContent.classList.remove("hidden");
  });

  openProfileBtn.addEventListener("click", function () {
    mainContent.scrollIntoView({ behavior: "smooth" });
  });
});
