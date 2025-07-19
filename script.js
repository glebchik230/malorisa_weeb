document.getElementById('btn-hot').addEventListener('click', () => {
  showPopup('popup-hot');
});

document.getElementById('btn-cold').addEventListener('click', () => {
  showPopup('popup-cold');
});

document.getElementById('btn-operator').addEventListener('click', () => {
  showPopup('popup-operator');
});

document.getElementById('btn-profile').addEventListener('click', () => {
  document.getElementById('profile-panel').classList.add('show');
});

document.getElementById('profile-form').addEventListener('submit', (e) => {
  e.preventDefault();
  document.getElementById('profile-form').classList.add('hidden');
  document.getElementById('profile-info').classList.remove('hidden');
});

function showPopup(id) {
  document.getElementById(id).classList.add('show');
}

function closePopup(id) {
  document.getElementById(id).classList.remove('show');
}

function logout() {
  document.getElementById('profile-info').classList.add('hidden');
  document.getElementById('profile-form').classList.remove('hidden');
  document.getElementById('profile-panel').classList.remove('show');
}

function goHome() {
  document.getElementById('profile-panel').classList.remove('show');
}

