
var skillList = []; // j'initialise mon tableau de compétence (skill)

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
    // TODO in step3
  }
};

module.exports = SkillsManager;

/** /
var manager = require('./step1/skillsManager.js');
manager.add('css');
manager.add('js');
manager.add('git');
manager.add('nodejs');
manager.add('svg');
manager.add('css3');
manager.add('html5');
manager.list();
manager.remove('svg')
manager.list();
/**/
