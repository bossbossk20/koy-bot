angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;

    var data = {
      key : app.key,
      answer : app.answser

    }
    app.add = function () {
      var data = {
        key : app.key,
        answer : app.answser
      }
      console.log(data)
      $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', data)
         .then(function success (response) {
           console.log(response)
         }, function error (response) {
       })
    }
    app.re = function (data){
      console.log(data)
       $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', data)
          .then(function success (response) {
            console.log(response)
          }, function error (response) {
        })
      }
      $http.get('https://sheetsu.com/apis/v1.0/43c348a7757a'). success(function(response) {
         console.log(response)
         }).
         error(function(data, status, headers, config) {
           // log error
           console.log('error')
         });


  });
