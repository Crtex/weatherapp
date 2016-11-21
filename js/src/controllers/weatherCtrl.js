app.controller('weatherCtrl', ['$scope', 'CityData',  function ($scope, CityData) {
  $scope.cityData = new CityData.createNew();
}]);