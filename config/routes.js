var users = require('./../server/controllers/users.js');
module.exports = function Routes(app, io){
    app.get('/', function(req,res){
        req.session.page = 'index';
        console.log('request', req.session);
        users.index(req,res)
    });
 	app.get('/users', function (req,res){
        req.session.name = 'mike';
        console.log('REQUEST', req.session);
        users.index(req,res)
    });
    app.get('/users/index.json',function (req,res){
        users.index_json(req,res)
    });
    app.get('/users/new', function (req,res){
        users.new(req,res)
    });
    app.post('/users/create', function (req,res){
        users.create(req,res)
    });
    app.get('/users/:id', function (req,res){
        users.show(req,res)
    });
    app.get('/users/:id/edit', function (req,res){
        users.edit(req,res)
    });
    app.post('/users/newUser_json', function (req,res){
        users.newUser_json(req,res)
    });
    io.sockets.on('connection', function (socket){
        console.log('A new user connected!');
        socket.emit('info', {msg: 'The world is round, there is no up or down.'}); //sending a message to just that person
        io.emit('global_event', {msg: 'hello'}); //broadcasting to everyone
        socket.broadcast.emit('event', {msg: 'hi'}); //broadcasting an event to everyone except the person you established the socket connection to
        socket.on('my other event', function (data){
            console.log(data);
        }); //listening for an event
        socket.on('disconnect', function (){
            io.sockets.emit('user disconnected');
        });
    });
};