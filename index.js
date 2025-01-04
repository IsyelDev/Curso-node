import {suma , resta} from "./libreria/mate.js"
import numero from "./libreria/variable.js"

//const nuevo = require("node:sqlite")

console.log(suma(numero,2))
console.log(suma(100,20))
console.log(resta(100,20))
console.log(resta(1,20))

import os from 'node:os'

console.log('Información del sistema operativo:')
console.log('-------------------')

console.log('Nombre del sistema operativo', os.platform())
console.log('Versión del sistema operativo', os.release())
console.log('Arquitectura', os.arch())
console.log('CPUs', os.cpus())
console.log('Memoria libre', os.freemem() / 1024 / 1024)
console.log('Memoria total', os.totalmem() / 1024 / 1024)
console.log('uptime', os.uptime() / 60 / 60)

//REPLAY 
