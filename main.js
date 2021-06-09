const { app, BrowserWindow } = require('electron')

try {

    if (!app.isPackaged)

        require('electron-reloader')(module)

    app.whenReady().then(() => {

        const minhaJanela = new BrowserWindow({

            width: 600,
            height: 400,
            resizable: false,
            center: true,
            show: false,
            autoHideMenuBar: true,
            webPreferences: {

                nodeIntegration: true,
                contextIsolation: false
            }
        })

        minhaJanela.loadFile('src/index.html')
        minhaJanela.once('ready-to-show', () => {

            minhaJanela.show()
        })
    })

} catch (error) {

    console.error(error)
}
