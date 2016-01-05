angular.module('API').factory('API', APISvc);

APISvc.$inject =['$http', '$q'];
function APISvc($http, $q) {
    var factory = this;
    factory.url = 'http://api.cncnet.org/ladder';

    factory.getTop50 = getTop50;
    factory.getPlayer = getPlayer;
    factory.getHoF = getHoF;
    
    return factory;

    //////

    function getTop50(game) {
        return request(game);
    }

    function getPlayer(game, player) {
        return request(game + '/player/' + player);
    }

    function getHoF() {
        return request('hof');
    }

    function request(url) {
        var deferred = $q.defer();

        $http.jsonp(factory.url + '/' + url + '?callback=JSON_CALLBACK')
            .success(function (data) {
                return deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(status);
            });
            
        return deferred.promise;
    }
}