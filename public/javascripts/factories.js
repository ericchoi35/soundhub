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

	factory.getUser = function(info){ //for user login
		console.log(info);

		$http.post('/users/index.json', info).success(function(data){
			console.log('hello');
			$window.location.href = 'http://localhost:3000/users';
    	});
	}

	factory.getSession = function(callback){
		$http.get('/users/session.json').success(function(data){
			callback(data);
		});
	}
	return factory;
});

