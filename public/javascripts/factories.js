MusicApp.factory('SoundFactory', function($http, $window){

	var user = {};

	var factory = {};

	factory.addNewUser = function(info, callback){ //for adding user
		console.log(info);

		$http.post('/users/create', info).success(function(data){
			// console.log(data);
			// $window.location.href = 'http://localhost:3000/users';
      		callback(data);
    	});
	}

	factory.getUser = function(info, callback){ //for user login
		console.log(info);

		$http.post('/users/index.json', info).success(function(data){
			user = data;
			console.log('USER', user);
			// console.log(data);
			callback(data);
			
			// $window.location.href = 'http://localhost:3000/users';
			
    	});
		$window.location.href = 'http://localhost:3000/users';

	}

	factory.getSession = function(){
		var session_data = {};
		$http.get('session.json').then(function(req){
			console.log(req.data);
			sesssion_data = req.data;
		});
	}
	return factory;
});

