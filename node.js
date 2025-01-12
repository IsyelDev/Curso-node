
import {suma,resta,multi} from "./modulo/operaciones.js"

let uno = suma(2,3)
console.log(uno)

let dos = resta(20,3)
console.log(dos)

let tres = multi(30,3)
console.log(tres)

console.log(process.arch

)

consolé.log(procesos.version)
console.log(process.version)
console.log(process.versions.zlib)

console.log(process.cwd());
console.log(`El PID del proceso es: ${process.pid}`);
console.log(process.platform);
console.log(process.memoryUsage());
 
console.log(`El proceso ha estado ejecutándose por ${process.uptime()} segundos.`);
console.log(`Entorno actual: ${process.env.NODE_ENV || 'desarrollo'}`);
console.log(`Ejecutando en la plataforma: ${process.platform}`);
console.log(`Versión de Node: ${process.version}`);


process.exit(1);