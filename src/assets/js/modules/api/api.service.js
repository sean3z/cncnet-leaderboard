angular.module('API').factory('API', APISvc);

APISvc.$inject =['$http', '$q'];
function APISvc($http, $q) {
    var factory = this;
    factory.url = 'http://api.cncnet.org';

    factory.getTop50 = getTop50;
    factory.getPlayer = getPlayer;
    factory.getHoF = getHoF;
    factory.auth = auth;

    return factory;

    //////////

    function getTop50(game) {
        return request('/ladder/' + game);
    }

    function getPlayer(game, player) {
        return request('/ladder/' + game + '/player/' + player);
    }

    function getHoF() {
        return request('/ladder/hof');
    }

    function auth(player, username, password) {
        var deferred = $q.defer();
        deferred.resolve(true);
        return deferred.promise;
    }

    function request(url) {
        var deferred = $q.defer();

        $http.jsonp(factory.url + '/' + url + '?callback=JSON_CALLBACK')
            .success(function (data) {
                return deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(data);
            });

        return deferred.promise;
    }
}
