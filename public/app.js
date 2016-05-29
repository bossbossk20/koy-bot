angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello tes"
    console.log(app.value)

    app.add = function() {
        console.log("true")
          $http.get('https://sheetsu.com/apis/v1.0/43c348a7757a'). success(function(response) {
                console.log(response)
            }).
            error(function(data, status, headers, config) {
              console.log('error')
      })




  });
