const showMoreFacets = (button) => {
    const facets = document.getElementById('facets');
    facets.classList.toggle('show-all');

    if (button.innerHTML === 'Show more') {
        button.innerHTML = 'Show less';
    } else {
        button.innerHTML = 'Show more';
    }
};
