const { contextBridge } = require('electron')
const { PythonShell } = require('python-shell')

contextBridge.exposeInMainWorld('api', {
  runPython: (args) =>
    new Promise((resolve, reject) => {
      PythonShell.run('backend/main.py', { args }, (err, result) => {
        if (err) reject(err)
        else resolve(result)
      })
    })
})
