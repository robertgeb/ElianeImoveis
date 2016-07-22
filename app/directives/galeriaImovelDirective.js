(function () {
  'use strict';

  angular.module('elianeimoveis').directive('galeriaImovel', galeriaImovel);

  galeriaImovel.$inject = ['$compile'];

  function galeriaImovel($compile) {
    return {
      link: function (scope, elem, attrs) {
        var indicesGaleria = [0,1,2,3];
        scope.avancarGaleria = function () {
          if (indicesGaleria[3] === scope.imovel.images.length - 1) {
            return;
          }
          for (var i = 0; i < indicesGaleria.length; i++) {
            indicesGaleria[i]++;
          }
        };
        scope.retrocederGaleria = function () {
          if (indicesGaleria[0] == 0) {
            return;
          }
          for (var i = 0; i < indicesGaleria.length; i++) {
            indicesGaleria[i]--;
          }
        };
        scope.filtroGaleria = function (foto, index, listaFotos) {
          return (indicesGaleria.indexOf(index) >= 0)?true:false;
        };

        scope.legenda = function (ft) {
          return ft.charAt(0).toUpperCase() + ft.replace(/[0-9]/g, '').slice(1);
        };

        scope.showImage = function (ft) {
          var link = 'app/data/'+((scope.imovel.id < 10)? '0' + scope.imovel.id: scope.imovel.id)+'/'+ft+'.jpg';
          var el = $compile( '<show-image link="'+link+'"></show-image>' )( scope );
          elem.append(el);
        };

      },
      templateUrl: 'app/view/galeriaImovel.html'
    };
  };
})();
