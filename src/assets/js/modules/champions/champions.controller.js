'use strict';

// Champions controller
angular.module('Champions').controller('ChampionsCtrl', ChampionsCtrl);

ChampionsCtrl.$inject = ['$stateParams', 'GameSvc', 'API'];
function ChampionsCtrl($stateParams, GameSvc, API) {
    var vm = this;
    vm.abbr = $stateParams.game;

    var game = GameSvc.parse(vm.abbr);
    vm.abbr = game.abbr;
    vm.game = game.title;

    API.getHoF().then(function(data) {
        vm.champions = data;
    });
}

