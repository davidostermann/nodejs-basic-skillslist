var fs = require('fs'); // module node pour interagir avec le file system de votre machine

var filePath = './step4/skills.json';

// on ajoute une fonction qui écrit dans le fichier skills.json
var internalSaveSkills = function(skills) {
  var data = { skills: skills}; // je stocke le tableau de compétence dans la proriété 'skills'
  var strData = JSON.stringify(data); // je transforme l'objet 'data' en string
  fs.writeFileSync(filePath, strData); // j'écris la chaine de caractère 'strData' dans le fichier skills.json
}

// une function pour lire le contenu du fichier
var internalReadSkills = function() {
  var jsonData = fs.readFileSync(filePath); // j'écris le contenu du fichier skills.json
  var jsData = JSON.parse(jsonData); // je transforme le contenu du fichier skills.json en objet javascript
  return jsData.skills; // je retourne la valeur de la propriété 'skills' de l'objet 'jsData'
}

var skillList = internalReadSkills(); // j'initialise mon tableau en recuperant le contenu du fichier skills.json

var SkillsManager = {
  // methode 'add' de SkillsManager
  add: function(skill) {
    skillList.push(skill); // on ajoute la compétence passée en paramètre au tableau 'skillList'
  },
  // methode 'remove' de SkillsManager
  remove: function(skill) {
    // je réécris le tableau 'skillList' avec le résultat de la methode filter
    skillList = skillList.filter( function(item) {
      return item !== skill; // je retourne tous les elements qui sont différents de la compétence passée en paramètre
    });
  },
  // methode 'list' de SkillsManager
  list: function() {
    return skillList;
  },
  // methode 'save' de SkillsManager
  save: function() {
    internalSaveSkills(skillList);
  }
};

module.exports = SkillsManager;

// DANS LA CONSOLE NODE
/** /
var manager = require('./step4/skillsManager.js');
manager.list(); // on peut lister pour voir le contenu de la derniere sauvegarde
mmanager.add('css3');
manager.add('svg');
manager.add('js');
manager.list();
manager.remove('svg')
manager.list()
manager.save()
/**/
