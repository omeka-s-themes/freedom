document.addEventListener("DOMContentLoaded", function(event) {

    // Scrolling Events

    const mainHeader = document.querySelector('.main-header');
    const mainHeaderTopBar = document.querySelector('.main-header__top-bar');
    let lastKnownScrollPosition = 0;
    let ticking = false;
    let scrollDirection = 'up';

    function onScroll(scrollPos) {
        if(scrollPos > 20 && scrollDirection == 'down') {
            mainHeader.style.top = - (mainHeaderTopBar.offsetHeight) + 'px';
        } else {
            mainHeader.style.top = 0;
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
