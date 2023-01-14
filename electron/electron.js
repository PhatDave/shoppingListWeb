// electron/electron.js
const path = require('path');
const {
	app,
	BrowserWindow
} = require('electron');

const isDev = process.env.IS_DEV == "true" ? true : false;

function createWindow() {
	const mainWindow = new BrowserWindow({
		                                     width: 800,
		                                     height: 600,
		                                     webPreferences: {
												 webSecurity: false,
			                                     nodeIntegration: true,
		                                     },
	                                     });

	mainWindow.loadURL(isDev ? 'http://localhost:5173' : `file://${path.join(__dirname, '../dist/index.html')}`);
	// Open the DevTools.
	if (isDev) {
		mainWindow.webContents.openDevTools();
	}
}

app.whenReady().then(() => {
	createWindow()
	app.on('activate', function() {
		if (BrowserWindow.getAllWindows().length === 0) {
			createWindow()
		}
	})
});

app.on('window-all-closed', () => {
	if (process.platform !== 'darwin') {
		app.quit();
	}
});