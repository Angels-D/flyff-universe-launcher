const path = require('path');
const builder = require('electron-builder');
const pg = require('./package.json');

builder.build({
    win: [],
    linux: [],
    projectDir: path.resolve(__dirname),
    config: {
        files: [
            "dist/main.js",
            "dist/windows/**",
            "dist/preload/**",
            "icon/**",
            {
                from: "public/",
                to: "public",
            }
        ],
        appId: pg.appId,
        productName: "flyff universe launcher",
        directories: {
            "output": "build/win/" + pg.version
        },
        nsis: {
            "allowToChangeInstallationDirectory": true,
            "oneClick": false,
        },
        win: { 
            icon: path.resolve(__dirname, 'icon/icon.png'),
            target: {
                target: 'nsis',
                arch: 'x64'
            }
        },
        linux: {
            icon: path.resolve(__dirname, 'icon/icon.png'),
            target: {
                target: 'AppImage',
                arch: [ 'x64','arm64' ]
            }
        }
    },
}).then(
    data => console.log(data),
    err => console.error(err)
);
