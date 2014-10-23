var preferences = require('sdk/preferences/service');

var key = 'plugins.enumerable_names';
var value;

exports.main = function() {
	value = preferences.get(key);
	preferences.set(key, '');
}

exports.onUnload = function() {
	preferences.reset(key);
}
