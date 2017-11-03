import 'babel-polyfill';
import 'bootstrap';

require.context( '../../sass/test', true, / *.sass/ );
require('bootstrap/dist/css/bootstrap.css');
require('font-awesome/css/font-awesome.css');

console.log('test');