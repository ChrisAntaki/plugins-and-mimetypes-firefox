var preferences = require("sdk/preferences/service");

exports.main = function() {
    preferences.set('plugins.enumerable_names', '');
}

exports.onUnload = function() {
    preferences.reset('plugins.enumerable_names');
}
