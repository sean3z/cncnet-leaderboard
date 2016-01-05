'use strict';

//LadderSvc service used to communicate Ladder REST endpoints
angular.module('Leaderboard').factory('LadderSvc', LadderSvc);

LadderSvc.$inject =['$http', '$q'];
function LadderSvc($http, $q) {
    var factory = this;

    factory.getTop50 = getTop50;
    
    return factory;

    //////

    function getTop50(game) {
        var deferred = $q.defer(),
            url = "http://api.cncnet.org/ladder";

        $http.jsonp(url + '/' + game + '?callback=JSON_CALLBACK')
            .success(function (data) {
                return deferred.resolve(data);
            })
            .error(function (data) {
                deferred.reject(status);
            });

        return deferred.promise;
    }
}