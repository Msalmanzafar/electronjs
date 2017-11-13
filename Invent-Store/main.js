

const electron = require('electron');
const url = require('url');
const path = require('path');

const { app, BrowserWindow, Menu,ipcMain } = electron;

let mainWindow;
let addWindow;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
  });

  mainWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file',
    slashes: true
  }));
  mainWindow.on('closed', () => {
    app.quit();
  })

  const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
  Menu.setApplicationMenu(mainMenu);
});

// handele new Item
function createAddWindow() {
  addWindow = new BrowserWindow({
    width: 350,
    height: 250,
  });

  addWindow.loadURL(url.format({
    pathname: path.join(__dirname, 'addWindow.html'),
  }));

  addWindow.on('close',()=>{
    addWindow = null;
  })
  
}

ipcMain.on('item:add', (e,item)=>{
  mainWindow.webContents.send('item:add',item);
  addWindow.close();
})

const mainMenuTemplate = [
  {
    label: 'file',
    submenu: [
      {
        label: 'Add Item',
        click() {
          createAddWindow();
        }
      },
      {
        label: 'Clear Item',
        click(){
          mainWindow.webContents.send('item:clear')
        }
      },
      {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Commadn+Q' : 'Ctrl+Q',
        click() {
          app.quit();
        }
      }
    ]
  }
]

if(process.platform == 'darwin'){
  mainMenuTemplate.unshift({});
}

if(process.env.NODE_ENV !== 'production'){
  mainMenuTemplate.push({
    label: 'Developer Tools',
    submenu:[
      {
        label: 'Toggle Devtools',
        accelerator: process.platform == 'darwin' ? 'Command+I' : 'Ctrl+I',
        click(item, focuseWindow){
          focuseWindow.toggleDevTools();
        }
      },
      {
        role: 'reload'
      }
    ]
  })
}