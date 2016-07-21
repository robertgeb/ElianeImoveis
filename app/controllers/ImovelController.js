(function () {
  'use strict';

  angular.module('elianeimoveis').controller('ImovelController', ImovelController);

  ImovelController.$inject = ['$scope', 'Imoveis', '$routeParams'];

  function ImovelController($scope, Imoveis, $routeParams) {
    $scope.imovel = {};
    $scope.imovel.imovelID = $routeParams.imovelID;

    Imoveis.getImovelById($scope.imovel.imovelID)
      .then(function (data) {
        $scope.imovel = data;
      });
  };
})();
