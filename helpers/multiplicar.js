const fs = require('fs');
const { argv } = require('process');


const crearArchivo = async(base = 5, listar = false, hasta = 10) => {
    
    try {   
        let salida = '';
        
        for (let i = 1; i <=hasta; i++) {
            
        salida += `${base} x ${i} = ${base * i}\n`;
            
        }

        if (listar === true){

            console.log('===================');
            console.log(`Tabla del: ${base}`);
            console.log('===================');

            console.log(salida);
        }

        fs.writeFileSync(`./salida/Tabla del ${base}.txt`, salida); 
        return `tabla-${base}.txt`;

    } catch (err) {
        throw err;
    }


}

module.exports = crearArchivo;

