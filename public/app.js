angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello"
    console.log(app.value)

    app.add = function() {
          $http.get('/click'). success(function(response) {
              console.log(response)
            }).
            error(function(data, status, headers, config) {
              // log error
              console.log('error')
            })
    }


  });
