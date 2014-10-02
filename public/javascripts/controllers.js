MusicApp.controller('Login', function($scope, $window, SoundFactory){
	$scope.registerUser = function(){
		SoundFactory.addNewUser($scope.register, function(data){
			if(typeof(data) == 'object'){
				$scope.success = null;
				$scope.messages = data;
			} else {
				$scope.messages = null;
				$scope.success = data;
			}
		});
	}

	$scope.loginUser = function(){
		SoundFactory.getUser($scope.login);
	}
})

MusicApp.controller('User', function($scope, $window, SoundFactory){
	// $scope.myplaylist = '';
	SoundFactory.getUserData(function(data){
		$scope.user = data;
		console.log('$scope.user', $scope.user);
	});

	SoundFactory.getAllUsers(function(data){
		$scope.users = data;
		console.log('$scope.allusers', $scope.users);
	});

	SoundFactory.getAllPlaylists(function(data){
		$scope.playlists = data;
		console.log('$scope.playlists,', $scope.playlists);
	});

	SoundFactory.getAllSongs(function(data){
		$scope.songs = data;
		console.log('$scope.songs', $scope.songs)
	})

	$scope.createPlaylist = function(){
		SoundFactory.addPlaylist($scope.playlist_name);
	}
	$scope.showPlaylist = function(index){
		SoundFactory.getPlaylist(index, function(data){
			$scope.user_playlist = data;
			console.log('user_playlist', $scope.user_playlist)
		});
	}

	$scope.showCurrentPlaylist = function(){
		SoundFactory.getCurrentPlaylist(function(data){
			$scope.user_playlist = data;
		})
	}

	$scope.deletePlaylist = function(info){
		SoundFactory.removePlaylist(info);
	}

	$scope.deleteSong = function(index,song,playlist){
		SoundFactory.removeSong(index,song,playlist);
	}

	$scope.addSong = function(){
		// SoundFactory.addSongToPlaylist($scope.addsong);
		// console.log('$information', song)
		console.log('$myplaylist', $scope.myplaylist);
		// console.log('$information', playlist_name)
	}
})	

MusicApp.controller('Playlist', function($scope, SoundFactory){
	//get all songs for specific playlist by using hidden ID
		//list all songs

	// $scope.showPlaylist = function(index){
	// 	SoundFactory.getPlaylist(index, function(data){
	// 		$user_playlist = data;
	// 	});
	// }

})
	//get all playlist
		//get all songs for each playlist -- limit first 5 songs





	// StoreFactory.getCustomers(function(data){
	// 	console.log('data!', data);
	// 	$scope.customers = data;
	// });
	
	// $scope.addCustomer = function(){
	// 	$scope.msg = StoreFactory.addNewCustomer($scope.new_customer);
	// }

	// $scope.removeCustomer = function(id,index){
	// 	StoreFactory.deleteCustomer(id,index);
	// }


MusicApp.controller('Browse', function($scope, SoundFactory){
	//get all songs in database
		//list all songs

	//get all users playlist

})	




MusicApp.controller('Follow', function($scope, SoundFactory){
	//get all users AND their ID's the logged in user is following

	//add function to unfollow user 

	//ADD CONTROLLER AROUND 'WHO TO FOLLOW' IN INDEX.EJS

	//ADD SOCKET to say "Eduardo is now following Rory"

})

MusicApp.controller('NewsFeed', function($scope, MusicFactory){
	//get all users AND their ID's the logged in user is following

	//add function to unfollow user 

	//ADD CONTROLLER AROUND 'news_feed' IN INDEX.EJS

	//SOCKET

})