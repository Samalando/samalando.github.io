document.addEventListener('DOMContentLoaded', function() {
    const dropdown = document.getElementById('dropdown');

    dropdown.addEventListener('change', function() {
        const selectedValue = this.value;

        if (selectedValue === 'abc') {
            sortSections('abc');
        } else if (selectedValue === 'zyx') {
            sortSections('zyx');
        } else if (selectedValue === 'old') {
            sortSectionsCustom('old');
        } else if (selectedValue === 'new') {
            sortSectionsCustom('newest');
        } else if (selectedValue === 'dh') {
            sortSectionsCustom('dh');
        }
    });

    function sortSections(direction) {
        const container = document.querySelector('.all-cards');
        const cards = Array.from(container.querySelectorAll('.card'));

        cards.sort((a, b) => {
            const titleA = a.querySelector('.card-title').textContent.trim().toLowerCase();
            const titleB = b.querySelector('.card-title').textContent.trim().toLowerCase();

            if (direction === 'abc') {
                return titleA.localeCompare(titleB);
            } else if (direction === 'zyx') {
                return titleB.localeCompare(titleA);
            }
        });

        // Re-append cards in sorted order
        cards.forEach(card => container.appendChild(card));
    }



    function sortSectionsCustom(direction) {
        const customOrder = ['Photon', 'Shrimple', 'Glimmer', 'Eclipse - A Bliss Edit', 'Sundial-lite', 'Bliss - Official', 'I like Vanilla', 'BSL', 'Continuum 2.0 Redux', 'Solas', 'Noble'];
        const DHSupport = ['Bliss - Official', 'BSL', 'Eclipse - A Bliss Edit', 'Glimmer', 'Noble', 'Photon', 'Shrimple', 'Solas', 'Sundial-Lite'];

        const container = document.querySelector('.all-cards');
        const cards = Array.from(container.querySelectorAll('.card'));

        if (direction === 'dh') {
            cards.forEach(card => {
                const title = card.querySelector('.card-title').textContent.trim();

                if (customOrder.includes(title) && !DHSupport.includes(title)) {
                    card.style.display = 'none';
                } else {
                    card.style.display = '';
                }
            });
        } else {
            // Show all cards and sort them
            cards.forEach(card => card.style.display = '');

            cards.sort((a, b) => {
                const titleA = a.querySelector('.card-title').textContent.trim();
                const titleB = b.querySelector('.card-title').textContent.trim();

                const indexA = customOrder.indexOf(titleA);
                const indexB = customOrder.indexOf(titleB);

                if (direction === 'old') {
                    return indexA - indexB;
                } else {
                    return indexB - indexA;
                }
            });

            cards.forEach(card => container.appendChild(card));
        }
    }
});