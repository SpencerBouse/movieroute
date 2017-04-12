(function() {
    'use strict';

    angular
        .module('routing')
        .controller('mainController', function(API) {
        	const vm = this;
          vm.data= API.getData();
        });

})();
