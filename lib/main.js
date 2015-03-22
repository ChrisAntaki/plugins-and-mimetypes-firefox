var { ActionButton } = require('sdk/ui/button/action');
var preferences = require('sdk/preferences/service');
var { PrefsTarget } = require('sdk/preferences/event-target');

function SettingsAddon(params) {
    this.icons = params.icons;
    this.key = params.key;
    this.labels = params.labels;
    this.value = params.value;

    this.button = this.createButton();
    this.enabled = false;
    this.target = PrefsTarget({ branchName: this.key });

    this.listen();
    this.enable();
}

SettingsAddon.prototype.createButton = function() {
    return ActionButton({
        icon: this.icons.enabled,
        id: 'toggle',
        label: this.labels.enabled,
        onClick: this.onClick.bind(this),
    });
};

SettingsAddon.prototype.disable = function() {
    this.enabled = false;
    preferences.reset(this.key);
};

SettingsAddon.prototype.enable = function() {
    this.enabled = true;
    preferences.set(this.key, this.value);
};

SettingsAddon.prototype.listen = function() {
    this.target.on('', this.onChange.bind(this));
};

SettingsAddon.prototype.onChange = function() {
    this.enabled = (preferences.get(this.key) === this.value);
    this.render();
};

SettingsAddon.prototype.onClick = function() {
    if (this.enabled) {
        this.disable();
    } else {
        this.enable();
    }
};

SettingsAddon.prototype.render = function() {
    if (this.enabled) {
        this.button.label = this.labels.enabled;
        this.button.icon = this.icons.enabled;
    } else {
        this.button.label = this.labels.disabled;
        this.button.icon = this.icons.disabled;
    }
};

var addon = new SettingsAddon({
    key: 'plugins.enumerable_names',
    icons: {
        disabled: './unsafe.png',
        enabled: './safe.png',
    },
    labels: {
        disabled: 'Plugins and mimetypes are enumerable. Be careful.',
        enabled: 'Plugins and mimetypes are secured.',
    },
    value: '',
});

exports.main = addon.enable.bind(addon);
exports.onUnload = addon.disable.bind(addon);
