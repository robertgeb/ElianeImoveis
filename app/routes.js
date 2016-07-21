(function () {
  'use strict';
  angular.module('elianeimoveis').
    config(['$locationProvider', '$routeProvider',
      function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.
          when('/', {
            controller: 'ImoveisListaController',
            templateUrl: 'app/view/index.html'
          }).
          when('/casas', {
            template: 'varias casas'
          }).
          otherwise('/');
      }
    ]);
})();
