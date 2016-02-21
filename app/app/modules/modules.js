(function(){
  'use strict';

  angular
  .module('modules', [])
  .config(['$stateProvider', function($stateProvider){

    $stateProvider
    .state('layout.modules', {
      url: '/modules',
      templateUrl: 'app/modules/views/modules.html',
      controller: 'ModulesCtrl'
    });

  }]);

}());
