angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    var keep = []
    var data = {
      key : app.key,
      answer : app.answer

    }

    app.add = function (f) {

      console.log(f)
      $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', f)
         .then(function success (response) {
           console.log(response)
         }, function error (response) {
       })
    }


      $http.get('https://sheetsu.com/apis/v1.0/43c348a7757a'). success(function(response) {
         console.log(response)
         keep.push(response)

         }).
         error(function(data, status, headers, config) {
           // log error
           console.log('error')
         });

         console.log(keep)
         app.se();

          app.se = function () {
            $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', keep)
               .then(function success (response) {
                 console.log(response)
               }, function error (response) {
             })
          }





  });
