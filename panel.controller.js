(function() {
  var app = angular.module("store");

  app.controller("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(chackTab) {
      return this.tab === chackTab;
    };
  });
})();
