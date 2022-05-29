import { useState } from 'react';
import { PageHeader, Form, Label, Input, Button } from './SignUp.styled';
import { useAddUserMutation } from 'redux/api/users';

const SignUp = () => {
  const [addUser] = useAddUserMutation();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    e.preventDefault();
    console.log(email, password, name);
    addUser({ name, email, password });
    reset();
  };

  const reset = () => {
    setName('');
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <PageHeader>Sign Up</PageHeader>
      <Form onSubmit={onFormSubmit}>
        <Label>Name</Label>
        <Input
          type="text"
          name="name"
          value={name}
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Label>Email</Label>
        <Input
          type="text"
          name="email"
          value={email}
          required
          onChange={handleInputChange}
          autoComplete="off"
        />
        <Label>Password</Label>
        <Input
          type="text"
          name="password"
          value={password}
          required
          onChange={handleInputChange}
        />
        <Button type="submit">Sign up</Button>
      </Form>
    </>
  );
};
export default SignUp;
