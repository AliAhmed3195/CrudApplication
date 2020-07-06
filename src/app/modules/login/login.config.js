(function () {
    'use strict';
    angular
        .module('login')
        .config(routeConfig);
    /* @ngInject */
    function routeConfig($stateProvider, triMenuProvider) {
        // first create a state that your menu will point to .
        $stateProvider
            .state('triangular.login', {
                url: '/login/',
                templateUrl: 'app/modules/login/login-v2.html',
                controller: 'LoginV2Controller',
                controllerAs: 'vm',
           
             
            })

    }
})();
