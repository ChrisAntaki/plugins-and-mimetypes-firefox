var data = require("sdk/self").data;

// Create widget.
var widgets = require("sdk/widget");
var tabs = require("sdk/tabs");
var widget = widgets.Widget({
    id: 'happy-bonobo--plugins-and-mimetypes',
    label: 'Happy Bonobo: Plugins & Mimetypes',
    contentURL: data.url('monkey.png'),
    onClick: function() {
        tabs.open("https://github.com/ChrisAntaki");
    }
});

// Remove `navigator.plugins`.
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: "*",
    contentScriptWhen: 'start',
    contentScriptFile: data.url('plugins.js')
});