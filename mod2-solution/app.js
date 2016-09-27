(function () {
'use strict'

angular.module('ShoppingListCheckOff',[])
.controller('ToBuyController',ToBuyController)
.controller('AlreadyBoughtController', AlreadyBoughtController)
.service('ShoppingListCheckOffService',ShoppingListCheckOffService);

ToBuyController.$inject=['ShoppingListCheckOffService'];
function ToBuyController(ShoppingListCheckOffService){
  var ToBuy_list = this;

  // ToBuy_list.addItem = function(){
      ToBuy_list.items = ShoppingListCheckOffService.ToBuy_items.addItemToBuy();

  // }

  ToBuy_list.addItem=function(itemIndex){
    try {
      ShoppingListCheckOffService.checkItem(itemIndex);
    } catch (error) {
      ToBuy_list.errorMessage = error.message;
    }

  };



}


AlreadyBoughtController.$inject=['ShoppingListCheckOffService'];
function AlreadyBoughtController(ShoppingListCheckOffService){
var Bought_list=this;


        Bought_list.items= ShoppingListCheckOffService.Bought_items.getItems();
      // try {
      //   var item = Bought_list.items[0];
      // } catch (error) {
      //   Bought_list.errorMessage = error.message;
      // }

        // console.log("errorrrrrr");
      // }

}

function ShoppingListCheckOffService()
{
  var service = this;

  service.ToBuy_items = [];
  service.Bought_items = [];

service.ToBuy_items.addItemToBuy= function(){
  var item1 = {
    name: "Cookies",
    quantity: 10
  };

  var item2 = {
    name: "Apple juice",
    quantity: 2
  };

  var item3 = {
    name: "candies",
    quantity:3
  };

  var item4 = {
    name: "ice creams",
    quantity: 6
  };

  var item5 = {
    name: "Pizzas",
    quantity: 3
  };

  service.ToBuy_items.push(item1);
  service.ToBuy_items.push(item2);
  service.ToBuy_items.push(item3);
  service.ToBuy_items.push(item4);
  service.ToBuy_items.push(item5);
  // console.log(ToBuy_items);
  return service.ToBuy_items;
}

  service.checkItem = function(itemIdex){
    var item = service.ToBuy_items[itemIdex];
    service.Bought_items.push(item);
    service.ToBuy_items.splice(itemIdex, 1);
    if (service.ToBuy_items.length == 0)
    throw new Error ("Everything is bought!");;
  }

  service.Bought_items.getItems = function(){
    return service.Bought_items;
  }
}

})();
