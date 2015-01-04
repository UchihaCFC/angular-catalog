'use strict';

/**
 * @ngdoc function
 * @name catalogApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the catalogApp
 */
angular.module('catalogApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
