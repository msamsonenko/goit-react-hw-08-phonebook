import { NavLink } from 'react-router-dom';

const WelcomeMsg = () => {
  return (
    <>
      <p>
        Welcome to Phonebook please <NavLink to="login">Log in</NavLink> to get
        started. <br />
        Don't have an account? Please <NavLink to="register">Sign up</NavLink>
      </p>
    </>
  );
};

export default WelcomeMsg;
