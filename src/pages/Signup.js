import React, { useState, useEffect } from 'react';
import back from '../picture/back.png';

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  useEffect(() => {
    const loadGoogleAPI = () => {
      const script = document.createElement('script');
      script.src = 'https://apis.google.com/js/platform.js';
      script.async = true;
      script.defer = true;
      script.onload = () => {
        window.gapi.load('auth2', () => {
          window.gapi.auth2.init({
            client_id: 'your_google_client_id_here'
          }).then(() => {
            console.log('Google API initialized successfully');
          }).catch(error => {
            console.error('Error initializing Google API:', error);
          });
        });
      };
      document.body.appendChild(script);
    };

    loadGoogleAPI();
  }, []);

  const handleGoogleSignUp = async () => {
    try {
      const auth2 = window.gapi.auth2.getAuthInstance();
      const googleUser = await auth2.signIn();
      const profile = googleUser.getBasicProfile();
      const id_token = googleUser.getAuthResponse().id_token;

      const response = await fetch('http://localhost:3001/google-signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          token: id_token,
          username: profile.getName(),
          email: profile.getEmail()
        }),
      });

      const data = await response.json();

      if (response.ok) {
        console.log('User signed up successfully:', data);
        // Handle successful signup (e.g., redirect, update UI)
      } else {
        console.error('Signup failed:', data.message);
      }
    } catch (error) {
      if (error.error === 'popup_closed_by_user') {
        console.log('Sign-up cancelled by user');
      } else {
        console.error('Error during Google sign-up:', error);
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSignup = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('http://localhost:3001/signup', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.message === 'User created successfully') {
        console.log('Signup successful');
        // Handle successful signup (e.g., redirect to login page)
      } else {
        console.error(data.message);
        // Handle signup errors (e.g., display error message)
      }
    } catch (error) {
      console.error('Error during signup:', error);
    }
  };

  return (
    <>
      <div className={`flex justify-center items-center w-[100vw] h-[100vh] bg-[url('${back}')] bg-cover absolute blur brightness-50`}></div>

      <form onSubmit={handleSignup} className='w-[30vw] h-[75vh] rounded-3xl flex flex-col absolute top-[10vh] left-[40vw] bg-white'>
        <h1 className='mt-[8vh] font-semibold my-4 text-xl mx-[3.5vw]'>SIGN UP</h1>
        <input 
          type='text' 
          name="username"
          placeholder='Full Name' 
          value={formData.username}
          onChange={handleChange}
          className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'
        />
        <input 
          type='email' 
          name="email"
          placeholder='Email' 
          value={formData.email}
          onChange={handleChange}
          className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'
        />
        <input 
          type='password' 
          name="password"
          placeholder='Password' 
          value={formData.password}
          onChange={handleChange}
          className='py-[2vh] mb-[2vh] mx-[2.5vw] pl-4 rounded-xl bg-gray-200'
        />
        <button type="submit" className='width-[10vw] mr-[2.5vw] py-3 text-xl mt-[2vh]'>
          Sign up
        </button>
        <div className='flex flex-row rounded-xl border-black border-2 w-[25vw] ml-[2.5vw] mt-2'>
          <div className="mt-6 ml-[5vw]">
            <img src='https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg' alt=''/>
          </div>
          <button type="button" className='width-[10vw] mr-[2.5vw] py-3 text-xl mt-[2vh]' onClick={handleGoogleSignUp}>
            Sign up with Google
          </button>
        </div>
        <a href="/signin" className='text-center mt-1 underline text-black decoration-black'>
          Already Registered? Sign in
        </a>
      </form>
    </>
  );
}

export default Signup;
