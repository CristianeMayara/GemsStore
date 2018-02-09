(function() {
  var app = angular.module("store");

  app.directive("productDescription", function() {
    return {
      restrict: "EA",
      templateUrl: "./view/product-description.html"
    };
  });
})();
