angular.module('app')
  .controller('LabController', [
    function() {
      var vm = this;
      vm.show = show;
      
      vm.person = {
        name: 'Samuel Clemens',
        penName: 'Mark Twain'
      };
   
      function show(){
        return  alert(JSON.stringify(vm.person));
      }
     
    }
  ]);