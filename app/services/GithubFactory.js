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

    function updateImoveisData(imovelData, id, senha) {
      return $http({
        method: 'GET',
        url: 'https://api.github.com/repos/robertgeb/ElianeImoveis/contents/app/data/imoveis.json',
        headers: {
          Authorization: 'basic '+btoa('robertgeb:'+senha)
        }
      }).then(function (data) {
        var sha = data.data.sha;
        var imoveis = JSON.parse(atob(data.data.content));
        imoveis.push(imovelData);
        return $http({
          method: 'PUT',
          url: 'https://api.github.com/repos/robertgeb/ElianeImoveis/contents/app/data/imoveis.json',
          headers: {
            Authorization: 'basic '+btoa('robertgeb:'+senha)
          },
          data: {
            message: 'Imovel data '+id,
            committer: {
              name: 'Robert Gebhardt',
              email: 'robert.gol.jr@gmail.com'
            },
            content: btoa(JSON.stringify(imoveis)),
            sha: sha,
            branch: 'dev'
          }
        });
      });
    }

    return {
      insertImage: insertImage,
      updateImoveisData: updateImoveisData
    }
  }

})();
