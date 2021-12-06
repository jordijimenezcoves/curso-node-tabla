const { crearArchivo } = require('./helpers/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then( res => console.log(colors.green(res)) )
    .catch( err => console.log(colors.red(err)) );
