var fs = require('fs'); // module node pour interagir avec le file system de votre machine

var filePath = './step5/skills.json';

// une fonction qui écrit dans le fichier skills.json
var internalSaveSkills = function(skills) {
  var data = { skills: skills};
  var strData = JSON.stringify(data);
  fs.writeFileSync(filePath, strData);
}

// une function pour lire le contenu du fichier
var internalReadSkills = function() {
  var jsonData = fs.readFileSync(filePath); // j'écris le contenu du fichier skills.json
  var jsData = JSON.parse(jsonData); // je transforme le contenu du fichier skills.json en objet javascript
  return jsData.skills; // je retourne la valeur de la propriété 'skills' de l'objet 'jsData'
}

var skillList = internalReadSkills();  // j'initialise mon tableau en recuperant le contenu du fichier skills.json

var SkillsManager = {
  // methode 'add' de SkillsManager
  add: function(skill) {
    skillList.push(skill); // on ajoute la compétence passée en paramètre au tableau 'skillList'
    internalSaveSkills(skillList); // j'écris le nouveau tableau dans skills.json
  },
  // methode 'remove' de SkillsManager
  remove: function(skill) {
    // je réécris le tableau 'skillList' avec le résultat de la methode filter
    skillList = skillList.filter( function(item) {
      return item !== skill; // je retourne tous les elements qui sont différents de la compétence passée en paramètre
    });
    internalSaveSkills(skillList); // j'écris le nouveau tableau dans skills.json
  },
  // methode 'list' de SkillsManager
  list: function() {
    return skillList;
  },
  // methode 'save' de SkillsManager
  save: function() {
    internalSaveSkills(skillList); // j'écris le nouveau tableau dans skills.json
    return SkillsManager;
  }
};

module.exports = SkillsManager;

// DANS LA CONSOLE NODE
/** /
var manager = require('./step5/skillsManager.js');
// par exemple
manager.list(); // on peut lister pour voir le contenu de la derniere sauvegarde
manager.add('css3');
manager.add('svg');
manager.add('js');
manager.list();
manager.remove('svg')
manager.list()
/**/

// EN LIGNE DE COMMAND EN PASSANT PAR PROGRAM.JS (cf. program.js)
