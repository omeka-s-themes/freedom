const advancedSearchScripts = () => {
    const propertyQueries = document.getElementById('property-queries');
    const addRowBtn = propertyQueries.querySelector('.add-value');
    let subFields;
    let removeRowBtns;

    const placeLabels = () => {
        setTimeout(() => {
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

    addRowBtn.addEventListener('click', placeLabels);

    window.onresize = placeLabels;
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', advancedSearchScripts);
} else {
    advancedSearchScripts();
}
