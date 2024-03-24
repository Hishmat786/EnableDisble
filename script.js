const enableRadio = document.getElementById('enable');
const disableRadio = document.getElementById('disable');
const checkboxes = document.querySelectorAll('input[type="checkbox"]');

  enableRadio.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(checkbox => {
        checkbox.disabled = false;
        checkbox.parentElement.classList.remove('disabled');
      });
    }
  });

  disableRadio.addEventListener('change', function() {
    if (this.checked) {
      checkboxes.forEach(checkbox => {
        checkbox.checked = false; // Uncheck the checkbox before disabling it
        checkbox.disabled = true;
        checkbox.parentElement.classList.add('disabled');
      });
    }
  });