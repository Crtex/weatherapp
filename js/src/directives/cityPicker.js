app.directive('cityPicker', ['weatherService', function (weatherService) {
  return {
    restrict: 'E',
    scope: {
      cityData: '=cityData'
    },
    templateUrl: 'views/directives/city-picker.html',
    link: function (scope) {
      scope.fetching = false;
      scope.fetchWeather = function () {
        scope.fetching = true;
        weatherService.getWeatherByCity(scope.cityData.cityName).then(
          function (data) {
            scope.fetching = false;
            scope.cityData.setData(data);
          },
          function (error) {
            scope.fetching = false;
            scope.cityData.setError('Cannot connect to weather API');
          }
        )
      }
    }
  };
}])