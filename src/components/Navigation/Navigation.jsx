import { Link } from './Navigation.styled';

const Navigation = () => {
  return (
    <>
      <nav>
        <Link to="login">Log in</Link>
        <Link to="register">Sign up</Link>
      </nav>
    </>
  );
};
export default Navigation;
