/**
 * File navigation.js.
 *
 * Handles toggling the navigation menu for small screens and enables TAB key
 * navigation support for dropdown menus.
 */

let mmHeader, mmNavigation, mmToggli, mmBody, mmDrawer, mmBacker, mmClones, mmTargets, cleanupTrap, navItems;

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

	mmHeader = document.querySelector('.main-header__main-bar');
	mmDrawer = document.getElementById( 'menu-drawer' );
	mmBacker = document.getElementById( 'menu-backer' );
	mmClones = document.getElementById( 'menu-clones' );
	navItems = document.querySelectorAll( '.navigation a' );

	navItems.forEach( item => {
		item.setAttribute('role', 'menuitem');
	});

	mmTargets = []; // array of expanded menus in the menu drawer

	// reverse the collection so .main-navigation renders first in the .menu-drawer
	collection = Array.prototype.slice.call( collection );
	collection.reverse();

	mmToggli.onclick = toggleMenu;
	mmToggli.onkeydown = (e) => {
		if (e.key === 'Enter' || e.key === ' ') {
			e.preventDefault(); // Prevent page scroll on Space
			toggleMenu();
		}
	};

	function toggleMenu() {
		if ( ! mmDrawer.classList.contains( 'toggled' ) ) {
			mmToggli.setAttribute('aria-expanded', 'true');
			openMenuDrawer();
		} else {
			mmToggli.setAttribute('aria-expanded', 'false');
			closeMenuDrawer();
		}
	}

	collection.forEach( container => {
		menu = container.querySelector( 'ul' );

		menu.querySelectorAll('li').forEach(item => {
			for (const child of item.children) {
				if (child.tagName === 'UL') {
					item.classList.add('menu-item-has-children');
				}
			}
		});

		// put a clone of the menu in the menu clones container
		let clone = menu.cloneNode( true );
		mmClones.appendChild( clone );

		if ( -1 === menu.className.indexOf( 'nav-menu' ) ) {
			menu.className += ' nav-menu';
		}
	} );

	document.querySelectorAll( '.main-navigation .nav-menu > li.menu-item-has-children/*, .menu-drawer .navigation > li.menu-item-has-children*/' ).forEach( item => {
		const activatingA = item.querySelector('a');
		const btn = '<button class="submenu-btn"><span><span class="screen-reader-text">show submenu for “' + activatingA.text + '”</span></span></button>';
		activatingA.insertAdjacentHTML('afterend', btn);

		const itemLink = item.querySelector('a');
		const itemButton = item.querySelector('button');
		const itemSubmenu = item.querySelector('ul');

		itemLink.setAttribute('aria-expanded', 'false');
		itemButton.setAttribute('aria-expanded', 'false');

		if (item.closest('.main-navigation')) { // Desktop only.
			item.addEventListener('mouseover', () => {
				item.classList.add('open');
				itemLink.setAttribute('aria-expanded', 'true');
				itemButton.setAttribute('aria-expanded', 'true');

				requestAnimationFrame(() => {
					itemSubmenu.style.opacity = '1';
				});
			});

			item.addEventListener('mouseout', () => {
				item.classList.remove('open');
				itemLink.setAttribute('aria-expanded', 'false');
				itemButton.setAttribute('aria-expanded', 'false');
				itemSubmenu.style.opacity = '0';
			});

			item.addEventListener('focusout', (e) => {
				// Wait a tick to let focus settle
				requestAnimationFrame(() => {
					if (!item.contains(document.activeElement)) {
						item.classList.remove('open');
						itemLink.setAttribute('aria-expanded', 'false');
						itemButton.setAttribute('aria-expanded', 'false');
					}
				});
			});

			item.addEventListener('keydown', function (e) {
				if (e.key === 'Escape' || e.key === 'Esc') {
					item.classList.remove('open');
					itemLink.setAttribute('aria-expanded', 'false');
					itemButton.setAttribute('aria-expanded', 'false');
					itemButton.focus(); // Return focus to button
				}
			});

			itemButton.addEventListener('click', function (event) {
				const isOpen = this.parentNode.classList.toggle('open');

				this.parentNode.querySelector('a').setAttribute('aria-expanded', isOpen.toString());
				this.parentNode.querySelector('button').setAttribute('aria-expanded', isOpen.toString());

				requestAnimationFrame(() => {
					itemSubmenu.style.opacity = '1';
				});

				event.preventDefault();
			});
		}
	});

	mmClones.querySelectorAll( '*' ).forEach( item => {
		if( item.id ) {
			item.id = item.id + "-drawer";
		}
	} );

	mmDrawer.querySelectorAll( '.menu-item-has-children' ).forEach( item => {
		// Add submenu header.
		const ul = item.querySelector('ul');

		if (ul) {
			const submenuHeader = document.createElement('li');
			submenuHeader.setAttribute('class', 'menu-header');
			submenuHeader.innerHTML = item.innerHTML;
			ul.prepend(submenuHeader);
		}

		// Add click events.
		item.addEventListener( 'click', function( event ) {
			// stop propagation of child elements
			item.querySelectorAll( 'li:not(.menu-item-has-children)' ).forEach( child => {
				child.addEventListener( 'click', function ( event ) {
					event.stopPropagation();
				});
			});

			item.classList.add( 'expanded' );

			mmTargets.push( this );
			slideMenus( this );
			scrollMenuToTop();

			mmDrawer.querySelectorAll( '.in-viewport' ).forEach( item => {
				item.classList.remove( 'in-viewport' );
			});
			item.querySelector('ul').classList.add('in-viewport');
			setFocusableToElementsInViewPort();

			mmNavigation.querySelectorAll('a').forEach( item => {
				item.setAttribute('aria-hidden', 'true');
			});

			item.querySelectorAll('ul a').forEach( item => {
				item.removeAttribute('aria-hidden');
			});

			if (typeof cleanupTrap === 'function') {
				cleanupTrap();
				cleanupTrap = null;
			}
			cleanupTrap = trapFocus(mmHeader);

			event.stopPropagation();
			event.preventDefault();
		});
	});

	mmBacker.addEventListener( 'click', function( event ) {
		event.preventDefault();
		if( mmTargets.length > 0 ) {
			mmDrawer.querySelectorAll( '.in-viewport' ).forEach( item => {
				item.classList.remove( 'in-viewport' );
			});
			mmTargets[mmTargets.length - 1].closest('ul').classList.add('in-viewport');
			setFocusableToElementsInViewPort();

			let collapse = mmTargets.pop();
			collapse.classList.remove( 'expanded' );
			slideMenus( this );
			scrollMenuToTop();
		}
		else {
			mmDrawer.querySelectorAll( '.in-viewport' ).forEach( item => {
				item.classList.remove( 'in-viewport' );
			});

			closeMenuDrawer();
		}
	} );

	mmHeader.addEventListener('keydown', function(e) {
		if ((e.code === 'Enter' || e.code === 'Space') && e.target.matches('[role="menuitem"], #menu-backer')) {
			e.preventDefault();
			e.target.click();
		}
	});
} );

