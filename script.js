const burgerBtn = document.getElementById('burger-btn');
const sidePanel = document.getElementById('side-panel');
const closePanelBtn = document.getElementById('close-panel');
const overlay = document.getElementById('overlay');
const contactsBtn = document.getElementById('contacts-btn');

function openPanel() {
  sidePanel.classList.add('visible');
  overlay.classList.add('visible');
}

function closePanel() {
  sidePanel.classList.remove('visible');
  overlay.classList.remove('visible');
}

burgerBtn.addEventListener('click', openPanel);
closePanelBtn.addEventListener('click', closePanel);
overlay.addEventListener('click', closePanel);

contactsBtn.addEventListener('click', () => {
  // Для начала просто alert или можно сделать редирект на пустую страницу
  alert('Страница контактов будет добавлена позже');
});
