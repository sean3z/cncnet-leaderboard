'use strict';

// Ladder.Player controller
angular.module('Leaderboard.Player').controller('PlayerCtrl', PlayerCtrl);

PlayerCtrl.$inject = ['$state', '$stateParams', 'PlayerSvc'];
function PlayerCtrl($state, $stateParams, PlayerSvc) {
  var vm = this;

  vm.abbr = $stateParams.game;
  vm.player = $stateParams.player;

  PlayerSvc.getPlayer(vm.abbr, vm.player).then(function (response) {
     vm.details = response;
  });

}