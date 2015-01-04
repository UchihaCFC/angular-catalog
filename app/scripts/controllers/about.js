'use strict';

/**
 * @ngdoc function
 * @name catalogApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the catalogApp
 */
angular.module('catalogApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
