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
    },
    {
        "file": "plugins/com.phonegap.plugins.PushPlugin/www/PushNotification.js",
        "id": "com.phonegap.plugins.PushPlugin.PushNotification",
        "clobbers": [
            "PushNotification"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.phonegap.plugins.facebookconnect": "0.3.8",
    "com.phonegap.plugins.PushPlugin": "2.1.1"
}
// BOTTOM OF METADATA
});