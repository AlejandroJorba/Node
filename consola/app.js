const argv = require('./config/yargs');
const { crearArchivo } = require('./multiplicar');

const base = argv.b;
const hasta = argv.h;
const listar = argv.l;
const ahegao = argv.a;

crearArchivo(base, listar, hasta, ahegao)
    .then(msg => console.log(msg))
    .catch(e => console.log(e))
