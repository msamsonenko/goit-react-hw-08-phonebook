import { lazy, Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from './HomePage/HomePage';
import WelcomeMsg from 'components/WelcomeMsg';
import LogIn from 'components/LogIn';
import SignUp from 'components/SignUp';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import Auth from './Auth';

import { useSelector } from 'react-redux';

export default function App() {
  const filterValue = useSelector(state => state.contacts.filter);
  const normalizedText = filterValue.toLowerCase();

  return (
    <div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <Routes>
          <Route path="/" element={<HomePage />}>
            <Route index element={<WelcomeMsg />} />
            <Route
              path="contacts"
              element={<ContactList filterValue={normalizedText} />}
            />
            <Route path="login" element={<LogIn />} />
            <Route path="register" element={<SignUp />} />
          </Route>
        </Routes>
      </Suspense>
      {/* <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
       */}
    </div>
  );
}
