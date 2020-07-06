(function () {
    'use strict';
    angular
        .module('customer')
        .controller('CustomerDialogController', CustomerDialogController)

    function CustomerDialogController($scope, CustomerModel, $mdDialog, $http, Clique, $rootScope, $state) {
        var vm = this;

        $scope.hideDialogActions = false;
        $scope.customer = {};
    

       $scope.addCustomer = function() {
        debugger;
        console.log("ali");
        $rootScope.CustomerData.push({
            username:  $rootScope.CustomerData.username,
            Contactnumber: $rootScope.CustomerData.Contactnumber
        });
    
    };


        $scope.cancel = function () {
            $mdDialog.cancel();
        };

    
    }

})();
