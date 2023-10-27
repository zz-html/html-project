const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {   
  // �������������
  let win = new BrowserWindow({
    width: 800,
    height: 600,
	webPreferences: {
		preload: path.join(__dirname, 'preload.js'),
		nodeIntegration: false,
		devTools: true,
		webSecurity:false,
		experimentalFeatures:true,
		contextIsolation:false
	}

  })

  // ����index.html�ļ�
  //win.loadFile('index.html')
  win.loadFile('index-desktop.html')
}

 // Ӧ�ó���׼���������һ������
app.whenReady().then(createWindow)