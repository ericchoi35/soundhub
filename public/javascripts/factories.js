MusicApp.factory('SoundFactory', function($http, $window){

	var factory = {};

	factory.addNewUser = function(info){ //for adding user
		// console.log('INFO', info);
		console.log(info);
		// $location.path('#/user');
		
		$http.post('/user/create', info).success(function(data){
			console.log(data);
			$window.location.href = 'http://localhost:3000/user';
      		// return success_msg = 'Customer has been successfully added!';
    	});
	}

	factory.getUser = function(info){ //for user login
		console.log(info);

		$http.post('/user/index.json', info).success(function(data){
			console.log(data);
			$window.location.href = 'http://localhost:3000/user';
      		// return success_msg = 'Customer has been successfully added!';
    	});
	}
	return factory;

});