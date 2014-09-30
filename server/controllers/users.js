var mongoose = require('mongoose')
var User = mongoose.model('User');

module.exports = {
    index: function(req, res){
      res.render('./../public/views/index', {title:'SoundHub'});
    },

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

    //to have user login
    index_json: function(req, res){ 
        console.log('REQ.BODY', req.body);
        // console.log('REQ', req);
        console.log('REQ.sessionID', req.sessionID);
        
        User.find({email: req.body.email}, function(err, results){
            // console.log('RESULTS', results);
            // console.log("DOES REQ COME HERE", req.body);
            // console.log("REQ.BODY.PASSWORD", req.body.password);
            // console.log("RESULTS.PASSWORD", results[0].password);

            console.log('REq.session', req.session);

            if(req.body.password == results[0].password){
                req.session.session_id = req.sessionID;
                req.session.name = results[0].first_name;
                req.session.user_id = results[0]._id;
                // res.send(JSON.stringify(results));
            }
            else{
                console.log('ERROR');
                res.send(JSON.stringify(err));
            } 
        });
    },

    session_json: function(req, res){
        if(req.sessionID == req.session.session_id){
            res.send(req.session);
        } else{
            res.redirect('/');
        }
    }

    // show: function(req, res){
    //     res.render('./../server/views/users/show', {title:'Welcome Page'});
    // },
    // edit: function(req, res){
    //     res.render('./../server/views/users/edit', {title:'Welcome Page'});
    // }
}