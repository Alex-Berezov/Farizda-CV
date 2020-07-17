/*=====> Navigation <====*/
let tabNavMenu = function () {
    let tabNav = document.querySelectorAll('.tabs_nav_menu__item'),
        tabContent = document.querySelectorAll('.tabNavMenu'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is_active');
        });
        this.classList.add('is_active');
        tabName = this.getAttribute('data-tab-menu-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is_active') : item.classList.remove('is_active');
        })
    }

};

tabNavMenu();
/*=====> End Navigation <====*/

/*=====> Hamburger <====*/
  let burgerBtn = document.querySelector('.button_new'),
      navMenu = document.querySelector('.home .wrapper .home_nav_menu');

  burgerBtn.addEventListener('click', function() {
      navMenu.classList.toggle('home_nav_menu_open');
      burgerBtn.classList.toggle('close');
  });

  navMenu.addEventListener('click', function() {
      burgerBtn.classList.toggle('close');
      navMenu.classList.toggle('home_nav_menu_open');
  }) 
/*=====> End Hamburger <====*/

/*=====> Modals <====*/
!function(e){"function"!=typeof e.matches&&(e.matches=e.msMatchesSelector||e.mozMatchesSelector||e.webkitMatchesSelector||function(e){for(var t=this,o=(t.document||t.ownerDocument).querySelectorAll(e),n=0;o[n]&&o[n]!==t;)++n;return Boolean(o[n])}),"function"!=typeof e.closest&&(e.closest=function(e){for(var t=this;t&&1===t.nodeType;){if(t.matches(e))return t;t=t.parentNode}return null})}(window.Element.prototype);

document.addEventListener('DOMContentLoaded', function() {

   	let modalButtons = document.querySelectorAll('.js-open-modal'),
       	closeButtons = document.querySelectorAll('.js-modal-close');

   	/* Going through the array of buttons */
   	modalButtons.forEach(function(item){

      	/* Assign a click handler to each button */
      	item.addEventListener('click', function(e) {

        e.preventDefault();

	        let modalId = this.getAttribute('data-modal'),
	            modalElem = document.querySelector('.modal[data-modal="' + modalId + '"]');

				modalElem.style.display = 'block';

    	}); // end click

 	}); // end foreach

   closeButtons.forEach(function(item){

      item.addEventListener('click', function(e) {
         let parentModal = this.closest('.modal');

         parentModal.style.display = 'none';
      });

   }); // end foreach
}); // end ready

/*=====> End Modals <====*/

/*=====> Modals tab <====*/
let tab = function () {
    let tabNav = document.querySelectorAll('.tabs_nav_item'),
        tabContent = document.querySelectorAll('.tab'),
        tabName;

    tabNav.forEach(item => {
        item.addEventListener('click', selectTabNav)
    });

    function selectTabNav() {
        tabNav.forEach(item => {
            item.classList.remove('is_active');
        });
        this.classList.add('is_active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }

    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is_active') : item.classList.remove('is_active');
        })
    }

};

tab();
/*=====> End Modals tab <====*/