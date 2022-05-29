import { useState } from 'react';
import { PageHeader, Form, Label, Input, Button } from './LogIn.styled';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
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
    console.log(email, password);
    //   addContact({ email, password });
    reset();
  };

  const reset = () => {
    setEmail('');
    setPassword('');
  };
  return (
    <>
      <PageHeader>Log In</PageHeader>
      <Form onSubmit={onFormSubmit}>
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
        <Button type="submit">Log in</Button>
      </Form>
    </>
  );
};

export default LogIn;
