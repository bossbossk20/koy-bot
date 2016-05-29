angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello"
    app.add = function() {
      console.log(app.text)
    }
  });
