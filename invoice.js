var input = document.getElementsByClassName("choose-input")[0];

      // When the input is clicked, hide the arrows
        input.onclick = function() {
        input.style.webkitAppearance = "none";
        input.style.mozAppearance = "none";
        input.style.appearance = "none";
    }

    const deleteButtons = document.querySelectorAll('.delete-button');
    
    // Loop through each delete button and add a click event listener
    deleteButtons.forEach((button) => {
      button.addEventListener('click', () => {
        // Get the parent div (form-row) and remove it from the DOM
        const row = button.parentNode;
        row.parentNode.removeChild(row);
      });
    });

    // Get the current date
    var currentDate = new Date();

    // Format the date as desired (e.g., "Day Month Year")
    var options = {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    };

    var formattedDate = currentDate.toLocaleDateString('ar-EG', options);

    // Display the formatted date in the specified element
    document.getElementById("date-standerd").textContent = formattedDate;

