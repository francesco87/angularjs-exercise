'use strict';

var getDatas = angular.module('getDatas', []);

getDatas.factory('getDatas', ['$http', function($http) {
  var myService = {
    async: function() {
      var promise = $http.get('/resource/resource.json').then(function (response) {
        return response.data;
      });
      return promise;
    }
  };
  return myService;
}]);
