angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'index',
    'Leaderboard',
    'Leaderboard.Player',
    'Champions',
    'Game'
]);

angular.module('app').config(configuration);

function configuration($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('index', {
            url: '/index',
            templateUrl: '/assets/js/modules/home/home.view.html'
        })

        .state('leaderboard', {
            url: '/:game',
            controller: 'LeaderboardCtrl',
            controllerAs: 'leaderboardCtrlVm',
            templateUrl: '/assets/js/modules/leaderboard/leaderboard.view.html'
        })

        .state('leaderboard.player', {
            url: '/player/:player',
            controller: 'PlayerCtrl',
            controllerAs: 'playerCtrlVm',
            templateUrl: '/assets/js/modules/player/player.view.html'
        })

        .state('champions', {
            url: '/champions/:game',
            controller: 'ChampionsCtrl',
            controllerAs: 'championsCtrlVm',
            templateUrl: '/assets/js/modules/champions/champions.view.html'
        });

    $urlRouterProvider.otherwise('/index');
    //$locationProvider.html5Mode(true).hashPrefix('!'); // todo: rewrite server side too...
}
