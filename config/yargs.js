const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    type: 'number',
                    demandOption: true,
                    describe: 'Es la base de la tabla de multiplicar'
                })
                .option('h', {
                    alias: 'hasta',
                    type: 'number',
                    default: 10,
                    describe: 'Multiplica hasta dicho número'
                })
                .option('l', {
                    alias: 'listar',
                    type: 'boolean',
                    default: false,
                    describe: 'Muestra la tabla en consola'
                })
                .check( (argv, options) => {
                    if( isNaN(argv.b) ){
                        throw 'La base tiene que ser un número';
                    }
                    if( isNaN(argv.h) ){
                        throw 'El parámetro hata tiene que ser un número';
                    }
                    if( !(typeof argv.l === "boolean") ){
                        throw 'Lista debe ser true o false'
                    }
                    return true;
                })
                .argv;

module.exports = argv;