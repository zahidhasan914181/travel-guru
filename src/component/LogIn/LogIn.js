import React, { useState } from 'react';
import fb from './img/fb.png';
import google from './img/google.png';
import { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './LoginManager';
import './LogIn.css'

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
      isSignedIn: false,
      name: '',
      email: '',
      password: '',
      photo: ''
    });
  
    initializeLoginFramework();
  
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
  
    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }
  
    const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          handleResponse(res, true);
        })
  
    }
  
    const signOut = () => {
        handleSignOut()
        .then(res => {
            handleResponse(res, false);
        })
    }
  
    const handleResponse = (res, redirect) =>{
      setUser(res);
      setLoggedInUser(res);
      if(redirect){
          history.replace(from);
      }
    }
  
    const handleBlur = (e) => {
      let isFieldValid = true;
      if(e.target.name === 'email'){
        isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      }
      if(e.target.name === 'password'){
        isFieldValid = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/.test(e.target.value);
      }
      if(isFieldValid){
        const newUserInfo = {...user};
        newUserInfo[e.target.name] = e.target.value;
        setUser(newUserInfo);
      }
    }
    const handleSubmit = (e) => {
      if(newUser && user.email && user.password){
        createUserWithEmailAndPassword(user.name, user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
  
      if(!newUser && user.email && user.password){
        signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          handleResponse(res, true);
        })
      }
      e.preventDefault();
    }
  
  
  
    return (
        <div className="container form">
            <div className="row">
                <div className="col-md-6">
                    <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id=""/>
                    <label htmlFor="newUser">New User Sign up</label>
                    <form onSubmit={handleSubmit}>
                      {newUser && <input className="form-control" name="name" type="text" onBlur={handleBlur} placeholder="Your name" required/>}
                      <input className="form-control" type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required/>
                      <input className="form-control" type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required/>
                      <input className="btn btn-warning w-100 button" type="submit" value={newUser ? 'Sign up' : 'Sign in'}/>
                    </form>
                    <p style={{color: 'red'}}>{user.error}</p>
                    { user.success && <p style={{color: 'green'}}>User { newUser ? 'created' : 'Logged In'} successfully</p>}
                      </div>
                      <div className="col-md-6">
                      <h4>Create account with</h4>
                          <div className="social">
                                  { user.isSignedIn ? <button className="btn social-signin w-100" onClick={signOut}>Sign Out</button> :
                              <button className="btn social-signin w-100" onClick={googleSignIn}><img src={google} alt=""/>Sign In</button>
                            }
                            <br/>
                            <button className="btn social-signin w-100" onClick={fbSignIn}><img src={fb} alt=""/>Sign in using Facebook</button>
                            {
                              user.isSignedIn && <div>
                                <p>Welcome, {user.name}!</p>
                                <p>Your email: {user.email}</p>
                                <img src={user.photo} alt=""/>
                              </div>
                            }
                          </div>
                        </div>
                    </div>
                </div>
    );
  }

export default LogIn;