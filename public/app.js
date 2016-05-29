angular.module('app', [])
  .controller('TodoListController', function($http) {
    var app = this;
    var keep = []
    var data = {
      key : app.key,
      answer : app.answer

    }
    sen()
    app.add = function (f) {

      console.log(f)
      $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', f)
         .then(function success (response) {
           console.log(response)
         }, function error (response) {
       })
    }

    function sed(){
      $http.get('https://sheetsu.com/apis/v1.0/43c348a7757a'). success(function(response) {
         console.log(response)
         keep.push(response)

         }).
         error(function(data, status, headers, config) {
           // log error
           console.log('error')
         });

         console.log(keep)

        //  $http.post('https://sheetsu.com/apis/v1.0/43c348a7757a', keep)
        //     .then(function success (response) {
        //       console.log(response)
        //     }, function error (response) {
        //   })

    }



  });
