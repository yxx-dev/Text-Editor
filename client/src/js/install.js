const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    // event.prompt();
    // event.preventDefault();
    console.log('beforeinstallprompt triggered')
    window.deferredPrompt = event;
    // butInstall.classList.toggle('hidden', false);
});

// a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    console.log("install button clicked");
    const promptEvent = window.deferredPrompt;
    if(!promptEvent) {
        console.log('no promptEvent');
        return;
    }
    promptEvent.prompt();
    window.deferredPrompt = null;
    // butInstall.classList.toggle('hidden', true);
});

// an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    window.deferredPrompt = null;
    // window.prompt('App installed!');
    // butInstall.setAttribute('display', 'hidden');
});
