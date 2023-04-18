// let mainContainer = document.getElementById("main");
let container = document.getElementById("icon-container");
let toggleIcon = document.getElementById("ex-icon");
let icons = [...container.children];
let extendIcons = [icons[3], icons[4], icons[5]];

function extend() {
  extendIcons.map((items) => {
    items.classList.toggle("hide");

    if (items.classList.contains("hide")) {
      container.style.width = "150px";
      toggleIcon.style.transform = "rotate(180deg)";
    } else {
      container.style.width = "305px";
      toggleIcon.style.transform = "rotate(0deg)";
    }
  });
}

// Get the Menu items Active
const menuItems = document.getElementsByClassName("menu_icons");

for (let i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function () {
    for (let j = 0; j < menuItems.length; j++) {
      menuItems[j].classList.remove("active");
    }
    this.classList.add("active");
  });
}






// // Popup 1
// Get references to all the buttons and popups
const popupBtn = document.getElementById('popupButton');
const popupBtn2 = document.getElementById('popupButton2');
const popupBtn3 = document.getElementById('popupButton3');
const popupBtn4 = document.getElementById('popupButton4');
const popupBtn5 = document.getElementById('popupButton5');
const popupBtn6 = document.getElementById('popupButton6');
const popup = document.getElementById('popup');
const popup2 = document.getElementById('popup2');
const popup3 = document.getElementById('popup3');
const popup4 = document.getElementById('popup4');
const popup5 = document.getElementById('popup5');
const popup6 = document.getElementById('popup6');




// Add click event listeners to the buttons
popupBtn.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup.classList.add('active');
});

popupBtn2.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup2.classList.add('active');
});

popupBtn3.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup3.classList.add('active');
});

popupBtn4.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup4.classList.add('active');
});

popupBtn5.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup5.classList.add('active');
});

popupBtn6.addEventListener('click', function() {
  // Hide any other visible popups
  hidePopups();
  // Show the popup that corresponds to this button
  popup6.classList.add('active');
});


function hidePopups() {
  // Loop through all the popups
  const popups = document.querySelectorAll('.popup');
  for (let i = 0; i < popups.length; i++) {
    const popup = popups[i];
    // If the popup is currently visible, hide it
    if (popup.classList.contains('active')) {
      popup.classList.remove('active');
    }
  }
}
