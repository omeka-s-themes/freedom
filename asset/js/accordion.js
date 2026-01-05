document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('click', function (e) {
        const trigger = e.target.closest('.accordion__trigger');
        if (!trigger) return;

        trigger.classList.toggle('expanded');
        trigger.setAttribute(
            'aria-expanded',
            trigger.classList.contains('expanded')
        );

        trigger.parentElement.parentElement.classList.toggle('expanded');

        const panel = trigger.parentElement.nextElementSibling;
        if (!panel) return;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + 'px';
        }
    });

    function refreshPanelsHeight() {
        document
            .querySelectorAll('.accordion__trigger.expanded')
            .forEach(trigger => {
                const panel = trigger.parentElement.nextElementSibling;
                if (panel) {
                    panel.style.maxHeight = panel.scrollHeight + 'px';
                }
            });
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
});
