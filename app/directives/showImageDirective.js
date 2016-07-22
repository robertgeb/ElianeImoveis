(function () {
  'use strict';

  angular.module('elianeimoveis').directive('showImage', showImage);

  function showImage() {
    return {
      restrict: 'E',
      scope: {
        imglink: '@link'
      },
      link: function (scope, elem, attrs) {
        elem.on('click', function () {
          elem.remove();
        })
      },
      templateUrl: 'app/view/zoomImagem.html'
    };
  };
})();
