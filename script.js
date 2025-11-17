function openTab(evt, tabName) {
  const tabcontents = document.getElementsByClassName('tabcontent');
  for (let i = 0; i < tabcontents.length; i++) {
    tabcontents[i].style.display = 'none';
  }

  const tablinks = document.getElementsByClassName('tablinks');
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].classList.remove('active');
  }

  document.getElementById(tabName).style.display = 'block';
  evt.currentTarget.classList.add('active');
}

// По умолчанию открываем первую вкладку
document.addEventListener('DOMContentLoaded', () => {
  document.querySelector('.tablinks').click();
});