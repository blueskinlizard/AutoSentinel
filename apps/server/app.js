const express = require("express");
const session = require("express-session");
const passport = require("passport");
const dotenv = require("dotenv");
const cors = require("cors");
const http = require("http"); 
const { Server } = require("socket.io");

const camera_routes = require("./routes/camera_routes");
const dashboard_routes = require("./routes/dashboard_routes");
const incident_routes = require("./routes/incident_routes");
const user_routes = require("./routes/user_routes");
const sharing_routes = require("./routes/sharing_routes");



dotenv.config();

const app = express();
const PORT = 8080;

const server = http.createServer(app);
app.use(session({
  secret: process.env.SECRET_PASSWORD || "default secret",
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,  
    sameSite: "lax"
  }
}));

const corsOptions = {
  origin: 'http://localhost:5173',
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE']
};
app.use(cors(corsOptions));

app.use(express.json()); 
app.use(express.urlencoded({ extended: false }));

app.use(passport.initialize());
app.use(passport.session());

app.use('/api/', camera_routes);
app.use('/api/', dashboard_routes);
app.use('/api/', incident_routes);
app.use('/api/', user_routes);
app.use('/api/', sharing_routes);



server.listen(PORT, () => {
  console.log(`App running on port ${PORT}`);
});

