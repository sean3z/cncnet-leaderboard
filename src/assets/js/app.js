angular.module('app', [
    'ui.router',
    'ui.bootstrap',
    'index',
    'Account',
    'Leaderboard',
    'Leaderboard.Player',
    'Champions',
    'Game',
    'API'
]);

angular.module('app').config(configuration);

function configuration($stateProvider, $urlRouterProvider, $locationProvider) {
    $stateProvider
        .state('index', {
            url: '/',
            controller: 'HomeCtrl',
            controllerAs: 'homeCtrlVm',
            templateUrl: '/assets/js/modules/home/home.view.html'
        })

        .state('account', {
            url: '/account',
            controller: 'AccountCtrl',
            controllerAs: 'accountCtrlVm',
            templateUrl: '/assets/js/modules/account/account.view.html'
        })

        .state('champions', {
            url: '/champions/:game',
            controller: 'ChampionsCtrl',
            controllerAs: 'championsCtrlVm',
            templateUrl: '/assets/js/modules/champions/champions.view.html'
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
        });

    $urlRouterProvider.otherwise('/');
    //$locationProvider.html5Mode(true).hashPrefix('!'); // todo: rewrite server side too...
}
