import {Template} from 'meteor/templating';
import {ReactiveVar} from 'meteor/reactive-var';
import './main.html';

if (Meteor.isClient) {

	Template.gearList.rendered = function () {
		Meteor.call('gearList', function(err, res){
			if (err) {
				console.error('rendered', err);
			} else {
				console.log('rendered', res);
                Session.set('gearListData', res);
			}
		});
	}

	Template.gearList.helpers({
	    'gearListData': function(){
	        return Session.get('gearListData');
	    }
	});

	Template.dashboard.events({
		'click .logout': function (event) {
			event.preventDefault();
			Meteor.logout();
		}
	});

	Template.register.events({
		'submit form': function (event) {
			event.preventDefault();
			var emailVar = event.target.registerEmail.value;
			var passwordVar = event.target.registerPassword.value;
			Accounts.createUser({
				email: emailVar,
				password: passwordVar
			});
		}
	});

	Template.login.events({
		'submit form': function (event) {
			event.preventDefault();
			var emailVar = event.target.loginEmail.value;
			var passwordVar = event.target.loginPassword.value;
			Meteor.loginWithPassword(emailVar, passwordVar);
		}
	});
}
