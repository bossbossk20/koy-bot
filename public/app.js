angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    app.test = "hello"
    var data
    app.text = data
    app.re = function (data){
      console.log(data)
       $http.post('https://docs.google.com/spreadsheets/d/1-pmyc9QP784bX-9Yd91daaxXREkCovfIRdnhk3o4KAM/edit#gid=0', data)
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
