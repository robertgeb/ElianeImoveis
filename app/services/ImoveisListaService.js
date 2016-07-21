(function () {
  'use strict';

  angular.module('elianeimoveis').service( 'Imoveis', [ '$rootScope' , '$http', '$q', Imoveis]);

  function Imoveis($rootScope, $http, $q) {
    var deferred = $q.defer();
    $http.get('app/data/imoveis.json').then(function(data) {
        deferred.resolve(data);
    });
    this.getImoveis = function(){
        return deferred.promise;
    };
  }
})();
