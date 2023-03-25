document.addEventListener("DOMContentLoaded", function(event) {

    // Scrolling Events

    const mainHeader = document.querySelector('.main-header');
    const mainHeaderTopBar = document.querySelector('.main-header__top-bar');
    const mainHeaderMainBar = document.querySelector('.main-header__main-bar');
    const menuDrawer = document.getElementById('menu-drawer');

    let lastKnownScrollPosition = 0;
    let ticking = false;
    let scrollDirection = 'up';

    onScroll();

    function onScroll(scrollPos) {
        if(scrollPos > 60 && scrollDirection == 'down') {
            mainHeader.style.top = - (mainHeaderTopBar.offsetHeight) + 'px';
            menuDrawer.style.top = mainHeaderMainBar.offsetHeight + 'px';
        } else {
            mainHeader.style.top = 0;
            menuDrawer.style.top = mainHeader.offsetHeight + 'px';
        }
    }

    document.addEventListener('scroll', (event) => {
        scrollDirection = Math.max(lastKnownScrollPosition, window.scrollY) == lastKnownScrollPosition ? 'up': 'down';
        lastKnownScrollPosition = window.scrollY;

        if (!ticking) {
            window.requestAnimationFrame(() => {
                onScroll(lastKnownScrollPosition);
                ticking = false;
            });

            ticking = true;
        }
    });

});