// Trap focus.
function getFocusableElements(container) {
	return container.querySelectorAll('.main-navigation__toggle, #menu-backer, .in-viewport > li > a');
}

function trapFocus(container) {
	let focusable = getFocusableElements(container);

	function handleKey(e) {
		focusable = getFocusableElements(container); // Recalculate dynamically
		const first = focusable[0];
		const last = focusable[focusable.length - 1];

		if (e.key === 'Tab') {
			if (e.shiftKey && document.activeElement === first) {
				e.preventDefault();
				last.focus();
			} else if (!e.shiftKey && document.activeElement === last) {
				e.preventDefault();
				first.focus();
			}
		}

		if (e.key === 'Escape') {
			e.preventDefault();
			closeMenuDrawer();
		}
	}

	document.addEventListener('keydown', handleKey);

	return () => {
		document.removeEventListener('keydown', handleKey);
	};
}

cleanupTrap = null;

function openMenuDrawer() {
	backerContext();
	mmDrawer.querySelectorAll( 'a' ).forEach( item => {
		item.tabIndex = 0;
	} );
	mmBody.classList.add( 'menu-drawer-toggled');
	mmDrawer.classList.add( 'toggled' );
	mmDrawer.removeAttribute('aria-hidden');
	mmDrawer.removeAttribute('inert');
	mmToggli.classList.add( 'open' );

	const focusable = getFocusableElements(mmDrawer);
	if (focusable.length) focusable[0].focus();

	mmNavigation = mmDrawer.querySelector('.navigation');
	mmNavigation.classList.add('in-viewport');
	setFocusableToElementsInViewPort();

	cleanupTrap = trapFocus(mmHeader);
}

function setFocusableToElementsInViewPort() {
	mmNavigation.querySelectorAll( 'a' ).forEach( item => {
		item.tabIndex= -1;
		item.inert = true;
	} );

	mmDrawer.querySelectorAll( '.in-viewport > li > a' ).forEach( item => {
		item.tabIndex= 0;
		item.inert = false;
	} );
}

function closeMenuDrawer() {
	// clear the expanded targets array
	mmTargets = [];

	// remove the expanded class from all menu items
	mmDrawer.querySelectorAll( '.expanded' ).forEach( item => {
		item.classList.remove( 'expanded' );
	} );

	mmDrawer.querySelectorAll( '.in-viewport' ).forEach( item => {
		item.classList.remove( 'in-viewport' );
	});

	// remove collapsed items from the tabindex
	mmDrawer.querySelectorAll( 'a' ).forEach( item => {
		item.tabIndex = -1;
	} );

	// remove clone transformations
	mmClones.style.transform = "none";

	mmBody.classList.remove( 'menu-drawer-toggled');
	mmDrawer.classList.remove( 'toggled' );
	mmDrawer.setAttribute('aria-hidden', 'true');
	mmDrawer.setAttribute('inert', '');
	mmToggli.classList.remove( 'open' );
	mmToggli.focus();

	if (typeof cleanupTrap === 'function') {
		cleanupTrap();
		cleanupTrap = null;
	}
}

function slideMenus( target ) {
	backerContext();
	target.classList.add( 'expanded' );
	mmClones.style.transform = "translateX( -" + (100 * mmTargets.length) + "% )";
}

function backerContext() {
	if( mmTargets.length > 0 ) {
		mmBacker.innerHTML = previousText;
	}
	else {
		mmBacker.innerHTML = closeText;
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
