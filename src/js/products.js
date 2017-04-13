(function(){
	var app = angular.module('store-directives', []);

	app.directive("productTabs", function(){
	    return {
	      	restrict: 'E',
	      	templateUrl:'product-tabs.html',
	      	controller: function(){
	      		this.tab = 1;
				this.setTab = function(selectedTab){
					this.tab = selectedTab || 0;
				};
				this.isTabSelected = function(selectedTab){
					return this.tab === selectedTab;
				};
	      	},
	      	controllerAs: 'tab'     
	    };

	});

	app.directive("productGallery", function(){
	    return {
	      	restrict: 'E',
	      	templateUrl:'product-gallery.html',
	      	controller: function(){
	      		this.current = 0;
	    		this.setCurrent = function(newGallery){
	      			this.current = newGallery || 0;
	   			};
	      	},
	      	controllerAs: 'gallery'     
	    };

	});

	app.directive("productDetail", function(){
	    return {
	      	restrict: 'E',
	      	templateUrl:'product-detail.html'      
	    };
	});

	app.directive("productReviews", function() {
	    return {
	      	restrict: 'A',
	      	templateUrl: "product-reviews.html"
	    };
	 });

})();