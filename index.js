/* jshint node: true */
'use strict';

var path = require('path');
var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-normalize',

  treeForStyles: function() {
    var normalizeModulePath = path.dirname(this.project.resolveSync('normalize.css'));
    var normalizeTree = new Funnel(this.treeGenerator(normalizeModulePath), {
      destDir: 'app/styles',
      include: ['normalize.css']
    });

    return normalizeTree;
  }
};
