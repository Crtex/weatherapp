app.factory('CityData', function($http, $q) {

    var CityModel = function(data) {
        this.cityName = '';
        this.data = {};
        this.setData(data);
    };

    CityModel.prototype.isEmpty = function() {
        return Object.keys(this.data).length === 0 && this.data.constructor === Object
    };

    CityModel.prototype.setData = function(data) {
        angular.extend(this, data);
    };

    CityModel.prototype.hasErrors = function() {
        if (this.data.hasOwnProperty('error')) {
            return true;
        }
        return false;
    }

    CityModel.prototype.getError = function() {
        if (this.hasErrors()) {
            return this.data.error[0].msg;
        }
        else {
            return false;
        }
    }

    CityModel.prototype.getLocation = function() {
        if (!this.isEmpty() && !this.hasErrors())
            return this.data.request[0].query;
        else {
            return false;
        }
    }

    CityModel.prototype.getTemperature = function() {
        if (!this.isEmpty() && !this.hasErrors())
            return this.data.current_condition[0].temp_C;
        else {
            return '?';
        }
    }

    CityModel.prototype.getDescription = function() {
        if (!this.isEmpty() && !this.hasErrors())
            return this.data.current_condition[0].weatherDesc[0].value;
        else {
            return '?';
        }
    }

    CityModel.prototype.setError = function(error) {
        var errorArray = [];
        errorArray.push(error);
        this.data = {
            error: errorArray
        }
    }

    var CityData = {
        createNew: function() {
            return new CityModel({})
        }
    }

    return CityData;

})