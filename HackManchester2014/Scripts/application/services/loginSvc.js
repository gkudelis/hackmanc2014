'use Strict';

hackMancApp.service('loginSvc', [
    '$resource', 'apiUrls', function($resource, apiUrls) {
        console.info('login urls');
        console.log(apiUrls);
    }
]);