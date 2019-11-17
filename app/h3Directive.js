angular.module('app').directive('h3Directive', function() {

  return {
    restrict: 'E',
    scope: {
      title: '@'
    },
    template: '<h3>{{title}}</h3>',
  };

});