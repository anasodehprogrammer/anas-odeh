function performAction(action) {
    alert('Performing ' + actions);
    // Add your action logic here
  }

  // Get menu and actions elements
  var menu = document.getElementById('menu');
  var actions = document.getElementById('actions');

  // Add click event listener to the menu
  menu.addEventListener('click', function() {
    //if i click open actions
    // Toggle the display of actions
    actions.style.display = (actions.style.display === 'none') ? 'block' : 'none';
  });

