(function () {
  'use strict';

  angular.module('elianeimoveis').controller('ImoveisListaController', ImoveisListaController);

  ImoveisListaController.$inject = ['$scope', 'Imoveis'];

  function ImoveisListaController($scope, Imoveis) {
    $scope.imoveis = [];
    var promise = Imoveis.getImoveis();
    promise.then(function(data) {
      $scope.imoveis = data.data;
    });
  };
})();
