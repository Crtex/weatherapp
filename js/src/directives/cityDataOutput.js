app.directive('cityDataOutput', function() {
    return {
        restrict: 'E',
        scope: {
            cityData: '=cityData'
        },
        templateUrl: 'views/directives/city-data-output.html',
        link: function(scope) {
        }
    };
})