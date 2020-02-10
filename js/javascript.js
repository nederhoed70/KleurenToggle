//DOM fully loaded :) >START

window.addEventListener('DOMContentLoaded', event => {});
//set even listener functions
listenToHamburger = function() {
  const hamburger = document.querySelector('#hamburger-img');

  hamburger.addEventListener('mouseenter', function() {
    displayMenu();
  });

  hamburger.addEventListener('mouseout', function() {
    hideMenu();
  });
};

//pop in pop out menu hover
displayMenu = function() {
  const menuDisplay = document.querySelector('#menu-outer');
  menuDisplay.className = 'menu-outer-display';
};
stayMenu = function() {
  const menuDisplay = document.querySelector('#menu-outer');
  menuDisplay.className = 'menu-outer-display-stay';
};

hideMenu = function() {
  const menuHide = document.querySelector('#menu-outer');
  menuHide.className = 'menu-outer-no-display';
};

//click menu items -> menu to hidden
const menuItems = function() {
  const itemsArray = [
    'home',
    'red',
    'green',
    'blue',
    'yellow',
    'purple',
    'orange'
  ];
  for (i = 0; i < itemsArray.length; i++) {
    let itemColor = itemsArray[i];
    let itemId = '#menu-item-' + itemColor;
    const itemListener = document.querySelector(itemId);
    //click
    itemListener.addEventListener('click', function() {
      clickMenu(itemColor);
      //hover
    });
    itemListener.addEventListener('mouseenter', function() {
      hoverMenuIn(itemColor);
    });
    itemListener.addEventListener('mouseout', function() {
      hoverMenuOut(itemColor);
    });
  }
  function clickMenu(color) {
    let itemClass = 'body ' + color;
    document.body.className = itemClass;
    const colorText = document.querySelector('#colorH1');
    colorText.innerHTML = color;
    const radioButton = document.querySelector('#rb' + color);
    radioButton.checked = true;
    hideMenu();
  }
  function hoverMenuIn(hoverColor) {
    let itemClass = 'menu-item hover ' + hoverColor;
    const liClass = document.querySelector('#menu-item-' + hoverColor);
    liClass.className = itemClass;
    stayMenu();
  }
  function hoverMenuOut(hoverColor) {
    let itemClassInit = 'menu-item ' + hoverColor;
    const liClassInit = document.querySelector('#menu-item-' + hoverColor);
    liClassInit.className = itemClassInit;
    hideMenu();
  }
};
function pressColor(pressColor) {
  let pressClass = 'body ' + pressColor;
  document.body.className = pressClass;
  const pressText = document.querySelector('#colorH1');
  pressText.innerHTML = pressColor;
  const pressButton = document.querySelector('#rb' + pressColor);
  pressButton.checked = true;
}
function keyPress() {
  document.addEventListener('keydown', function(event) {
    switch (event.keyCode) {
      case 49:
        pressColor('home');
        break;
      case 50:
        pressColor('red');
        break;
      case 51:
        pressColor('green');
        break;
      case 52:
        pressColor('blue');
        break;
      case 53:
        pressColor('yellow');
        break;
      case 54:
        pressColor('purple');
        break;
      case 55:
        pressColor('orange');
        break;
    }
  });
}
listenToHamburger();
menuItems();
keyPress();
//DOM fully loaded :) >END
