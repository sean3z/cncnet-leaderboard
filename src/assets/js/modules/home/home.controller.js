'use strict';

// Ladder controller
angular.module('index').controller('HomeCtrl', HomeCtrl);

HomeCtrl.$inject = ['API'];
function HomeCtrl(API) {
    var vm = this;

    // Its a little hacky, but will do for now
    var games = ['ts', 'fs', 'ra', 'am', 'yr'];

    vm.top5 = {
        ts: '',
        fs: '',
        ra: '',
        am: '',
        yr: ''
    };

    games.forEach(function (key) {
        API.getTop50(key).then(function (response) {
            vm.top5[key] = response;
        });
    });
}
