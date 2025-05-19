const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require('../prisma_queries/queries');
const bcrypt = require('bcryptjs');

passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            console.log("Username tried: " +username) //dev purposes
            const user = await db.findUserByName(username);
            if(!user){
                return done(null, false, { message: 'Incorrect or missing username' });
            }
            const match = await bcrypt.compare(password, user.password);
            if(!match){
                return done(null, false, { message: 'Incorrect password from user' });
            }
            return done(null, user);
        }catch(err){
            return done(err);
        }
    }
))
passport.use('local-signup', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try{
            // const presentUser = await db.findUserByName(username);
            if(presentUser){
                return done(null, false, { message: 'User already exists, cannot create new account' });
            }
            const hashedPassword = await bcrypt.hash(password, 10); 
            // const user = await db.createUser(username, hashedPassword);
            return done(null, user)
        }catch(err){
            return done(err);
        }
    }
))

passport.serializeUser((user, done) =>{ 
    done(null, user.id); 
})
passport.deserializeUser(async(id, done) =>{
    try{
        // const user = await db.findUserById(id);
        done(null, user)
    }catch(err){
        done(err);
    }
})

module.exports = passport