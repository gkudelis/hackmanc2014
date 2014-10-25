'use Strict';

hackMancApp.controller('registerCtrl', [
    '$scope', '$location', 'registerSvc', function ($scope, $location, registerSvc) {
        $scope.registered = false;

        $scope.register = function () {
            var createPromise = registerSvc.create($scope.user).$promise;

            createPromise.then(function (data) {
                $scope.registered = true;

                $location.path('/login');
            });
        };
    }
]);