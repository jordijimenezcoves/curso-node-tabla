const fs = require('fs');
const colors = require('colors');

const crearArchivo = async (base = 1, listar = false, hasta = 10) => {

    try {
        let salida = '';
        let consola = '';
    
        for(let i=1; i<=hasta; i++) {
            salida += `${base} x ${i} = ${base*i}\n`;
            consola += `${base} ${'x'.blue} ${i} ${'='.blue} ${base*i}\n`;
        }
    
        if (listar) {
            console.log(colors.green(`=================`));
            console.log(colors.rainbow(`Tabla del ${base}`));
            console.log(colors.green(`=================`));
            console.log(consola);
        }

        fs.writeFileSync(`tabla-${base}.txt`, salida);

        return `Archivo "tabla-${base}.txt" creado correctamente\n`;
        
    } catch (error) {
        throw error;
    }
}

module.exports = {
    crearArchivo
}