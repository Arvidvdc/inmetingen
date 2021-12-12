// Required dependencies
const   express             = require("express"),
        app                 = express(),
        os                  = require('os');

// User dependencies
const   User                = require("./models/user"),
        mongoose            = require("mongoose"),
        passport            = require("passport"),
        bodyParser          = require("body-parser"),
        methodOverride      = require("method-override"),
        LocalStrategy       = require("passport-local");

// Route dependencies
const   indexRoutes         = require("./routes/index"),
        nawRoutes           = require("./routes/naw");

// dotENV
require('dotenv').config();
let appIP       = "",
    appPort     = "",
    appDB       = "",
    appMarker   = "";

if(os.hostname()==="SARgE-WORK-III") {
    appIP       = process.env.LOCAL_IP;
    appPort     = process.env.LOCAL_PORT;
    appDB       = process.env.DB_URL_DEVELOPMENT;
    appMarker   = "DEV"
} else {
    appIP       = process.env.SERVER_IP;
    appPort     = process.env.SERVER_PORT;
    appDB       = process.env.DB_URL;
    appMarker   = "LIVE"
}

// Passport Configuration
app.use(require("express-session")({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());
passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// Express variables
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method"));

// Database connection
mongoose.connect(appDB, {}).then(
        () => {
            console.log('Database is connected') },
        err => { console.log('Can not connect to the database'+ err)}
    );

// Middleware
app.use((req,res,next)=>{
    res.locals.appMarker = appMarker;
    next();
});

// Routes
app.use(indexRoutes),
app.use("/naw", nawRoutes);

// Listener
app.listen(appPort, appIP, ()=>console.log("InmetingTool \nStarted on: " + appIP + "\n      port: " + appPort ));