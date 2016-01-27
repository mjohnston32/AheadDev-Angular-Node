(function() {
    'use strict';

    angular
    	.module("viewNotesModule")
	    .controller("viewNotesController", controller);

	    function controller($http) {
	    	var vm = this;

	    	$http.get('/api/notes')
	    	.success(function(response) {
            	vm.notes = response;
        	});
	    }
}());