cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.phonegap.plugins.facebookconnect/www/pg-plugin-fb-connect.js",
        "id": "com.phonegap.plugins.facebookconnect.cdv.fb",
        "merges": [
            "CDV.FB"
        ]
    },
    {
        "file": "plugins/com.phonegap.plugins.facebookconnect/www/facebook-connect-debug.js",
        "id": "com.phonegap.plugins.facebookconnect.fb",
        "merges": [
            "FB"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.facebookconnect": "0.3.8"
}
// BOTTOM OF METADATA
});