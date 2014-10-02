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
			if(output == ''){
				output = [];
				playlists = output;
			} else{
				playlists = output;
			}
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

	factory.removePlaylist = function(info){
		var playlist = {
			_id: user[0]._id,
			playlist_name: info
		}
		console.log("FROM REMOVE", playlist, user);
		$http.post('/playlist/delete', playlist).success(function(data){
			console.log(data);
			playlists[current_playlist_index].songs
		})
	}

	// factory.getCurrentPlaylist = function(callback){

	// 	playlist = playlists[current_playlist_index];
	// 	console.log(playlist);
	// 	callback(playlist);
	// 	$http.get('/playlist/get_playlist').success(function(data){
	// 		playlist = playlists[data];
	// 		console.log(playlist);
	// 		callback(playlist);

	// 	})	
	// }

	factory.removeSong = function(index, song, playlist){
		var info = {
			_id: user[0]._id,
			playlist_name: playlist,
			track: song.track,
			artist: song.artist
		};
		$http.post('/playlist/delete_song', info).success(function(data){
			playlists[current_playlist_index].songs.splice(index,1);
		})
	}

	factory.getAllSongs = function(callback){
		$http.get('/users/all_songs').success(function(data){
			callback(data);
		})
	}

	factory.addSongToPlaylist = function(info){
		console.log('INFO', info);
		var data = {
			track: info.song_info.track,
			artist: info.song_info.artist,
			playlist_name: playlists[info.playlist_index].playlist_name
		}
		console.log(data);
		$http.post('/playlist/add_song', data).success(function(data){
			playlists[info.playlist_index].songs.push({
				track: info.song_info.track,
				artist: info.song_info.artist
			})
			console.log(playlists);
		})
	}

	factory.test = function(){
		$http.get('/test').success(function(data){
			data
		})
	}
	return factory;
});

