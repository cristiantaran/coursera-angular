(function () {
'use strict';

var toBuyItemsList = [
  {
    name: "Bananas",
    quantity: "8"
  },
  {
    name: "Avocados",
    quantity: "4"
  },
  {
    name: "Tomatoes",
    quantity: "10"
  },
  {
    name: "Chili Peppers",
    quantity: "5"
  },
  {
    name: "Nuts",
    quantity: "90"
  }
];


angular.module('ShoppingListCheckOff', [])
.controller('ToBuyController', ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

ToBuyController.$inject = ['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService) {
  var tuBuyItemsCtrl = this;

  tuBuyItemsCtrl.items = ShoppingListCheckOffService.getToBuyItems();

  tuBuyItemsCtrl.buyItem = function (itemIndex) {
    ShoppingListCheckOffService.buyItem(itemIndex);
  };
}

AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService) {
  var boughtItemsCtrl = this;

  boughtItemsCtrl.items = ShoppingListCheckOffService.getBoughtItems();
}

function ShoppingListCheckOffService() {
  var service = this;

  var toBuyItems = toBuyItemsList;
  var boughtItems = [];

  service.getToBuyItems = function () {
    return toBuyItems;
  };

  service.buyItem = function (itemIndex) {
    var boughtItem = toBuyItems[itemIndex];
    boughtItems.push(boughtItem);
    toBuyItems.splice(itemIndex, 1);    
  };

  service.getBoughtItems = function () {
    return boughtItems;
  };
}

})();
