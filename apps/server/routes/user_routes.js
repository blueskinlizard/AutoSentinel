const db = require("../prisma_queries/queries.js")
const express = require('express')
const passport = require('../authentication/passport_login.js')

const router = express.Router();

router.post("/user_login", async(req, res, next)=>{3
    try{
        passport.authenticate('local_signin', async (err, user, info) =>{
            if (err) { 
                console.error("Authentication error:", err);
                return res.status(500).json({message: `Authentication error: ${err.message}`});
            };
            console.log("Passport authenticate result:", { 
                err: err ? err.message : null, 
                userExists: !!user, 
                info: info ? info.message : null 
            });
            if(!user){ 
                return res.status(400).json({message: info?.message || "Login failed, absence of user from passport middleware"});
            }
            req.logIn(user, (err) =>{
                if (err) { return next(err); }
                return res.status(200).json({message: "User logged in successfully", user: user})
        })
    })(req, res, next);
  }catch(err){
    return res.status(500).json({message: "Error in login route, error: " + err});
  }    
})

router.post("/user_signup", async(req, res, next)=>{
    try{
    
        passport.authenticate('local_signup', async (err, user, info) =>{
            if (err) { return next(err); }
            console.log("Passport authenticate result:", { 
                err: err ? err.message : null, 
                userExists: !!user, 
                info: info ? info.message : null 
            });
            if(!user){ 
                return res.status(400).json({message: info?.message || "Login failed, absence of user from passport middleware"});
            }
            req.logIn(user, (err) => { //Repeat functionality
                if(err) {return next(err)}
                return res.status(200).json({message: "User signed up successfully", user: user});
            })
        })(req, res, next)
    }catch(err){
        return res.status(500).json({message: "Error in signup route, error: " + err});
    }
})

module.exports = router;