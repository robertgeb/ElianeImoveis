(function () {
  'use strict';

  angular.module('elianeimoveis').directive('menuNav', menuNav);

  function menuNav() {
    return {
      link: function (scope, elem, attrs) {
        
      },
      templateUrl: 'app/view/menuNav.html'
    };
  };
})();
