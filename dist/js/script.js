window.addEventListener('DOMContentLoaded', () => {
  const menu = document.querySelector('.menu'),
  hamburgerName = document.querySelector('.hamburger_name'),
  menuItem = document.querySelectorAll('.menu_item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('menu_active');
      hamburgerName.classList.toggle('hamburger_name_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('menu_active');
          hamburgerName.classList.toggle('hamburger_name_active');
      })
  })
})