var data = require("sdk/self").data;

// Remove `navigator.plugins`.
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: "*",
    contentScriptWhen: "start",
    contentScriptFile: data.url("clean.js")
});

// Create widget.
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var widget = widgets.Widget({
    id: "happy-bonobo--plugins-and-mimetypes",
    label: "Happy Bonobo: Clear Plugin & Mimetype Identifiers",
    contentURL: data.url("monkey-pl-16.png"),
    onClick: function() {
        tabs.open("https://github.com/happybonobo/plugins-and-mimetypes-firefox");
    }
});
