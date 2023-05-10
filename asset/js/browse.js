const browseScripts = () => {
    const resources = document.querySelectorAll('.resources');

    resources.forEach((resourcesSet, index) => {
        const resourceItems = resourcesSet.querySelectorAll('.resource');
        const layoutToggles = resourcesSet.parentElement.querySelectorAll('.layout-toggle button');

        const initMasonryGrid = () => {
            if (resourcesSet.classList.contains('resource-grid') && !resourcesSet.dataset.masonryReady) {
                // Masonry
                resourcesSet.dataset.masonryReady = true;
                var masonry = new MiniMasonry({
                    container: resourcesSet,
                    gutter: 27,
                    ultimateGutter: 27,
                    surroundingGutter: false
                });

                //Reset layout on img load
                resourcesSet.querySelectorAll('img').forEach((img) => img.addEventListener('load', () => masonry.layout()))
            }
        }

        initMasonryGrid();

        layoutToggles.forEach((layoutToggle) => {
            layoutToggle.addEventListener('click', (e) => {
                const layoutToggleDisabled = e.currentTarget.parentElement.querySelector('.layout-toggle button:disabled');
                layoutToggleDisabled.removeAttribute('disabled');
                e.currentTarget.setAttribute('disabled', true);
                resourcesSet.classList.toggle('resource-list');
                resourcesSet.classList.toggle('resource-grid');

                resourceItems.forEach((resource) => {
                    resource.classList.toggle('media-object');
                    const thumbnailWithDecoration = resource.querySelector('.resource__thumbnail.decoration');
                    if (thumbnailWithDecoration) {
                        thumbnailWithDecoration.classList.toggle('decoration--thumbnail');
                    }
                        
                    const resourceMeta = resource.querySelector('.resource-meta');
                    if (resourceMeta) {
                        resourceMeta.classList.toggle('media-object-section');
                    }

                    const resourceImage = resource.querySelector('.resource-image');
                    if (resourceImage) {
                        resourceImage.classList.toggle('media-object-section');
                    }
                });

                initMasonryGrid();
            });
        });
    });
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', browseScripts);
} else {
    browseScripts();
}
