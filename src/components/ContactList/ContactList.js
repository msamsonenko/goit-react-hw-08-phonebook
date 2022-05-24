import {
  ContactListContainer,
  ContactListItem,
  ContactListBtn,
  ContactListName,
  ContactListNumber,
} from './ContactList.styled';
import {
  useGetAllContactsQuery,
  useDeleteContactMutation,
} from 'redux/api/contacts';

const ContactList = ({ filterValue }) => {
  const { data, isLoading } = useGetAllContactsQuery();
  const [deleteContact] = useDeleteContactMutation();

  const filteredContacts =
    isLoading ||
    data.filter(contact => contact.name.toLowerCase().includes(filterValue));

  return (
    <ContactListContainer>
      {isLoading ||
        filteredContacts.map(contact => {
          return (
            <ContactListItem key={contact.id}>
              <ContactListName>{contact.name}</ContactListName>
              <ContactListNumber>{contact.phone}</ContactListNumber>
              <ContactListBtn
                type="button"
                onClick={() => deleteContact(contact.id)}
              >
                Delete
              </ContactListBtn>
            </ContactListItem>
          );
        })}
    </ContactListContainer>
  );
};

export default ContactList;
