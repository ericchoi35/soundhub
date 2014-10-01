MusicApp.factory('SoundFactory', function($http, $window){
	
	var user = [];
	
	var users = [];
	
	var playlists = [];

	var current_playlist_index = null;
	
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
		$http.get('/users/allUsers.json').success(function(output){
			callback(output);
			users = output;
		})
	}

	factory.getAllPlaylists = function(callback){
		$http.get('/playlist/allPlaylists').success(function(output){
			
			playlists = output;
			//test
			callback(output);
			console.log('playlists', output);
		})
	}

	factory.addPlaylist = function(info){
		var user_data = {
			_id: user[0]._id,
			playlist_name: info
		}
		$http.post('/playlist/create', user_data).success(function(data){
			playlists.push({playlist_name: info});
			console.log('PLAYLISTS: ',playlists)
		})
	}

	factory.getPlaylist = function(index, callback){

		current_playlist_index = index;
		console.log('CURRENT PLAYLIST INDEX', current_playlist_index);
		// console.log('CURRENT PLAYLIST INDEX', current_playlist_index);

		// $http.get('/playlist/save_playlist', current_playlist_index).success(function(data){
			
		// })
			playlist = playlists[index];
			console.log(playlist);
			callback(playlist);
		
	}

	factory.getCurrentPlaylist = function(callback){

		playlist = playlists[current_playlist_index];
		console.log(playlist);
		callback(playlist);
		// $http.get('/playlist/get_playlist').success(function(data){
		// 	playlist = playlists[data];
		// 	console.log(playlist);
		// 	callback(playlist);

		// })	
	}

	factory.test = function(){
		$http.get('/test').success(function(data){
			data
		})
	}
	return factory;
});

