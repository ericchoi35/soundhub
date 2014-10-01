var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    create: function(req, res){
    	console.log(req.body);
    	User.update({'_id': req.body._id},{$push: {playlists: {playlist_name: req.body.playlist_name}}}, function(err,numbersAffected){
            if(err){
                res.send(JSON.stringify(err));
            }
            else
            {
                res.send(JSON.stringify(numbersAffected));
            }
    	})
    },
    allPlaylists_json: function(req, res){
    	console.log("SESSION - req.session", req.session);
        User.find({_id: req.session.user_id}, function(err, results){
        	 if(err){
                res.send(JSON.stringify(err));
            }
            else
            {
                 res.send(JSON.stringify(results[0].playlists));
            }
        	// console.log('RESULTS', results);
            // res.send(JSON.stringify(results.playlists));
        });
    }
}

