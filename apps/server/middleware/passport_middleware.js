const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require('../prisma/queries');
const bcrypt = require('bcryptjs');

passport.use('local-signin', new LocalStrategy(
    {
        usernameField: 'username',
        passwordField: 'password'
    },
    async (username, password, done) => {
        try {
            console.log("Username tried: " +username) //dev purposes
            const fetched_user = await db.findUserByName(username);
            if(!fetched_user){
                return done(null, false, { message: 'Incorrect or missing username' });
            }
            const bcrypt_match = await bcrypt.compare(password, fetched_user.password);
            if(!bcrypt_match){
                return done(null, false, { message: 'Incorrect password from user' });
            }
            return done(null, fetched_user);
        }catch(error){
            return done(error);
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
            const fetched_foundUser = await db.findUserByName(username);
            if(fetched_foundUser){
                return done(null, false, { message: 'User already exists, cannot create new account' });
            }
            const hashedPassword = await bcrypt.hash(password, 10); 
            const user = await db.createNewUser(username, hashedPassword);
            return done(null, user);
        }catch(error){
            return done(error);
        }
    }
))

passport.serializeUser((user, done) =>{ 
    done(null, user.id); 
})
passport.deserializeUser(async(id, done) =>{
    try{
        const current_user = await db.findUserById(id);
        console.log("Deserialized user:", current_user);
        done(null, current_user)
    }catch(error){
        done(error);
    }
})

module.exports = passport