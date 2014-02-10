(function() {

    // Allow Google Hangouts.
    var googleHangouts = location.host === 'plus.google.com' && location.pathname.match(/hangouts/);
    if (googleHangouts) {
        return;
    }

    Object.defineProperty(unsafeWindow.navigator, 'plugins', {
        value: []
    });

    Object.defineProperty(unsafeWindow.navigator, 'mimeTypes', {
        value: []
    });

})();