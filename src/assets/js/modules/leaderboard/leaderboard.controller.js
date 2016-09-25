'use strict';

// Ladder controller
angular.module('Leaderboard').controller('LeaderboardCtrl', LeaderboardCtrl);

LeaderboardCtrl.$inject = ['$stateParams', 'API', 'GameSvc'];
function LeaderboardCtrl($stateParams, API, GameSvc) {
    var vm = this;
    vm.abbr = $stateParams.game;

    vm.model = {
        search: ''
    };

    API.getTop50(vm.abbr).then(function(response) {
        vm.players = response;
    });

    vm.searchByPlayer = function () {
        if (vm.abbr != null) {
            API.search(vm.abbr, vm.model.search).then(function (response) {
                vm.searchResults = response;
            });
        }
    };

    var game = GameSvc.parse(vm.abbr);
    vm.abbr = game.abbr;
    vm.game = game.title;
}
