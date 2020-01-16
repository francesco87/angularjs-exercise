'use strict';

var mainControllers = angular.module('mainControllers', ['getDatas', 'chart.js']);

mainControllers.controller('mainCtrl', ['$rootScope', '$scope', 'getDatas', function ($rootScope, $scope, getDatas) {

  // INITIALIZE FUNCTION
  // -------------------
  $scope.init = function() {
    getDatas.async().then(function(res) {
      $scope.datas = res;
    });
  };

  $scope.showDetails = function(event) {
    if($(event.currentTarget).height() <= 46) {
      $('.container ul li').animate({height: '25px'});
      $(event.currentTarget).animate({height: '250px'});
    }
  };

  $scope.showModal = function(dataType, data) {
    $scope.dataType = dataType;
    $scope.data = data;
    if(dataType === 'unit test') {
      if(data.status !== 'pending') {
        $scope.labelsChart = ['Passed', 'Declined'];
        $scope.dataChart = [data.passed, data.declined];
      } else {
        $scope.labelsChart = ['Pending', 'Declined'];
        $scope.dataChart = [100];
      }

    } else if(dataType === 'functional test') {
      if(data.status !== 'pending') {
        $scope.labelsChart = ['Passed', 'Declined'];
        $scope.dataChart = [data.passed, data.declined];
      } else {
        $scope.labelsChart = ['Pending', 'Declined'];
        $scope.dataChart = [100];
      }

    } else if(dataType === 'metrics') {
      if(data.status !== 'pending') {
        $scope.labelsChart = ['Test', 'Maintanaibility', 'Security', 'Workmanship'];
        $scope.dataChart = [data.test.value, data.maintainability.value, data.security.value, data.workmanship.value];
      } else {
        $scope.labelsChart = ['Pending', 'Declined'];
        $scope.dataChart = [100];
      }
    }

    $('.modal-bg').show();
    $('.modal-box').animate({'top': '80px'}, 1000);
  };

  $scope.hideModal = function() {
    $('.modal-box').animate({'top': '-500px'}, 1000,
      function() {
        $('.modal-bg').hide();
        $scope.dataType = undefined;
        $scope.data = undefined;
      });
  };

}]);
