'use strict';

// Ladder.Player controller
angular.module('Leaderboard.Player').controller('PlayerCtrl', PlayerCtrl);

PlayerCtrl.$inject = ['$state', '$stateParams', 'API'];
function PlayerCtrl($state, $stateParams, API) {
  var vm = this;

  vm.abbr = $stateParams.game;
  vm.player = $stateParams.player;

  API.getPlayer(vm.abbr, vm.player).then(function (response) {
     vm.details = response;
  });

}