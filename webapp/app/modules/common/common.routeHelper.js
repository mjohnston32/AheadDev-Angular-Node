angular.module('commonModule')
    .service('routeHelper', routeHelper);

function routeHelper($state) {
    var service = this;
    service.navigateTo = navigateTo;

    function navigateTo(route) {
        $state.transitionTo(route);
    }
}