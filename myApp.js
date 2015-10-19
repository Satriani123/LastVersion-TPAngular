var myApp = angular.module("myApp", ["ngRoute"]);

myApp.config(function($routeProvider) {
  $routeProvider.when("/list", {
    controller: "ListController",
    templateUrl: "view/charactersList.html"
  }).when("/detail/:name/:season/:chapter", {
    controller: "DetailController",
    templateUrl: "view/characterDetail.html"
  }).otherwise({
    templateUrl: "view/home.html"
  });
});
