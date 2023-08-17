import ContactItem from 'components/ContactsItem/ContactsItem';

const ContactList = ({ contacts, onDelete }) => {
  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
};

export default ContactList;
