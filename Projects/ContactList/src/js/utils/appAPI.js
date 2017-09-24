var Firebase = require('firebase/app');
//var Firebase = require('firebase');
require("firebase/database");
var AppActions = require('../actions/AppActions');
var fbApi = require('../components/fbApi');

/*var config = {
	databaseURL: 'https://contactlist-999.firebaseio.com/'
};
Firebase.initializeApp(config);*/

module.exports = {
	saveContact: function(contact){
		var firebaseRef = Firebase.database().ref('/contacts');
		firebaseRef.push({
			contact: contact
		});
		/*this.firebaseRef = new Firebase('https://contactlist-999.firebaseio.com/contacts');
		this.firebaseRef.push({
			contact: contact
		});*/
	},

	getContacts: function(){
		var firebaseRef = Firebase.database().ref('/contacts');
		//this.firebaseRef = new Firebase('https://contactlist-999.firebaseio.com/contacts');
		firebaseRef.once("value", function(snapshot){
			var contacts = [];
			snapshot.forEach(function(childSnapshot){
				var contact = {
					id: childSnapshot.key,
					name: childSnapshot.val().contact.name,
					phone: childSnapshot.val().contact.phone,
					email: childSnapshot.val().contact.email
				}
				contacts.push(contact);
				AppActions.receiveContacts(contacts);
			});
		});
	},

	removeContact: function(contactId){
		var firebaseRef = Firebase.database().ref('/contacts/'+contactId);
		//this.firebaseRef = new Firebase('https://contactlist-999.firebaseio.com/contacts/'+contactId);
		firebaseRef.remove();
	},

	updateContact: function(contact){
		var id = contact.id;
		var updatedContact = {
			name: contact.name,
			phone: contact.phone,
			email: contact.email
		}

		var firebaseRef = Firebase.database().ref('/contacts/'+contact.id+'/contact');
		//this.firebaseRef = new Firebase('https://contactlist-999.firebaseio.com/contacts/'+contact.id+'/contact');
		firebaseRef.update(updatedContact);
	}
}