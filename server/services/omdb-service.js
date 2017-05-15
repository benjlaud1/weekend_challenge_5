myApp.service( 'Omdb', function ( $http ) {
  search = function ( title ) {
    console.log( 'in Omdb.search:', title );
    var results;
    return $http({
      method: 'GET',
      url: 'http://www.omdbapi.com/?s=' + title
    }).then( function success ( response ) {
      console.log( 'Omdb results ->', response.data.Search );
      return response.data.Search;
    }, function error ( err ) {
      console.log( err );
    }); // end omdb GET
  }; // end search
}); // end Omdb service
