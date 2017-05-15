myApp.service( 'Omdb', function ( $http ) {
  this.search = function ( title ) {
    console.log( 'in Omdb.search:', title );
    $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + title
    }).then( function success ( response ) {
      return response.data.Search;
    }, function error ( err ) {
      console.log( err );
    }); // end omdb GET
  }; // end search
}); // end Omdb service
