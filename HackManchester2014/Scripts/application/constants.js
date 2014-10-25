'use Strict';

hackMancApp.constant('apiUrls', (function () {
    var baseUrl = 'https://glacial-reef-2223.herokuapp.com/';

    return {
        baseUrl: baseUrl,
        login: baseUrl + 'login',
        register: baseUrl + 'users/register',
    };
})());