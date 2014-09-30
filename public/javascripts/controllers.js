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

MusicApp.controller('User', function($scope,SoundFactory){	
	SoundFactory.getSession(function(data){
		$scope.session = data;
		console.log($scope.session);
	});
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


MusicApp.controller('Playlist', function($scope, SoundFactory){
	//get all songs for specific playlist by using hidden ID
		//list all songs

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