var data = require("sdk/self").data;

// Remove `navigator.plugins`.
var pageMod = require("sdk/page-mod");
pageMod.PageMod({
    include: "*",
    contentScriptWhen: 'start',
    contentScriptFile: data.url('plugins.js')
});