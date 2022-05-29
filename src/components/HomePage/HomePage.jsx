import { Outlet, NavLink } from 'react-router-dom';
import { Container } from './HomePage.styled';
// import WelcomeMsg from 'components/WelcomeMsg';
// import { useState } from 'react';

import Navigation from 'components/Navigation';

const HomePage = () => {
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  // const toggleLoggedIn = () => {
  //   setIsLoggedIn(!isLoggedIn);
  // };
  return (
    <>
      <Container>
        <h1>
          <NavLink to="/">Phonebook</NavLink>
        </h1>
        <Navigation />
      </Container>
      {/* <button type="button" onClick={toggleLoggedIn}>
        toggle
      </button>
      {isLoggedIn || <WelcomeMsg />} */}

      <Outlet />
    </>
  );
};

export default HomePage;
