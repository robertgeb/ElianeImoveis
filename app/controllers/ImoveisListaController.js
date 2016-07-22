(function () {
  'use strict';

  angular.module('elianeimoveis').controller('ImoveisListaController', ImoveisListaController);

  ImoveisListaController.$inject = ['$scope', '$location', 'Imoveis'];

  function ImoveisListaController($scope, $location, Imoveis) {
    $scope.imoveis = [];
    $scope.valorMax = 200000;
    $scope.valorMin = 0;
    var promise = Imoveis.getImoveis();
    promise.then(function(data) {
      $scope.imoveis = data.data;
    });
    $scope.go = function ( path ) {
      $location.path( path );
    };
  };
})();
