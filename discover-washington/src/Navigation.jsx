import { fetchLogout } from './fake-services';

function Navigation(props) {

    function navigateTo(event, target) {
        if (target === 'Logout'){
                 fetchLogout()
                .then(response => {
                    props.user.name = '';
                    props.user.username = '';
                    props.user.email = '';
                    props.setPage('LoginForm');
                })
        }
        props.setPage(target);
      }

    return (
        <nav>
           {props.page === "LoginForm" && 
                <div className="d-flex-col">
                    <a href="#SignupForm">
                        <button className="signup-btn" onClick={ (event) => navigateTo(event,'SignupForm')}>Signup</button>
                    </a>
                    <a href="#Home">
                        <button className="guest-login" onClick={ (event) => navigateTo(event,'Home')}>Continue as guest?</button>
                    </a>
                </div>
            }

            {props.page === "SignupForm" && 
                <div className="d-flex-col">
                    <a href="#LoginForm">
                        <button className="signup-btn" onClick={ (event) => navigateTo(event,'LoginForm')}>Login</button>
                    </a>
                    <a href="#Home">
                        <button className="guest-login" onClick={ (event) => navigateTo(event,'Home')}>Continue as guest?</button>
                    </a>
                </div>
            }
            
            {props.page !== "LoginForm" && props.page !== "SignupForm" && 
            <ul className={`menu-bar ${props.isActive ? "active" : ""}`}>
                <li>
                    <a href="#Home" onClick={ (event) => navigateTo(event,'Home')}>About Us</a>
                </li>
                <li>
                    <a href="#Gallery" onClick={ (event) => navigateTo(event,'Gallery')}>Gallery</a>
                </li>
                <li>
                    <a href="#Experiences" onClick={ (event) => navigateTo(event,'Experiences')}>Experiences</a>
                </li>
                {props.user.username !== '' &&
                    <li>
                        <a href="#LoginForm" onClick={(event) => navigateTo(event, 'LoginForm')}>Logout</a>
                    </li>}
                {props.user.username === '' &&
                    <li>
                        <a href="#LoginForm" onClick={(event) => navigateTo(event, 'LoginForm')}>Login</a>
                    </li>}
            </ul>}
        </nav>
    );
}

export default Navigation;