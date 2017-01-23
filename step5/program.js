var manager = require('./skillsManager.js');

var methodStr = process.argv[2]; // je recupere le 3eme argument
var skillStr = process.argv[3]; // je recupere le 4eme argument

switch (methodStr) {
  case 'add':
  case 'remove':
    if(!skillStr) {
      return console.error('il faut ajouter un skill en 2eme parametre !');
    }
    manager[methodStr](skillStr); // j'execute la methode 'methodStr' avec 'skillStr' comme argument
    break;
  case 'list':
    console.log(manager[methodStr]()); // je log le résultat de la methode 'methodStr'
    break;
  default :

}

// GRÂCE À PROGRAM.JS, ON PEUT ÉXÉCUTER LES METHODES DE SKILLSMANAGER EN LIGNE DE COMMAND
// par exemple
// $ node step5/program.js add css
// $ node step5/program.js add js
// $ node step5/program.js list
// $ node step5/program.js remove js
// $ node step5/program.js list
