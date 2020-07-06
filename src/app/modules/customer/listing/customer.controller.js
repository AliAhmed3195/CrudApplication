(function () {
    'use strict';
    angular
        .module('customer')
        .controller('CustomerController', Controller);

    /* @ngInject */
    function Controller($rootScope,  $scope, $timeout, $mdDialog, CustomerModel, Clique, $mdSidenav, $log, $state, clipboard, PermissionStore) {
// debugger;
        var vm = this;
        vm.CustomerData = [];
        vm.isInvoiceLoaded = true;
        $scope.selected = [];
        vm.selected = [];

        vm.columns = {
            DisplayName: 'Name',
            Contactnumber: 'Contactnumber',
            EditProfile: 'Action',
            DeleteProfile : 'Delete'
        };
        vm.filter = {
            options: {
                debounce: 500
            }
        };

        vm.openSidebar = openSidebar;
        vm.openCustomerDetail = openCustomerDetail;
        vm.createCustomer = createCustomer;
        vm.query = {
            
            limit: 10,
            page: 1,
            order: 'DisplayName'
        };
        vm.pageQuery = {
            limit: 10,
            page: 1
        }

        /*Customer*/
        $rootScope.CustomerData = [{  username: "Ali", Contactnumber: "+923343071241"}];

        vm.isInvoiceLoaded = false;

        function openSidebar(navID) {

            $mdSidenav(navID)
                .toggle()
                .then(function () {
                    $log.debug("toggle " + navID + " is done");
                });
        }

        function createCustomer() {
            $mdDialog.show({
                    scope: $scope,
                    preserveScope: true,
                    locals: {
                    },
                    controller: 'CustomerDialogController',
                    templateUrl: 'app/modules/customer/createnew/customer.addnew.html',
                    parent: angular.element(document.body),
                    targetEvent: null,
                    clickOutsideToClose: true,
                    fullscreen: true,
                    // openFrom:{'#left'}
                    openFrom: {
                        right: 0
                    }
                   
                }
             
            )
        }

        $scope.cancel = function () {
            $mdDialog.cancel();
        };

        function openCustomerDetail(customer, $index) {
            debugger;
            $scope.arraypos = $index;
            $rootScope.CustomerData.username = customer.username;
            $rootScope.CustomerData.Contactnumber = customer.Contactnumber;
            console.log("the custoemr is", customer );
          //  debugger;
            $mdDialog.show({
                
                scope: $scope,
                preserveScope: true,
                
                parent: angular.element(document.body),
                templateUrl: 'app/modules/customer/createnew/customer.editnew.html',
                clickOutsideToClose: true,
                fullscreen: true,
                locals: {
                    data: customer
                }
            });
        }
        $scope.updateCustomer = function() {
 
          $rootScope.CustomerData[$scope.arraypos].username = $rootScope.CustomerData.username;
          $rootScope.CustomerData[$scope.arraypos].Contactnumber = $rootScope.CustomerData.Contactnumber;
                
                };
                vm.DeleteCustomer = function( $index) {
 debugger;
                      $rootScope.CustomerData.splice($index,1);  

                          };
               
        $scope.refreshInvoiceGrid = function () {
            $state.reload();
        }
    
    }
})();
