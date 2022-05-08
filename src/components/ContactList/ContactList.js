import {
  ContactListContainer,
  ContactListItem,
  ContactListBtn,
  ContactListName,
  ContactListNumber,
} from './ContactList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { remove } from 'redux/actions';

import PropTypes from 'prop-types';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filterValue = useSelector(state => state.contacts.filter);

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
            <ContactListNumber>{contact.number}</ContactListNumber>
            <ContactListBtn
              type="button"
              onClick={() => dispatch(remove(contact.id))}
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
