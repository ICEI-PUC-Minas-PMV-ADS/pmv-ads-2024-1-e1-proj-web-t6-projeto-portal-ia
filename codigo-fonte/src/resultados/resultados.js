const dropdownMenu = document.getElementById('dropdownMenu');
const dropdownToggle = document.querySelector('.dropdown-toggle');

dropdownMenu.addEventListener('click', function (event) {
  event.stopPropagation();
});

dropdownToggle.addEventListener('click', function (event) {
  event.preventDefault();
  if (!dropdownMenu.classList.contains('show')) {
    dropdownMenu.classList.add('show');
  } else {
    dropdownMenu.classList.remove('show');
  }
});

document.addEventListener('click', function (event) {
  if (dropdownMenu.classList.contains('show') && !event.target.classList.contains('dropdown-toggle')) {
    dropdownMenu.classList.remove('show');
  }
});
