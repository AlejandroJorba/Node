const { type } = require('os');

require('colors');
const argv = require('yargs')
    .option('b',{
        alias: 'base',
        type: 'number',
        demandOption: true,
        description: 'Obtiene la tabla del número ingresado'.green
    })
    .option('l',{
        alias: 'listar',
        type: 'boolean',
        default: false,
        description: 'Muestra la tabla'.yellow
    })
    .option('h',{
        alias: 'hasta',
        type: 'number',
        description: 'Elige hasta donde va a llegar la tabla'.cyan
    })
    .option('a', {
        alias: 'ahegao',
        type: 'boolean',
        description: 'Muestra un ahegao :p'.rainbow
    })
    .check((argv,options)=>{
        if(isNaN(argv.b) || isNaN(argv.h)){
            throw 'Solo se admiten valores numéricos';
        }
        return true;
    }).argv

    module.exports = argv;
