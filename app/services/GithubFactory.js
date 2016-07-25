(function () {

  angular.module('elianeimoveisadm').factory('GithubFactory', GithubFactory);

  GithubFactory.$inject = ['$http'];

  function GithubFactory($http) {

    function insertImage(file, path, senha) {
      return $http({
        method: 'PUT',
        url: 'https://api.github.com/repos/robertgeb/ElianeImoveis/contents/app/data/'+path,
        headers: {
          Authorization: 'basic '+btoa('robertgeb:'+senha)
        },
        data: {
          message: 'Image to'+path,
          committer: {
            name: 'Robert Gebhardt',
            email: 'robert.gol.jr@gmail.com'
          },
          content: file,
          branch: 'dev'
        }
      });
    }

    function createImovelData(data, path, senha) {
      return $http({
        method: 'PUT',
        url: 'https://api.github.com/repos/robertgeb/ElianeImoveis/contents/app/data/'+path,
        headers: {
          Authorization: 'basic '+btoa('robertgeb:'+senha)
        },
        data: {
          message: 'Imovel data file '+path,
          committer: {
            name: 'Robert Gebhardt',
            email: 'robert.gol.jr@gmail.com'
          },
          content: btoa(JSON.stringify(data)),
          branch: 'dev'
        }
      });
    }

    return {
      insertImage: insertImage,
      createImovelData: createImovelData
    }
  }

})();
