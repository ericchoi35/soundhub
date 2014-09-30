var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
      res.render('./../public/views/index', {title:'SoundHub'});
    },
 // index: function(req, res){
 //  res.render('./../public/views/index', {title:'Welcome Page'});
 // },

    create: function(req, res){
        var a = new User(req.body);
        a.save(function(err){
           if(err){
            res.send(JSON.stringify(err));
           }
           else
           {
            res.send('You have successfully registered!');
           }
        });
    },

    index_json: function(req, res){ 
        console.log('REQ.BODY', req.body);
        // console.log('REQ', req);
        console.log('REQ.sessionID', req.sessionID);
        console.log('REQ.session', req.session);
        
        User.find({email: req.body.email}, function(err, results){
            // console.log('RESULTS', results);
            // console.log("DOES REQ COME HERE", req.body);
            // console.log("REQ.BODY.PASSWORD", req.body.password);
            // console.log("RESULTS.PASSWORD", results[0].password);
            if(req.body.password == results[0].password){
                req.session.session_id = req.sessionID;
                // res.redirect('/users', {session_id: req.sessionID});
                // console.log('hello');
                res.send(JSON.stringify(results));
            }
            else{
                console.log('ERROR');
                res.send(JSON.stringify(err));
            } 
        });
    },
    show: function(req, res){
        res.render('./../server/views/users/show', {title:'Welcome Page'});
    },
    edit: function(req, res){
        res.render('./../server/views/users/edit', {title:'Welcome Page'});
    }
}