(function() {
  var app = angular.module("store");

  app.controller("StoreController", [
    "$http",
    function($http) {
      this.products = [];

      this.init = function() {
        $http.get("/data/products.json").then(resp => {
          this.products = resp.data;
        });
      };
    }
  ]);
})();
