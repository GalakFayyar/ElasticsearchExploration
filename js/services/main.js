// Main Service
'use strict'

app.service('elasticClient', function(esFactory) {
	return { 
		getClient: function(server) {	
			return esFactory({
				host: server,
			});
		}
	}
});