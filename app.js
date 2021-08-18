const crearArchivo = require('./helpers/multiplicar');
const argv = require('./config/yargs')

console.clear();

crearArchivo(argv.b, argv.l, argv.h)
    .then(nombreArchivo => console.log(nombreArchivo, 'creado'))
    .catch(err => console.log(err));



/*
console.log(argv);
console.log('base: yargs:', argv.b);
*/

/*
const [ , , arg2] = process.argv;
const base = arg2.split("=")[1];
*/

/* const base = 4;   Line commented due the base number is sent
                     as an argument in the crearArchivo function
                     using process.argv to send arguments by 
                     command line.      
*/






