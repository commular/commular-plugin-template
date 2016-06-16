'use strict';

var commularPlugin = require('../scripts');

var path = require('path');
var dircompare = require('dir-compare');
var dcOptions = {
  compareSize: true,
  compareContent: true,
  skipSymlinks: true
};
var bddStdin = require('bdd-stdin');
var fs = require('fs');
var pmock = require('pmock');

exports.commularTest = {
  "test": function(test) {
    test.expect(1);
    test.equals(true, true, 'That is true.');
    test.done();
  }
};
