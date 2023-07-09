import path from 'path'
import fs from 'fs'

const cacheDir = path.resolve(__dirname, '..' ,'node_modules/.cache')
fs.rmSync(cacheDir, { recursive: true, force: true })
