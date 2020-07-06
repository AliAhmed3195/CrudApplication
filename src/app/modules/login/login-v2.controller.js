(function () {
  'use strict';

  angular
    .module('login')
    .controller('LoginV2Controller', LoginV2Controller);

  /** @ngInject */
  function LoginV2Controller(api, $scope, Clique, $location, $rootScope, $cookieStore, $http, $window, $timeout) {
    // Data
    $scope.showProgress = false;
    var vm = this;
    $Scope.Customerlogin = [{  username: "AliAhmed", Password: "12345"}];
    if ($scope.randomNumber == 0) {
      $scope.testDrive = true;
    }
    // Methods
    $scope.redirecttocustomerapp = function (value,value1) {
      if(  value == $scope.Customerlogin.username &&  value1 ==$scope.Customerlogin.Password ) {
        debugger;
        var windowlocation = $window.location;    
    console.log("windowlocation",windowlocation.origin);
    var abcd = windowlocation.origin+"/customer/list/"; 
   console.log("url", abcd);
    // $state.go(abcd);
    $window.location.href = abcd;
      }
      else {
        
      
      }
    };
  }
})();
