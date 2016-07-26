(function () {
  angular.module('elianeimoveisadm').directive('inputImage', inputImageDirective);

  function inputImageDirective() {
    return{
      restrict: 'E',
      scope: false,
      link: function (scope, elem, attrs) {

        elem.on('click', function (evt) {
          var inputElement = angular.element(document.querySelector( '#fileinput'+scope.$index ));
          inputElement.one('change', function (evt) {
            var files = evt.target.files;
            if (files && files[0]) {
              var reader = new FileReader();
              reader.onload = function (e) {
                var file = e.target.result;
                // If the image has not been inserted
                if (scope.imagesFiles.indexOf(file) === -1) {
                  if (scope.$last) {  // If the element clicked is the last
                    scope.imovel.images.unshift('imagem'+(scope.imovel.images.length+1));
                    scope.imagesFiles.unshift(file);
                  }else {
                    scope.imagesFiles[scope.$index] = file;
                  }
                  scope.$apply();
                }
        		  };
        		  reader.readAsDataURL(files[0]);
            }else {
              alert('Falha ao carregar arquivo');
            }
          });
          inputElement[0].click();
        });
      },
      templateUrl: 'app/view/inputImage.html'
    }
  }
})();
