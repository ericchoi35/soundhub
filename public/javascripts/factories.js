MusicApp.factory('SoundFactory', function($http, $window){
	var user = {};
	var users = {};
	var playlists = {};
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
			console.log(data);
			$window.location.href = 'http://localhost:3000/users';
    	});
	}

	factory.getUserData = function(callback){
		$http.get('/users/user.json').success(function(data){
			callback(data);
			user = data;
		});
	}

	factory.getAllUsers = function(callback){
		$http.get('/users/allUsers.json').success(function(data){
			callback(data);
			users = data;
			console.log(users);
		})
	}

	factory.addPlaylist = function(info){
		$http.post('/playlist/create').success(function(data){

		})
	}
	return factory;
});

