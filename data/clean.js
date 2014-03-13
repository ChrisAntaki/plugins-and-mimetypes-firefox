(function() { // :)



    // Allow Google Hangouts.
    if (location.host === "plus.google.com" &&
        location.pathname.match(/hangouts/)) {
        return;
    }

    // Allow Gmail.
    if (location.host === "mail.google.com") {
        return;
    }

    // Clear `plugin` indentifiers.
    Object.defineProperty(unsafeWindow.navigator, "plugins", {
        value: void 0
    });

    // Clear `mimetype` indentifiers.
    Object.defineProperty(unsafeWindow.navigator, "mimeTypes", {
        value: void 0
    });



})(); // :)
