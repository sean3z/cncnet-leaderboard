angular.module('Account').controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['API'];
function AccountCtrl(API) {
    var vm = this;

    vm.isLoggedIn = false;
    vm.login = login;

    function login() {
        var _success = function(data) {
            vm.nicks = data;
            vm.isLoggedIn = true;
        };

        var _error = function(data) {
            alert('Incorrect Username/Password');
        };

        API.auth(vm.username, vm.password).then(_success, _error);
    }
}
