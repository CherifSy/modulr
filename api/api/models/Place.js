/**
* Place.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

var _ = require('lodash');

module.exports = _.merge(_.cloneDeep(require('./base')), {

  attributes: {
    userId: {
      model: 'user'
    },
    adress: {
      type: 'string'
    },
    currently: {
      type: 'boolean',
      defaultsTo: false
    }
  }
  
});
