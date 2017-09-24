var React = require('react');
var Firebase = require('firebase/app');

var config = {
	databaseURL: 'https://contactlist-999.firebaseio.com/'
};
Firebase.initializeApp(config);

var fbApi = React.createClass({
	render: function(){
		return(
			<div>
				fbApi
			</div>
		);
	},

});


module.exports = fbApi;