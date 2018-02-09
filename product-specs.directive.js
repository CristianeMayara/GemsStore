(function() {
  var app = angular.module("store");

  app.directive("productSpecs", function() {
    return {
      restrict: "EA",
      templateUrl: "product-specs.html"
    };
  });
})();
