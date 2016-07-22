(function () {
  'use strict';

  angular.module('elianeimoveis').directive('menuNav', menuNav);

  menuNav.$inject = ['$location'];

  function menuNav($location) {
    return {
      link: function (scope, elem, attrs) {
        scope.paginaAtual = function (pag) {
          var path = $location.url()
          if (path == '/' && pag == 'Home') {
            return 'atual';
          }
          if (path.slice(2) == pag.slice(1)) {
            return 'atual';
          }else {
            return '';
          }
        }
      },
      templateUrl: 'app/view/menuNav.html'
    };
  };
})();
