'use strict';

// Ladder controller
angular.module('Leaderboard').controller('LeaderboardCtrl', LeaderboardCtrl);

LeaderboardCtrl.$inject = ['$stateParams', 'API', 'PlayerSearch', 'GameSvc'];
function LeaderboardCtrl($stateParams, API, PlayerSearch, GameSvc) {
    var vm = this;
    vm.abbr = $stateParams.game;

    API.getTop50(vm.abbr).then(function(response) {
        vm.players = response;
    });

    // Search by player name
    vm.searchByPlayer = function(){
        if(vm.abbr){
            PlayerSearch.byPlayer(vm.abbr, vm.search.name).then(function (response) {
                vm.searchResults = response;
            });
        }
    };

    var game = GameSvc.parse(vm.abbr);
    vm.abbr = game.abbr;
    vm.game = game.title;
}
