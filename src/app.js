const electron = require('electron');
const {app} = require('electron');
const {BrowserWindow} = require('electron');
const {globalShortcut} = require('electron');
const {Tray} = require('tray');

app.on('ready', function(){

    const ret = globalShortcut.register('CommandOrControl+X', () => {
        win.toggleDevTools();
    });

    const windowWidth = 600;
    const windowHeight = 350;

    globalShortcut.register('Command+W', () => {
        let win = new BrowserWindow({
            transparent: true,
            frame: false,
            x: electron.screen.getCursorScreenPoint().x - windowWidth / 2,
            y: electron.screen.getCursorScreenPoint().y - windowHeight / 2,
            width: windowWidth,
            height: windowHeight
        });
        win.loadURL("file://" + __dirname + "/windows/bakuretsu-window.html");
        win.setAlwaysOnTop(true);
        win.setIgnoreMouseEvents(true)
    });
});

app.on('window-all-closed', () => {

});
