const { app, BrowserWindow, Menu } = require('electron');

Menu.setApplicationMenu(null);

const createWindow = () => {
    const win = new BrowserWindow({
        minWidth: 1280,
        minHeight: 720,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(() => {
    createWindow();
})

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit();
});