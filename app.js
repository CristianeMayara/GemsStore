(function() {
  var app = angular.module("store", []);

  app.controller("StoreController", function() {
    this.products = gems;
  });

  app.controller("PanelController", function() {
    this.tab = 1;

    this.selectTab = function(setTab) {
      this.tab = setTab;
    };

    this.isSelected = function(chackTab) {
      return this.tab === chackTab;
    };
  });

  var gems = [
    {
      name: "Dodecahedron",
      price: 2.95,
      description: "...",
      canPurchase: true,
      soldOut: false,
      images: [
        {
          full: "abc.png",
          thumb: "abc.png"
        },
        {
          full: "abc.png",
          thumb: "abc.png"
        }
      ]
    },
    {
      name: "Pentagonal Gem",
      price: 5.95,
      description: "...",
      canPurchase: false,
      soldOut: false,
      images: [
        {
          full: "abc.png",
          thumb: "abc.png"
        },
        {
          full: "abc.png",
          thumb: "abc.png"
        }
      ]
    }
  ];
})();
