'use Strict';

hackMancApp.service('registerSvc', [
    '$resource', 'apiUrls', function($resource, apiUrls) {
        return {
            create: function(params) {
                return $resource(apiUrls.register).save(params);
            }
        };
    }
]);