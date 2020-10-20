<<<<<<< HEAD
      const menuOpen = document.querySelector('.menu__open');
      const menuClose = document.querySelector('.menu__close');
      const mobileNav = document.querySelector('.nav__items')

      menuOpen.addEventListener('click', () => {
         mobileNav.style.display = 'block';
         menuOpen.style.display = 'none';
         menuClose.style.display = 'block';
      });

      menuClose.addEventListener('click', () => {
         mobileNav.style.display = 'none';
         if(window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth <= '600') {
            menuOpen.style.display = 'block';
         } else {
            menuOpen.style.display = 'none';
         }
         menuClose.style.display = 'none';
      });
=======
const menuOpen = document.querySelector(".menu__open");
const menuClose = document.querySelector(".menu__close");
const mobileNav = document.querySelector(".nav__items");

menuOpen &&
  menuClose.addEventListener("click", () => {
    mobileNav.style.display = "block";
    menuOpen.style.display = "none";
    menuClose.style.display = "block";
  });

menuClose &&
  menuClose.addEventListener("click", () => {
    mobileNav.style.display = "none";
    if (
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth <= "600"
    ) {
      menuOpen.style.display = "block";
    } else {
      menuOpen.style.display = "none";
    }
    menuClose.style.display = "none";
  });
>>>>>>> e093b8afbdc486a318fd3ea0be9c90bbcacccef8
