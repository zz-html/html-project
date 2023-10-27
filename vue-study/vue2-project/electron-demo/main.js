const { app, BrowserWindow } = require('electron')
const path = require('path')

function createWindow () {   
  // 创建浏览器窗口
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

  // 加载index.html文件
  //win.loadFile('index.html')
  win.loadFile('index-desktop.html')
}

 // 应用程序准备就绪后打开一个窗口
app.whenReady().then(createWindow)