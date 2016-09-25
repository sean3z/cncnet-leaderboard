'use strict';

// Ladder.Player controller
angular.module('Leaderboard.Player').controller('PlayerCtrl', PlayerCtrl);

PlayerCtrl.$inject = ['$state', '$stateParams', 'API'];
function PlayerCtrl($state, $stateParams, API) {
    var vm = this;

    vm.ranks = [
        { position: 1, cup: "gold", title: "General" },
        { position: 2, cup: "silver", title: "Lieutenant General" },
        { position: 3, cup: "bronze", title: "Major General" },
        { position: 4, cup: null, title: "Brigadier" },
        { position: 5, cup: null, title: "Colonel" },
        { position: 6, cup: null, title: "Lieutenant Colonel" },
        { position: 7, cup: null, title: "Major" },
        { position: 8, cup: null, title: "Captain" },
        { position: 9, cup: null, title: "Lieutenant" },
        { position: 10, cup: null, title: "Second Lieutenant" }
    ];

    // TODO have type interface?
    vm.modes = [
       { type: "TODO - API"}, // 0 does not exist, so should be blank
       { type: "Battle" },
       { type: "Free for All"},
       { type: "Cooperative"},
       { type: "Unholy Alliance"},
       { type: "Megawealth"},
       { type: "Duel"},
       { type: "MeatGrind"},
       { type: "NavalWar"},
       { type: "Team Alliance"},
    ];

    vm.abbr = $stateParams.game;
    vm.player = $stateParams.player;

    vm.rankNames = function () {
        for (var i = 0; i < vm.ranks.length; i++) {
            var rank = vm.ranks[i];
            if (vm.details.rank == rank.position) return rank;
            if (vm.details.rank >= vm.ranks.length) return {
                position: vm.details.rank, cup: null, title: "Officer Cadet"
            }
        }
    };

    API.getPlayer(vm.abbr, vm.player).then(function (response) {
        vm.details = response;
        vm.rankTitle = vm.rankNames();
        vm.clan = response.clan;
    });
}