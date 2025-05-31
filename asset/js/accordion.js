const accordionScript = () => {

    const accordionTrigger = document.getElementsByClassName('accordion__trigger');

    for (let i = 0; i < accordionTrigger.length; i++) {
        accordionTrigger[i].addEventListener('click', function() {
            this.classList.toggle('expanded');
            this.setAttribute('aria-expanded', this.classList.contains('expanded'));
            this.parentElement.parentElement.classList.toggle('expanded');
            const panel = this.parentElement.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        });
    }

    function refreshPanelsHeight() {
        for (let i = 0; i < accordionTrigger.length; i++) {
            const panel = accordionTrigger[i].parentElement.nextElementSibling;
            if (panel.style.maxHeight) {
                panel.style.maxHeight = panel.scrollHeight + 'px';
            }
        }
    }

    const expandCollapseBtns = document.querySelectorAll('.resources-linked__expand-collapse-btn');

    expandCollapseBtns.forEach((expandCollapseBtn) => {
        expandCollapseBtn.addEventListener('click', function() {
            if (this.classList.contains('expanded')) {
                const expandedTriggers = this.parentElement.nextElementSibling.querySelectorAll('.accordion__trigger.expanded');
                expandedTriggers.forEach((expandedTrigger) => {
                    expandedTrigger.click();
                });

                this.innerText = expandAllText;
                this.classList.remove('expanded');
            } else {
                const collapsedTriggers = this.parentElement.nextElementSibling.querySelectorAll('.accordion__trigger:not(.expanded)');
                collapsedTriggers.forEach((collapsedTrigger) => {
                    collapsedTrigger.click();
                });

                this.innerText = collapseAllText;
                this.classList.add('expanded');
            }
        });
    });

    // Resize Events

    let timeout = false;
    const delay = 250;

    onResize();

    function onResize() {
        refreshPanelsHeight();
    }

    window.addEventListener('resize', function() {
        clearTimeout(timeout);
        timeout = setTimeout(onResize, delay);
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', accordionScript);
} else {
    accordionScript();
}
