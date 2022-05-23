import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAddContactMutation } from 'redux/api/contacts';
// import { addContact } from 'redux/operations';

import {
  ContactFormContainer,
  ContactFormLabel,
  ContactFormInput,
  ContactFormBtn,
} from './ContactForm.styled';

export default function ContactForm() {
  const [addContact] = useAddContactMutation();
  // const dispatch = useDispatch();
  // const contacts = useSelector(
  //   state => state.contactsApi.queries['getAllContacts(undefined)'].data
  // );
  // console.log(contacts);

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleInputChange = e => {
    const { name } = e.target;

    switch (name) {
      case 'name':
        setName(e.target.value);
        break;
      case 'phone':
        setPhone(e.target.value);
        break;
      default:
        return;
    }
  };
  const onFormSubmit = e => {
    // e.preventDefault();
    // const isUserAdded = contacts.find(contact => contact.name === name);
    // if (isUserAdded) {
    //   return alert(`User ${name} is already in contacts`);
    // }
    // useAddContactMutation({ name, phone });
    addContact({ name, phone });
    reset();
  };

  const reset = () => {
    setName('');
    setPhone('');
  };
  return (
    <ContactFormContainer onSubmit={onFormSubmit}>
      <ContactFormLabel>Name</ContactFormLabel>
      <ContactFormInput
        type="text"
        name="name"
        value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleInputChange}
        aoutocomplete="off"
      />
      <ContactFormLabel>Phone</ContactFormLabel>
      <ContactFormInput
        type="tel"
        name="phone"
        value={phone}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleInputChange}
      />
      <ContactFormBtn type="submit">Add Contact</ContactFormBtn>
    </ContactFormContainer>
  );
}
