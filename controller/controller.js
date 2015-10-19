myApp.controller("ListController", ["$scope",
  function($scope) {
    $scope.characters = [{
      name: 'Jon Snow',
      family: 'Stark',
      season: 4,
      chapter: 6
    }, {
      name: 'Sansa Stark',
      family: 'Stark',
      season: 3,
      chapter: 7
    }, {
      name: 'Tyrion Lannister',
      family: 'Lannister',
      season: 5,
      chapter: 4
    },{
     name: 'Jamie Lannister',
     family: 'Lannister',
     season: 2,
     chapter: 1
   },{
    name: 'Cercei Lannister',
    family: 'Lannister',
    season: 1,
    chapter: 4
  },{
    name: 'Daenerys Targaryen',
    family: 'Targaryen',
    season: 4,
    chapter: 8
  },{
    name: 'Arya Stark',
    family: 'Stark',
    season: 3,
    chapter: 10
}
  ];
  $scope.seasons = ["","1","2","3","4","5"];
  $scope.chapters = ["","1","2","3","4","5","6","7","8","9","10"];
    $scope.delete = function(name) {
      console.log(name);
  //  $scope.characters.splice(index,1);
  }

  }
]);

myApp.controller("DetailController", ["$scope", "$routeParams","$http",
  function($scope, $routeParams, $http) {
    $scope.name = $routeParams.name;
    $scope.season = $routeParams.season;
    $scope.chapter = $routeParams.chapter;
    var name = $scope.name;
    var pageNumber;
    var finalName = name.replace(" ","_");
    var urlPageid = 'http://es.wikipedia.org/w/api.php?titles=' + finalName + '&rawcontinue=true&action=parse&format=json&callback=JSON_CALLBACK';
    $http.jsonp(urlPageid)
     .success(function(data){
      pageNumber = data.parse.pageid;
    });

var url = 'http://es.wikipedia.org/w/api.php?titles=' + finalName + '&rawcontinue=true&action=query&format=json&prop=extracts&callback=JSON_CALLBACK';
    $http.jsonp(url)
     .success(function(data){
        for (var page in data.query)
        {
        console.log(page);
        }

    });

  }
]);
