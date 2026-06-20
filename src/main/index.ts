import { app, shell, BrowserWindow, ipcMain } from 'electron'
import { join } from 'path'
import { electronApp, optimizer, is } from '@electron-toolkit/utils'
import icon from '../../resources/icon.png?asset'
import { initDatabase, createUser, loginUser, Updatepassword, Getallprofiles } from './database'
import type { updatepss, Userojbect, usertype } from '../shared/usertypes'

function createWindow(): void {
  const mainWindow = new BrowserWindow({
    width: 900,
    height: 670,
    show: false,
    autoHideMenuBar: true,
    ...(process.platform === 'linux' ? { icon } : {}),
    webPreferences: {
      preload: join(__dirname, '../preload/index.js'),
      sandbox: false
    }
  })

  mainWindow.on('ready-to-show', () => {
    mainWindow.show()
  })

  mainWindow.webContents.setWindowOpenHandler((details) => {
    shell.openExternal(details.url)
    return { action: 'deny' }
  })

  if (is.dev && process.env['ELECTRON_RENDERER_URL']) {
    mainWindow.loadURL(process.env['ELECTRON_RENDERER_URL'])
  } else {
    mainWindow.loadFile(join(__dirname, '../renderer/index.html'))
  }
}

//one function here to handle creating profiles
function registerIpcHandlers(): void {
  ipcMain.handle('user:create', (_event, user: usertype) => {
    try {
      createUser(user)

      return {
        success: true,
        message: 'Successfully created !'
      }
    } catch {
      return {
        success: false,
        message: 'Failed to create !'
      }
    }
  })
}
//another function in main to handle login profile
function loginIpchandlers(): void {
  ipcMain.handle('user:login', (_event, user: usertype) => {
    const one = loginUser(user)
    if (!one) {
      return {
        value: one,
        success: false,
        message: 'Invalid username or password'
      }
    }

    return {
      success: true,
      message: 'Logged in successful'
    }
  })
}
//another function just simple get all profiles
function getallUsersIpchandlers(): void {
  ipcMain.handle('user:getall', () => {
    const allusers = Getallprofiles()

    if (!allusers || allusers.length === 0) {
      return {
        success: false
      }
    } else {
      return {
        value: allusers as Userojbect[],
        success: true
      }
    }
  })
}
//another function for updater password
function Userupdatepassword(): void {
  ipcMain.handle('user:passupdate', (_event, { password, id }: updatepss) => {
    const updating = Updatepassword({ password, id })
    if (!updating) {
      return {
        success: false
      }
    }
    return {
      success: true,
      message: 'User Updated seccessfully !'
    }
  })
}
app.whenReady().then(() => {
  electronApp.setAppUserModelId('com.desktop.loginapp')

  initDatabase()
  registerIpcHandlers()
  loginIpchandlers()
  getallUsersIpchandlers()
  Userupdatepassword()
  app.on('browser-window-created', (_, window) => {
    optimizer.watchWindowShortcuts(window)
  })

  createWindow()

  app.on('activate', function () {
    if (BrowserWindow.getAllWindows().length === 0) createWindow()
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})
