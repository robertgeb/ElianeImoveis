(function () {
  'use strict';

  angular.module('elianeimoveis').controller('ContatoController', ContatoController);

  ContatoController.$inject = ['$scope'];

  function ContatoController($scope) {
    var latlng = {lat: -22.969454, lng: -43.695457};
    var mapDiv = document.getElementById('map');
    var map = new google.maps.Map(mapDiv, {
      center: latlng,
      zoom: 15
    });
    var marker = new google.maps.Marker({
      position: latlng,
      map: map,
      title: 'Eliane Imóveis'
    });

  };
})();
