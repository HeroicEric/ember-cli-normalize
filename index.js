/* jshint node: true */
'use strict';

var Funnel = require('broccoli-funnel');

module.exports = {
  name: 'ember-normalize',

  treeForStyles: function() {
    var normalizePath = this.project.resolveSync('normalize.css');
    var normalizeTree = new Funnel(this.treeGenerator(normalizePath), {
      srcDir: '/',
      destDir: '/app/styles'
    });

    return normalizeTree;
  }
};
