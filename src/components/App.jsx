import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import Phonebook from './Phonebook/Phonebook';
import ContactList from 'components/ContactsList/ContactsList';
import Filter from './Filter/Filter';

class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = data => {
    const newContact = {
      id: nanoid(),
      ...data,
    };

    this.setState(prevState => {
      const contactExists = prevState.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      );

      if (!contactExists) {
        return {
          contacts: [newContact, ...prevState.contacts],
        };
      }

      return prevState;
    });
  };

  handleDelete = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  handleFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getFilteredContacts = () => {
    const { filter, contacts } = this.state;

    const normalizedContacts = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedContacts)
    );
  };

  render() {
    const filteredContacts = this.getFilteredContacts();
    const { contacts, filter } = this.state;
    return (
      <div>
        <Phonebook addContact={this.addContact} />
        {contacts.length ? (
          <div>
            <h2>Contacts</h2>
            <Filter filter={filter} onChange={this.handleFilter} />
            <ContactList
              contacts={filteredContacts}
              onDelete={this.handleDelete}
            />
          </div>
        ) : (
          <p>No contacts added yet</p>
        )}
      </div>
    );
  }
}

export default App;
