import 'babel-polyfill';
import 'bootstrap';

require.context( '../../sass/home', true, / *.sass/ );
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

console.log('testing');
if ( process.env.NODE_ENV !== 'production' )
{
	console.log( 'Looks like we are in development mode!' );
}
else
{
	console.log( 'Looks like we are in production mode!' );
}