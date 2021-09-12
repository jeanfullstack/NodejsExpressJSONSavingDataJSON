const app = require('./app');

async function main () {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));

}

main(); //Se ejecuta la funcion main


//app.listen(3000, () => {
//    console.log('Server on port 3000');
//});

//Hora 1 Min 12
