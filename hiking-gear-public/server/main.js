import { Meteor } from 'meteor/meteor';
import {HTTP} from 'meteor/http';

Meteor.startup(() => {
    // code to run on server at startup

    	Meteor.methods({
    	    gearList() {
    	        console.log('methods: gearList');
    	        var apiUrl = 'http://localhost:2403/gear';
    	        var result = HTTP.get(apiUrl);
    	        console.log('methods result', result);
    	        console.log('methods result data', result.data);
    	        return result.data;
    	    }
    	});
});
