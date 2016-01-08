angular.module('Account').controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['API'];
function AccountCtrl(API) {
    var vm = this;

    vm.isLoggedIn = false;
    vm.login = login;

    vm.nicks = {
        ra: ['sean'],
        ts: ['tahj']
    };

    function login(player, username, password) {
        console.log('vm', vm);
        API.auth(player, username, password).then(function(data) {
            alert('logged in');
        });
    }
}
