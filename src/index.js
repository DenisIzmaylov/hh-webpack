var $ = require('jquery');
var React = require('react');
var Toolbar = require('./toolbar');
require('./index.css');
require('./header');
React.render(
    React.createElement(Toolbar),
    document.getElementById('toolbar')
);
if (NODE_ENV === 'production') {
    $('body').append('There is Production mode.');
} else {
    $('body').append('There is Development mode.');
}
