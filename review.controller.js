(function() {
  var app = angular.module("store");

  app.controller("ReviewController", function() {
    this.review = {};

    this.addReview = function(product) {
      this.review.createdOn = Date.now();
      product.reviews.push(this.review);
      this.review = {};
    };
  });
})();
