(function () {
  'use strict';

  angular.module('elianeimoveis').service( 'Imoveis', ['$http', Imoveis]);

  function Imoveis($http) {
    var imoveis = [];
    var getImoveisPromise = $http.get('app/data/imoveis.json');
    getImoveisPromise.then(function(data) {
      imoveis = data.data;
    });
    this.getImoveis = function(){
      return getImoveisPromise;
    };
    this.getImovelById = function (id) {
      return getImoveisPromise.then(function (data) {
        var auxImovel = {};
        data.data.forEach(function (elem, index, array) {
          if (id == elem.id) {
            auxImovel = elem;
          }
        });
        return auxImovel;
      });
    }
  }
})();
