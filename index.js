const disclosures = document.querySelectorAll('.js-disclosure');

function toggleDisclosure() {
    const isExpanded = this.getAttribute('aria-expanded') === 'true';
    this.setAttribute('aria-expanded', !isExpanded);
}

function init() {
    if (!disclosures.length) {
        return
    }

    disclosures.forEach(component => {
        component.dataset.state = 'ready';

        const disclosureButtons = component.querySelectorAll('.js-disclosure-btn');

        disclosureButtons.forEach(btn => {
            btn.removeAttribute('title');
            btn.removeAttribute('disabled');

            btn.addEventListener('click', toggleDisclosure);
        });
    });
}

init();