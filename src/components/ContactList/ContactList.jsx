import { useSelector } from 'react-redux';

import ContactItem from 'components/ContactItem/ContactItem';

import {
  ContactListContainer,
  ContactsList,
  ContactNotification,
} from 'components/ContactList/ContactList.styled';

const ContactList = () => {
  const contacts = useSelector(state => state.contacts.directory);

  const filter = useSelector(state => state.filter.filter);

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <ContactListContainer>
      {contacts.length !== 0 ? (
        <ContactsList>
          {getFilteredContacts().map(({ id, name, number }) => (
            <ContactItem key={id} id={id} name={name} number={number} />
          ))}
        </ContactsList>
      ) : (
        <ContactNotification>
          You don't have any contacts in your phonebook
        </ContactNotification>
      )}
    </ContactListContainer>
  );
};

export default ContactList;
