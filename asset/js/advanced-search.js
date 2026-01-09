const advancedSearchScripts = () => {
    const propertyQueries = document.getElementById('property-queries');
    const advancedSearch = document.getElementById('advanced-search');
    const addRowBtns = advancedSearch.querySelectorAll('.add-value');
    let subFields;
    let removeRowBtns;

    const placeLabels = (e = null) => {
        setTimeout(() => {
            if (e && e.target.classList.contains('add-value')) {
                const inputsGroup = e.target.previousElementSibling;
                if (!inputsGroup) return;

                const lastSelectAdded = inputsGroup.querySelector(
                    '.value:last-child select'
                );

                lastSelectAdded?.focus();
            }

            subFields = propertyQueries.querySelectorAll('.sub-field');
            subFields.forEach((subField) => {
                const prev = subField.previousElementSibling;
                if(prev.tagName == 'LABEL') {
                    prev.style.left = subField.offsetLeft + 'px';
                    prev.style.top = (subField.offsetTop - 19) + 'px';
                    prev.style.opacity = 1;
                }
            });

            removeRowBtns = propertyQueries.querySelectorAll('.remove-value');
            removeRowBtns.forEach((removeRowBtn) => {
                removeRowBtn.addEventListener('click', placeLabels);
            });
        }, 10);
    }

    placeLabels();

    addRowBtns.forEach(btn => {
        btn.addEventListener('click', placeLabels);
    });

    window.onresize = placeLabels;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', advancedSearchScripts);
} else {
    advancedSearchScripts();
}
