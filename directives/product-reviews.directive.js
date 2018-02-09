(function() {
  var app = angular.module("store");

  app.directive("productReviews", function() {
    return {
      restrict: "EA",
      templateUrl: "./view/product-reviews.html"
    };
  });
})();
