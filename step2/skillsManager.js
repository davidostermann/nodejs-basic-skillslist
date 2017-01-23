var skillList = []; // j'initialise mon tableau de compétence (skill)

var SkillsManager = {
  // methode 'add' de SkillsManager
  add: function(skill) {
    skillList.push(skill); // on ajoute la compétence passée en paramètre au tableau 'skillList'
    return SkillsManager; // on ajoute ça pour pouvoir chainer les appels
  },
  // methode 'remove' de SkillsManager
  remove: function(skill) {
    // je réécris le tableau 'skillList' avec le résultat de la methode filter
    skillList = skillList.filter( function(item) {
      return item !== skill; // je retourne tous les elements qui sont différents de la compétence passée en paramètre
    });
    return SkillsManager; // on ajoute ça pour pouvoir chainer les appels
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

// DANS LA CONSOLE NODE
/** /
var manager = require('./step2/skillsManager.js');
// après vous pouvez chainer les appels aux methodes add & remove
// par exemple
manager.add('css').add('js').add('git').list();
manager.add('nodejs').add('svg').list();
manager.add('css3');
manager.list();
manager.add('web audio').remove('svg').list()
/**/
