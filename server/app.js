var express = require( 'express' );
var app = express();
var bodyParser = require( 'body-parser' );
var path = require( 'path' );
var mongoose = require( 'mongoose' );

var port = process.env.PORT || 3000;

mongoose.connect( 'localhost:27017/favoriteMovies' );

var favSchema = new mongoose.Schema({
  Poster: String,
  Title: String,
  Type: String,
  Year: String,
  imdbID: String
}); // end favSchema

var favModels = mongoose.model( 'favModels', favSchema );

app.use( bodyParser.urlencoded( { extended: true } ) );
app.use( bodyParser.json() );
app.use( express.static( 'public' ) );

app.get( '/', function ( req, res ) {
  console.log( 'base url hit' );
  res.sendFile( path.resolve( 'public/views/index.html' ) );
}); // end base url hit

app.post( '/addFav', function ( req, res ) {
  console.log( req.body );
  var newFav = favModels( req.body );
  newFav.save( function ( err ) {
    if ( err ) {
      console.log( err );
      res.sendStatus( 500 );
    } else {
      console.log( 'saved' );
      res.sendStatus( 201 );
    } // end if/else
  }); // end save
}); // end addFav POST

app.delete( '/removeFav/:movieId', function ( req, res ) {
  console.log( 'remove:',req.params.movieId );
}); // end removeFav DELETE

app.listen( port, function () {
  console.log( 'server up on port:', port );
}); // end listen
