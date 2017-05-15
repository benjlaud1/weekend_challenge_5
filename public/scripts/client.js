var myApp = angular.module( 'myApp', [] );

myApp.controller( 'movieController', function ( $http ) {
  var vm = this;
  console.log( 'In movieController' );
  vm.hello = "Hello";
  vm.searchResults = [];

  vm.searchTitle = function ( title ) {
    // vm.searchResults = Omdb.search( title );
    console.log( 'in searchTitle with:', title );
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + title
    }).then( function success ( response ) {
      console.log( 'back from omdb ->', response.data.Search );
      vm.searchResults = response.data.Search;
    }, function error ( err ) {
      console.log( err );
    }); // end omdb GET
  }; // end searchTitle

  vm.addFavorite = function( movie ) {
    console.log( 'in toggleFavorite:', movie );
    // if ( vm.favorite ) {
      $http({
        method: 'POST',
        url: '/addFav',
        data: movie
      }).then( function success ( data ) {
        console.log( data.data );
      }, function error ( err ) {
        console.log( err );
      }); // end http
    // } else {
    //   $http({
    //     method: 'DELETE',
    //     url: '/removeFav/' + movie.imdbID
    //   }).then( function success ( data ) {
    //     console.log( data.data );
    //   }, function error ( err ) {
    //     console.log( err );
    //   }); // end http
    // }

  }; // end addFavorite

  vm.deleteFavorite = function( movie ) {
    $http({
        method: 'DELETE',
        url: '/removeFav/' + movie.imdbID
      }).then( function success ( data ) {
        console.log( data.data );
      }, function error ( err ) {
        console.log( err );
      }); // end http
  }; // end deleteFavorite
}); // end movieController
