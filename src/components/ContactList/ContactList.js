import {
  ContactListContainer,
  ContactListItem,
  ContactListBtn,
  ContactListName,
  ContactListNumber,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from 'redux/operations';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

  useEffect(() => {
    console.log('this is useEffect');
    dispatch(fetchContacts());
  }, [dispatch]);

  const normalizedText = filterValue.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedText)
  );

  return (
    <ContactListContainer>
      {filteredContacts.map(contact => {
        return (
          <ContactListItem key={contact.id}>
            <ContactListName>{contact.name}</ContactListName>
            <ContactListNumber>{contact.phone}</ContactListNumber>
            <ContactListBtn
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </ContactListBtn>
          </ContactListItem>
        );
      })}
    </ContactListContainer>
  );
};

ContactList.propTypes = {
  contacts: PropTypes.array,
  onDeleteContact: PropTypes.func,
};

export default ContactList;
