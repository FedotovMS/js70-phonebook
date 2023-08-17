import React, { Component } from 'react';
import { nanoid } from 'nanoid';

class Phonebook extends Component {
  state = {
    name: '',
    number: '',
  };

  handleInputChange = e => {
    const { name, value } = e.currentTarget;

    this.setState({
      [name]: value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.addContact({
      name: this.state.name,
      number: this.state.number,
    });

    this.setState({
      name: '',
      number: '',
    });
  };

  uniqueId = nanoid();

  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor={this.uniqueId}>
            Name:
            <input
              id={this.uniqueId}
              type="text"
              name="name"
              value={this.state.name}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <label htmlFor={this.uniqueId}>
            Number:
            <input
              type="tel"
              name="number"
              value={this.state.number}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
              onChange={this.handleInputChange}
            />
          </label>
          <button type="submit">Add contact</button>
        </form>
      </>
    );
  }
}

export default Phonebook;
