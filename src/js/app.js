/*app.js*/

(function(){
	var app = angular.module('petStore', ['store-directives']);

	app.controller('StoreController', ['$http', function($http){
		var ctx = this;
		ctx.products = {};

		$http.get('../json/store-pets.json').then(function(result){
			ctx.products = result.data;
		});
	}]);	

	
	app.controller('ReviewController', function(){
	    this.review={};
	    this.addReview = function(product){
	    	this.review.createdOn = Date.now();
	      	product.reviews.push(this.review);
	     	this.review = {};
	    };
  	});
  	
})();


