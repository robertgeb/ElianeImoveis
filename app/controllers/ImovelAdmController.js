(function () {
  'use strict';

  angular.module('elianeimoveisadm').controller('ImovelController', ImovelController);

  ImovelController.$inject = ['$scope', '$http', 'GithubFactory'];

  function ImovelController($scope, $http, GithubFactory) {

    $scope.output = {
      show: false
    };

    $scope.imagesFiles = ['assets/images/insert-photo.svg'];


    $scope.imovel = {
      id: Date.now(),
      caracteristicas: [],
      images: []
    };

    $scope.caracteristicasExtras = [];

    $scope.addCaractExtra = function (nomeCaract) {
      var contem = $scope.caracteristicasExtras.indexOf(nomeCaract);
      if (contem === -1) {
        $scope.caracteristicasExtras.push(nomeCaract);
      }
      else {
        $scope.caracteristicasExtras.splice(contem);
      }
      $scope.caractAux = '';
    };

    $scope.addCaract = function (nomeCaract) {
      var contem = $scope.imovel.caracteristicas.indexOf(nomeCaract);
      if (contem === -1) {
        $scope.imovel.caracteristicas.push(nomeCaract);
      }
      else {
        $scope.imovel.caracteristicas.splice(contem);
      }
    };

    $scope.showForm = function () {
      if (!validarForm()) {
        return false;
      }

      var senha = prompt('Digite a senha para continuar:');
      if (!senha) {
        return false;
      }

      GithubFactory.createImovelData($scope.imovel, 'teste4/'+$scope.imovel.id+'.json', senha)
        .then(function (data) {
          console.log('foi');
          console.log(data);
          outputMessage(data);
          createImages();
        }, function (data) {
          console.log('fail');
          console.log(data);
          outputMessage(data);
        });

      function createImages() {
        for (var i = 0; i < $scope.imovel.images.length; i++) {
          let path = 'teste4/' + $scope.imovel.images[i] + '.jpg';
          let file = $scope.imagesFiles[i];
          GithubFactory.insertImage(file.split(/base64,/)[1], path, senha)
            .then(function (data) {
              console.log('Success');
              console.log(data);
              outputMessage(data);
            }, function (data) {
              console.log('Fail');
              console.log(data);
              outputMessage(data);
            });
        }
      }

    }

    function outputMessage(msg) {
      $scope.output.message = msg;
      $scope.output.show = true;
    }

    $scope.enviar = function () {
      var files = document.getElementById('fileinput').files;
      var file = files[0];

      if (files && file) {
        var reader = new FileReader();

        reader.onload = function(readerEvt) {
          var binaryString = readerEvt.target.result;
          GithubFactory.setFile(btoa(binaryString));
          GithubFactory.connect();
        };
        reader.readAsBinaryString(file);
      }else {
        alert('Selecione o arquivo.');
      }
    }

    function validarForm() {
      if ($scope.imovel.images.length < 1) {
        alert('Nenhuma imagem foi adicionada ainda.');
        return false;
      }

      return true;
    }

  };

})();
