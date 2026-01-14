const advancedSearchScripts = () => {
    const propertyQueries = document.getElementById('property-queries');
    const advancedSearch = document.getElementById('advanced-search');
    const addRowBtns = advancedSearch.querySelectorAll('.add-value');
    let subFields;

    const onAddOrRemoveFormRows = (e = null) => {
        // Handle focus when removing a row
        if (e && e.type !== 'resize' && e.target.classList.contains('remove-value')) {
            const inputGroup = e.target.parentElement;

            if (e.target.closest('#property-queries') && inputGroup === inputGroup.parentNode.firstElementChild) { // First Delete button
                focusNextElement(2);
            } else {
                focusNextElement();
            }
        }

        setTimeout(() => {
            // Focus the last added select element
            if (e && e.type !== 'resize' && e.target.classList.contains('add-value')) {
                const inputsGroup = e.target.previousElementSibling;
                if (!inputsGroup || !inputsGroup.classList.contains('inputs')) {
                    return;
                }

                const lastSelectAdded = inputsGroup.querySelector(
                    '.value:last-child select'
                );

                lastSelectAdded.focus();
            }

            // Relocate labels for property queries
            subFields = propertyQueries.querySelectorAll('.sub-field');
            subFields.forEach((subField) => {
                const prev = subField.previousElementSibling;
                if (prev.tagName == 'LABEL') {
                    prev.style.left = subField.offsetLeft + 'px';
                    prev.style.top = (subField.offsetTop - 19) + 'px';
                    prev.style.opacity = 1;
                }
            });

            // Add newly added remove buttons event listeners
            const removeRowBtns = advancedSearch.querySelectorAll('.remove-value');
            removeRowBtns.forEach(btn => {
                btn.addEventListener('click', onAddOrRemoveFormRows);
            });
        }, 10);
    }

    onAddOrRemoveFormRows();

    addRowBtns.forEach(btn => {
        btn.addEventListener('click', onAddOrRemoveFormRows);
    });

    window.onresize = onAddOrRemoveFormRows;

    function focusNextElement(offset = 1) {
        const focusableSelectors = [
            'a[href]',
            'button:not([disabled])',
            'input:not([disabled])',
            'select:not([disabled])',
            'textarea:not([disabled])',
            '[tabindex]:not([tabindex="-1"])'
        ];

        const focusable = Array.from(
            document.querySelectorAll(focusableSelectors.join(','))
        ).filter(el => el.offsetParent !== null); // visible only

        const index = focusable.indexOf(document.activeElement);
        const targetIndex = index + offset;

        if (index !== -1 && targetIndex >= 0 && targetIndex < focusable.length) {
            focusable[targetIndex].focus();
        }
    }
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', advancedSearchScripts);
} else {
    advancedSearchScripts();
}
