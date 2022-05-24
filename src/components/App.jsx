import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';
import { useSelector } from 'react-redux';

export default function App() {
  const filterValue = useSelector(state => state.contacts.filter);
  const normalizedText = filterValue.toLowerCase();

  return (
    <div>
      <h1>Phonebook</h1>
      <ContactForm />
      <Filter />
      <ContactList filterValue={normalizedText} />
    </div>
  );
}
