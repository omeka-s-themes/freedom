/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

let mmToggli, mmToggla, mmBody, mmDrawer, mmBacker, mmClones, mmTargets;

document.addEventListener("DOMContentLoaded", function() {
	let collection, container, menu, links, i, len;

	// collect the menus for mobile
	collection = document.querySelectorAll( '.main-navigation' );

	// get the toggle menu item (li)
	mmToggli = document.querySelector( '.main-navigation__toggle' );

	// Exit early if collection is empty or the toggle button is undefined
	if ( 0 === collection.length || null === mmToggli || 'undefined' === typeof mmToggli ) {
		console.log( 'Mobile navigation skipped' );
		return;
	}

	// the top-most element containing content (i.e. body)
	mmBody = document.getElementsByTagName( 'body' )[0];

	mmDrawer = document.getElementById( 'menu-drawer' );
	mmBacker = document.getElementById( 'menu-backer' );
	mmClones = document.getElementById( 'menu-clones' );

	mmTargets = []; // array of expanded menus in the menu drawer

	// reverse the collection so .main-navigation renders first in the .menu-drawer
	collection = Array.prototype.slice.call( collection );
	collection.reverse();

	// Toggle click event.
	mmToggli.onclick = function(e) {
		if ( ! mmDrawer.classList.contains( 'toggled' ) ) {
			openMenuDrawer();
		} else {
			closeMenuDrawer();
		}
	};

	collection.forEach( container => {
		menu = container.querySelector( 'ul' );

		// put a clone of the menu in the menu clones container
		let clone = menu.cloneNode( true );
		mmClones.appendChild( clone );

		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}
	} );

	mmClones.querySelectorAll( '*' ).forEach( item => {
		if( item.id ) {
			item.id = item.id + "-drawer";
		}
	} );

	// Assign the "menu-item-has-children" class to the li elements with ul as child.
	mmDrawer.querySelectorAll( 'li' ).forEach( item => {
		for (const child of item.children) {
			if(child.tagName === 'UL') {
				item.classList.add('menu-item-has-children');

				// Add submenu header
				const submenuHeader = document.createElement('li');
				submenuHeader.setAttribute('class', 'menu-header');
				submenuHeader.innerHTML = item.innerHTML;
				child.prepend(submenuHeader);
			}
		}
	});

	mmDrawer.querySelectorAll( '.menu-item-has-children' ).forEach( item => {
		item.addEventListener( 'click', function( event ) {
			// stop propagation of child elements
			item.querySelectorAll( 'li:not(.menu-item-has-children)' ).forEach( child => {
				child.addEventListener( 'click', function ( event ) {
					event.stopPropagation();
				} );
			} );

			item.classList.add( 'expanded' );
			mmTargets.push( this );
			slideMenus( this );
			scrollMenuToTop();
			event.stopPropagation();
			event.preventDefault();
		} );
	} );

	mmBacker.addEventListener( 'click', function( event ) {
		if( mmTargets.length > 0 ) {
			let collapse = mmTargets.pop();
			collapse.classList.remove( 'expanded' );
			slideMenus( this );
			scrollMenuToTop();
		}
		else {
			closeMenuDrawer();
		}

		event.preventDefault();
	} );
} );

function openMenuDrawer() {
	backerContext();
	mmDrawer.querySelectorAll( 'a' ).forEach( item => {
		item.tabIndex = 0;
	} );
	mmBody.classList.add( 'menu-drawer-toggled');
	mmDrawer.classList.add( 'toggled' );
	mmToggli.classList.add( 'open' );
	mmToggli.focus();
}

function closeMenuDrawer() {
	// clear the expanded targets array
	mmTargets = [];

	// remove the expanded class from all menu items
	mmDrawer.querySelectorAll( '.expanded' ).forEach( item => {
		item.classList.remove( 'expanded' );
	} );

	// remove collapsed items from the tabindex
	mmDrawer.querySelectorAll( 'a' ).forEach( item => {
		item.tabIndex = -1;
	} );

	// remove clone transformations
	mmClones.style.transform = "none";

	mmBody.classList.remove( 'menu-drawer-toggled');
	mmDrawer.classList.remove( 'toggled' );
	mmToggli.classList.remove( 'open' );
	mmToggli.focus();
}

function slideMenus( target ) {
	backerContext();
	target.classList.add( 'expanded' );
	mmClones.style.transform = "translateX( -" + (100 * mmTargets.length) + "% )";
}

function backerContext() {
	if( mmTargets.length > 0 ) {
		mmBacker.innerHTML = 'Previous Menu';
	}
	else {
		mmBacker.innerHTML = 'Close Menu';
	}
}

/**
 * Scrolls the menu drawer to top.
 */
function scrollMenuToTop() {
	mmDrawer.scrollTo( 0, 0 );
}

/**
 * Sets or removes .focus class on an element.
 */
function toggleFocus( menuItem ) {
	mmDrawer.querySelectorAll( '.focus' ).forEach( focusItem => function() {
		focusItem.classList.remove( 'focus' );
	} );
	menuItem.closest( 'li' ).classList.add( 'focus' );
}
