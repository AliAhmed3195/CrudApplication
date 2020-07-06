(function () {
    'use strict';
    angular
        .module('customer')
        .config(routeConfig);
    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
        // first create a state that your menu will point to .
        $stateProvider
            .state('triangular.customer-list', {
                url: '/customer/list/',
                templateUrl: 'app/modules/customer/listing/customer-listing.tmpl.html',
                controller: 'CustomerController',
                controllerAs: 'vm',
           
             
            })
       
        // next add the menu item that points to the above state.
        triMenuProvider.addMenu({
            name: 'Customers',
            icon: 'zmdi zmdi-accounts',
            priority: 2.0,
            state: 'triangular.customer-list',
            type: 'link'
            // permission: 'customer-listing',

        });
    }
})();
