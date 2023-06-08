'use strict';

window.addEventListener('load', () => {
    const menu = document.getElementById('menu-container');
    const trigger = document.getElementById('menu-trigger');

    const aboutScrollAnchor = document.getElementById('about-left-container');
    const processScrollAnchor = document.getElementById('process-right-container');
    const whoScrollAnchor = document.getElementById('coworkers-label');

    menu.style.visibility = 'hidden';

    menu.addEventListener('transitionend', () => {
        const isOpen = trigger.getAttribute('open') === 'true';

        if (!isOpen) {
            menu.style.visibility = 'hidden';
        }
    });

    const handleMenuTriggerClicked = () => {
        const isOpen = trigger.getAttribute('open') === 'true';
    
        if (isOpen) {
            menu.setAttribute('open', 'false');
            trigger.setAttribute('open', 'false');
            document.body.style.overflow = 'unset';
        } else {
            menu.style.visibility = 'visible';
            menu.setAttribute('open', 'true');
            trigger.setAttribute('open', 'true');
            document.body.style.overflow = 'hidden';
        }
    }

    document.getElementById('menu-trigger').addEventListener('click', handleMenuTriggerClicked);
    
    const handleMenuClick = (item, simulate=true) => {
        if (simulate) {
            // simulate menu closing
            handleMenuTriggerClicked();
        }

        const options = {
            behavior: 'smooth',
            block: 'center'
        };
    
        switch (item) {
            case 'home': {
                document.body.scrollTop = document.documentElement.scrollTop = 0;
                break;
            }
            case 'about': {
                aboutScrollAnchor.scrollIntoView(options);
                break;
            }
            case 'process': {
                processScrollAnchor.scrollIntoView(options);
                break;
            }
            case 'who': {
                whoScrollAnchor.scrollIntoView({ ...options, block: 'start' });
                break;
            }
        }
    }

    for (const link of document.getElementsByClassName('menu-link')) {
        link.addEventListener('click', () => {
            handleMenuClick(link.getAttribute('link-item'));
        });
    };
});
