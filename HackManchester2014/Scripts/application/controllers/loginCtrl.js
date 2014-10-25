'use Strict';

hackMancApp.controller('loginCtrl', [
    '$scope', 'loginSvc', function ($scope, loginSvc) {
        $scope.login = function () {
            console.log($scope.user);
            //loginSvc.get($scope.user);
        };
    }
]);