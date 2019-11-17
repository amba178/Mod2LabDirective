angular.module('app').directive('sampleDirective', [sampleDirective]);



function sampleDirective(){
  return {
    template: '<div> <h4> Template for directive {{directive}}</h4></div>'
    
  }

}