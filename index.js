/**
 * Created by aroshihanda on 9/21/16.
 */
var express    = require('express');
var app        = express();
var bodyParser = require('body-parser');
// call the packages we need
var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

// ROUTES FOR OUR API
// =============================================================================
var router = express.Router();              // get an instance of the express Router

// test route to make sure everything is working (accessed at GET http://localhost:8080/api)
router.get('/', function(req, res) {
    res.json({ message: 'hooray! welcome to APP Workshop Week 2!' });
});

// more routes for our API will happen here

// We will simulate a database output, for a real app you should use an ORM an create a data model to work through the different CRUD operations
var cars = [
    {
        id : 1,
        license : "abc123",
        make:"ford",
        model:"escort",
         color:"green"


},
    {
        id : 2,
        license : "abc124",
        make:"toyota",
        model:"camri",
        color:"red"

    },
    {
        id : 3,
        license : "abc126",
        make:"toyota",
        model:"corolla",
        color:"blue"

    }
];
// Keep track of ids
var autoIncrementID = cars.length;

router.route('/car') //this route is generic, so it will be used for generic operations as list all or create
    .get(function(req, res){
        // Get ALL the cars

        res.json(cars); //return a json object
    })
    .post(function(req, res){
        // Insert new car
        if(req.body.license == undefined)
        {
            res.sendStatus("400")
        }
        else
        { var newcar=
                 {
                     license:req.body.license,
                     make:req.body.make,
                     model:req.body.model,
                     color:req.body.model,
                     id:++autoIncrementID
                 }
            cars.push(newcar);
            res.sendStatus(201);
        }
    });

router.route('/car/:id/') //route to work with specific car using an ID (for this case POST doesn't make sense)
    .get(function(req, res){
        var id = req.params.id;  //Read the value of the param defined in the route :id
        //add code that find the car with the corresponding id

        cars.forEach(function(element) {
            if (element.id == id) {
                res.json(element);
                res.end();
            }
        });
    })
    .patch(function(req, res){
        var id = req.params.id;
        if(Object.keys(req.query).length>0) {
            //console.log(req.query);
            cars.forEach(function(element)
            {
                if (element.id==id) {
                    Object.keys(req.query).forEach(function (qry) {
                        element[qry] = req.query[qry];
                    });
                    // element.color=req.query.color;
                    res.sendStatus(200);
                }
            })
        }
        else
            res.sendStatus(400);
    })
    //.put(function(req, res){

//});

var drivers = [
    {
        id : 1,
        name:"Tim",
        email:"tim@gmail.com",
        password:"asdf",
        phone:"12348888"

},
    {
        id : 2,
        name:"lily",
        email:"lily@gmail.com",
        password:"abcd123",
         phone:"12111378"

}
];
// Keep track of ids
var autoIncrementID = drivers.length;

router.route('/driver') //each entity should have specific and generic paths or routes.
    .get(function(req, res){
        res.json(drivers);

    })
    .post(function(req, res){

            // Insert new driver

        var newdriver=
            {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phone:req.body.phone,
                id:++autoIncrementID
            }
                drivers.push(newdriver);
                res.sendStatus(201);
            }
    );

router.route('/driver/:id/') //route to work with specific car using an ID (for this case POST doesn't make sense)
    .get(function(req, res){
        var id = req.params.id;  //Read the value of the param defined in the route :id
        //add code that find the car with the corresponding id

        drivers.forEach(function(element) {
            if (element.id == id) {
                res.json(element);
                res.end();
            }
        });
    })
    .patch(function(req, res){
        var id = req.params.id;
        if(Object.keys(req.query).length>0) {
            //console.log(req.query);
            drivers.forEach(function(element)
            {
                if (element.id==id) {
                    Object.keys(req.query).forEach(function (qry) {
                        element[qry] = req.query[qry];
                    });
                    // element.color=req.query.color;
                    res.sendStatus(200);
                }
            })
        }
        else
            res.sendStatus(400);
    })
//.put(function(req, res){

//});

var passengers = [
    {
        id : 1,
        name:"wuwu",
        email:"wuwr@gmail.com",
        password:"ahsdf",
        phone:"12349888"

    },
    {
        id : 2,
        name:"jaad",
        email:"jady@gmail.com",
        password:"ggcd123",
        phone:"127676378"

    }
];
// Keep track of ids
var autoIncrementID = passengers.length;

router.route('/passenger') //each entity should have specific and generic paths or routes.
    .get(function(req, res){
        res.json(passengers);

    })
    .post(function(req, res){

            // Insert new passenger

            var newpassenger=
            {
                name:req.body.name,
                email:req.body.email,
                password:req.body.password,
                phone:req.body.phone,
                id:++autoIncrementID
            }
            passengers.push(newpassenger);
            res.sendStatus(201);
        }
    );

router.route('/passenger/:id/') //route to work with specific passenger using an ID (for this case POST doesn't make sense)
    .get(function(req, res){
        var id = req.params.id;  //Read the value of the param defined in the route :id
        //add code that find the passenger with the corresponding id

        passengers.forEach(function(element) {
            if (element.id == id) {
                res.json(element);
                res.end();
            }
        });
    })
    .patch(function(req, res){
        var id = req.params.id;
        if(Object.keys(req.query).length>0) {
            //console.log(req.query);
            passengers.forEach(function(element)
            {
                if (element.id==id) {
                    Object.keys(req.query).forEach(function (qry) {
                        element[qry] = req.query[qry];
                    });
                    // element.color=req.query.color;
                    res.sendStatus(200);
                }
            })
        }
        else
            res.sendStatus(400);
    })
//.put(function(req, res){

//});



// REGISTER OUR ROUTES -------------------------------
// all of our routes will be prefixed with /api
app.use('/api', router);

// START THE SERVER
// =============================================================================
app.listen(port);
console.log('Service running on port ' + port);