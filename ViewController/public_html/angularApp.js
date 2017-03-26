(function() {
    'use strict';
 
    angular.module('app.directives', []);
 
    angular.module('app.directives').directive('adf', function() {
        return {
            restrict: 'EAC',
            replace: false,
            transclude: true,
            scope: {
                exPanel: '='
            },
            templateUrl: 'panel.html',
            link: function($scope, element, attrs) {
 
            }
        };
    });
 
    angular.module('ExampleApp', ['app.directives']);
 
    $(document).ready(function() {
        angular.bootstrap(document, ['ExampleApp']);
    });
 
})();