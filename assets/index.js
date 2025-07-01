    var toggleOpen = document.getElementById('toggleOpen');
    var toggleClose = document.getElementById('toggleClose');
    var collapseMenu = document.getElementById('collapseMenu');

    function handleClick() {
      if (collapseMenu.style.display === 'block') {
        collapseMenu.style.display = 'none';
      } else {
        collapseMenu.style.display = 'block';
      }
    }

    toggleOpen.addEventListener('click', handleClick);
    toggleClose.addEventListener('click', handleClick);

    document.addEventListener("DOMContentLoaded", () => {
      const menuToggle = document.getElementById("menu-toggle");
      const menuClose = document.getElementById("menu-close");
      const mobileMenu = document.getElementById("collapseMenu");
      const overlay = document.getElementById("overlay");

      if (mobileMenu) {
        const mobileLinks = mobileMenu.querySelectorAll("a");
        mobileLinks.forEach(link => {
          link.addEventListener("click", () => {
            console.log("Mobile link clicked:", link.textContent);
          });
        });
      }

      function toggleItems(btn) {
        const container = btn.previousElementSibling;
        if (!container) return;

        const extras = container.querySelector('.extra-items');
        if (!extras) return;

        if (extras.classList.contains('hidden')) {
          extras.classList.remove('hidden');
          btn.textContent = 'Show Less';
        } else {
          extras.classList.add('hidden');
          btn.textContent = 'Show More';
        }
      }
    });

    // Profile dropdown
    var toggleDropdown = document.getElementById('profile-dropdown-toggle');
    var dropdownMenu = document.getElementById('profile-dropdown-menu');

    function handleToggle(event) {
      dropdownMenu.classList.toggle('hidden');
    }

    toggleDropdown.addEventListener('click', function (event) {
      event.stopPropagation();
      handleToggle(event);
    });

    document.addEventListener('click', function (event) {
      if (
        !dropdownMenu.classList.contains('hidden') &&
        !dropdownMenu.contains(event.target) &&
        event.target !== toggleDropdown
      ) {
        dropdownMenu.classList.add('hidden');
      }
    });

    function toggleItems(button) {
      const extraItems = button.parentElement.querySelector('.extra-items');
      if (!extraItems) return;

      const isHidden = extraItems.classList.contains('hidden');
      extraItems.classList.toggle('hidden');
      button.textContent = isHidden ? 'Show Less' : 'Show More';
    }

    document.addEventListener('DOMContentLoaded', () => {
        document.querySelectorAll('.accordion').forEach(elm => {
          const button = elm.querySelector('.toggle-button');
          const content = elm.querySelector('.content');
          const plusIcon = button.querySelector('.plus');

          button.addEventListener('click', () => {
            const isHidden = content.classList.toggle('invisible');
            content.style.maxHeight = isHidden ? '0px' : `${content.scrollHeight + 100}px`;
            button.classList.toggle('text-blue-600', !isHidden);
            button.classList.toggle('text-gray-800', isHidden);
            content.classList.toggle('pb-6', !isHidden);
            plusIcon.classList.toggle('hidden', !isHidden);
            plusIcon.classList.toggle('block', isHidden);
          });
        });
      });