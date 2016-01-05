'use strict';

//LadderSvc service used to communicate Ladder REST endpoints
angular.module('Leaderboard.Player').factory('PlayerSvc', PlayerSvc);

PlayerSvc.$inject = ['$http', '$q'];
function PlayerSvc($http, $q) {
    return {
        getPlayer: function (game, player) {
            var deferred = $q.defer(),
                url = "http://api.cncnet.org/ladder";

            $http.jsonp(url + '/' + game + '/player/' + player + '?callback=JSON_CALLBACK')
                .success(function (data) {
                    return deferred.resolve(data);
                })
                .error(function (data) {
                    deferred.reject(status);
                });
                
            return deferred.promise;
        }
    }
};