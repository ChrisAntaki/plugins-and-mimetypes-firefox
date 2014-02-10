(function() {

    // Allow Google Hangouts.
    if (location.host === 'plus.google.com' || location.pathname.match(/hangouts/)) {
        return;
    }

    Object.defineProperty(unsafeWindow.navigator, 'plugins', {
        value: []
    });

    Object.defineProperty(unsafeWindow.navigator, 'mimeTypes', {
        value: []
    });

})();