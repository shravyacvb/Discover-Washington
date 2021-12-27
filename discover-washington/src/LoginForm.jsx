import Navigation from './Navigation';
import { useState } from 'react';
import { fetchLogin } from './fake-services';

function LoginForm(props) {
    let [errors, setErrors] = useState([]);
    let [genericError, setGenericError] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        errors = [];
        let username = document.getElementById('username').value;
        let empty = (username === null || username.match(/^ *$/) !== null);

        if (empty === true) {
            errors.push("Username can't be empty");
        }

        let password = document.getElementById('password').value;
        empty = (password === null || password.match(/^ *$/) !== null);

        if (empty === true) {
            errors.push("password can't be empty");
        }

        setErrors(errors);

        if (errors.length === 0) {
                fetchLogin(username)
                .then(response => {
                    let user = { name: response.profile.name.toString(), username: response.username.toString(), email: response.profile.email.toString() }
                    props.user.name = user.name;
                    props.user.username = user.username;
                    props.user.email = user.email;
                    props.setPage('Home');
               })
                .catch(error => {
                    setGenericError(true);
                    document.getElementById('genericErrorId').innerHTML = error.error;
                });
        }
    }

    return (
      <div className="form-container">
          <div className="create-account">
              <h1>Welcome to Discover Washington!</h1>
              <p>Please enter your username and password</p>
          </div>
          <form id="form" action="/form" method="POST" onSubmit={handleSubmit}>

              {errors.map((error) => (
                  <p className="p-required" key={error}>Error: {error}</p>
              ))}
            {genericError && <p className="p-required" id="genericErrorId" key="User already Exists">User already exists</p>}

           <fieldset>
              <div className="label-input">
                <label className="required" htmlFor="username">Username</label>
                <input type="text" name="username" id="username" />
              </div>

              <div className="label-input">
                <label className="required" htmlFor="password">Password</label>
                <input type="password" name="password" id="password" />
              </div>

              <button id="submit-button" className="button-style" type="submit">Submit</button>
              <p className="p-required">* <span>required field</span></p>
            </fieldset>  

          </form>

          <div className="signup">
            <p>New to our site?</p>
            <p>Register yourself and take advantage of all the exclusive news and updates! </p>
          </div>

          <Navigation page={props.page} setPage={props.setPage}/>
      </div>
    );
}

export default LoginForm;