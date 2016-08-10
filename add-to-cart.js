var app = angular.module('ShoppingCart', []);
app.controller('addToCart', function($scope) {
    $scope.shoppingListItem = "";
    $scope.addItem = function() {
        $scope.shoppingList = $scope.shoppingList + "<li>"+$scope.shoppingListItem+"</li>";
    };
});