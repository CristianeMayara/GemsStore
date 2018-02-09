(function() {
  var app = angular.module("store");

  app.directive("productTitle", function() {
    return {
      restrict: "EA",
      templateUrl: "./view/product-title.html"
    };
  });
})();
