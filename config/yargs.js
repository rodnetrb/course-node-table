const argv = require('yargs')
                .option('b', {
                    alias: 'base',
                    demandOption: true,                
                    type: 'number',
                    describe: 'Is the base of the multiplication table'
                })                
                .option('l', {
                    alias: 'listar',
                    demandOption: true,
                    default: false,
                    type: 'boolean',
                    describe: 'Is to show/print the multiplication table result'
                })
                .option('h', {
                    alias: 'hasta',
                    demandOption: false,                
                    type: 'number',
                    describe: 'Is the # multiplier of the multiplication table'
                })

                .check((argv, options) => {
                    if (isNaN(argv.b)) {
                        throw new Error("ERROR: The argument passed to b/base should be number"); 
                    }
                    return true;
                })
                .argv;

module.exports = argv;


