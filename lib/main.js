var preferences = require('sdk/preferences/service');

var enabled = false;
var key = 'plugins.enumerable_names';

exports.main = enable;
function enable() {
    enabled = true;
    preferences.set(key, '');
}

exports.onUnload = disable;
function disable() {
    enabled = false;
    preferences.reset(key);
}

// Toggle Button
var { ActionButton } = require('sdk/ui/button/action');
var button = ActionButton({
    id: 'toggle',
    label: 'Toggle Plugins and Mimetypes',
    icon: './monkey-pl.png',
    onClick: onClick
});

function onClick() {
    if (enabled) {
        button.icon = './monkey-pl-bw.png';
        disable();
    } else {
        button.icon = './monkey-pl.png';
        enable();
    }
}
