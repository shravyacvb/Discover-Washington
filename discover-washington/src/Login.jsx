import LoginForm from './LoginForm';
import logo1 from './img/DW_Text.jpg';
import SignupForm from './Form';
import { useState } from 'react';
import Home from './Home';

function Login() {

    const defaultPage = document.location.hash.replace('#','');
    const [page, setPage] = useState(defaultPage || 'LoginForm');
    const [user, setUser] = useState({name:'', username:'', email:''});

    return (
        <div>
            {(page !== "Home" && page !== "Gallery" && page !== "Experiences" && page !== "Profile") && <div className="login-page">
            <div className="split left"></div>
            
            <img src={logo1} alt="Discover Washington Logo" className="login-logo d-logo" />
                
            <div className="split right">
                {page === "LoginForm" &&  <div className="login-box">
                        <LoginForm page={page} setPage={setPage} user={user} setUser={setUser}/>
                    </div>}
                {page === "SignupForm" && <SignupForm page={page} setPage={setPage}/>}
                </div>
            </div>}

            {(page === "Home" || page === "Gallery" || page === "Experiences" || page === "Profile") && <Home page={page} setPage={setPage} user={user} setUser={setUser}/>}
        </div>
    );
}

export default Login;