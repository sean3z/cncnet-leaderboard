angular.module('Account').controller('AccountCtrl', AccountCtrl);

AccountCtrl.$inject = ['API'];
function AccountCtrl(API) {
    var vm = this;

    vm.name = 'test';
}
