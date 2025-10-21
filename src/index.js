
  // Select all dropdown buttons
  document.querySelectorAll('.dropbtn').forEach(button => {
    button.addEventListener('click', function (e) {
      e.stopPropagation(); // prevent event from bubbling up

      // Close other open dropdowns
      document.querySelectorAll('.dropdown').forEach(dropdown => {
        if (dropdown !== this.parentElement) {
          dropdown.classList.remove('active');
        }
      });

      // Toggle this dropdown
      this.parentElement.classList.toggle('active');
    });
  });

  // Close dropdown if you click anywhere outside
  document.addEventListener('click', () => {
    document.querySelectorAll('.dropdown').forEach(dropdown => {
      dropdown.classList.remove('active');
    });
  });

