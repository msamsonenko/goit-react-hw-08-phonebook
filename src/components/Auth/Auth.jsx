import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import { useState } from 'react';

const Auth = () => {
  const [logIn, setLogIn] = useState(false);

  const toggleSwitch = () => {
    setLogIn(!logIn);
  };
  return (
    <>
      <p>this is auth container</p>
      <button onClick={toggleSwitch}>switch</button>
      {logIn ? <LogIn /> : <SignUp />}
    </>
  );
};
export default Auth;
