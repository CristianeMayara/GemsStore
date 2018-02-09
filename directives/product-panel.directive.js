(function() {
  var app = angular.module("store");

  app.directive("productPanel", function() {
    return {
      restrict: "EA",
      templateUrl: "./view/product-panel.html"
    };
  });
})();
