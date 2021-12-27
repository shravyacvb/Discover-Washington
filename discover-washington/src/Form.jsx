import { useState } from 'react';
import { fetchRegister } from './fake-services';
import Navigation from './Navigation';

function Form(props) {
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

        let name = document.getElementById('name').value;
        empty = (name === null || name.match(/^ *$/) !== null);
        if (empty === true) {
            errors.push("name can't be empty");
        }

        let email = document.getElementById('email').value;

        setGenericError(false);
         setErrors(errors);
        if (errors.length === 0) {
            fetchRegister({ username: username, password: password, access: 'user', profile: { email: email, name: name } })
            .then(response => {
              props.setPage('LoginForm');
            })
            .catch(error => {
                setGenericError(true);
            });
           
        }
    }

    return (
      <div className="form-container">
        <div className="create-account">
            <h1>Thank you for choosing to register with us!</h1>
            <p>You've taken the first step towards getting all the exclusive news and updates</p>
            <p>Please fill in your deatils below and we'll ready!</p>
        </div>

        <form id="form" action="/form" method="POST" onSubmit={handleSubmit}>

            {errors.map((error) => (
                <p className="p-required" key={error}>Error: {error}</p>
            ))}
            {genericError && <p className="p-required" id="userIdAlreadyExists" key="User already Exists">User already exists</p> }

          <fieldset>
            <div className="label-input">
              <label className="required" htmlFor="name">Name</label>
              <input type="text" placeholder="Name" name="name" id="name"/>
            </div>

            <div className="label-input">
                <label className="required" htmlFor="username">Username</label>
                <input type="text" placeholder="Username" name="username" id="username" />
            </div>

            <div className="label-input">
              <label className="required" htmlFor="password">Password</label>
              <input type="password" placeholder="Password" name="password" id="password" />
            </div>

            <div className="label-input">
              <label className="required" htmlFor="email">Email</label>
              <input type="email" placeholder="Email" name="email" id="email"/>
            </div>

            <button id="submit-button" className="button-style" type="submit">Submit</button>
            <p className="p-required">* <span>required field</span></p>
          </fieldset>  

        </form>

        <div className="signup">
          <p>Existing User?</p>
          <p>Go ahead and log yourself in the site!</p>
        </div>

        <Navigation page={props.page} setPage={props.setPage}/>
      </div>
      
    );
}

export default Form;