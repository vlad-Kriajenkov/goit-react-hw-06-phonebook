import React, { Component } from "react";
import { nanoid } from "nanoid";

import Phonebook from "components/Phonebook/Phonebook";
import Contacts from "components/Contacts/Contacts";
import Filter from "components/Filter/Filter";

export default class App extends Component {
  state = {
    contacts: [
      { id: "id-1", name: "Rosie Simpson", number: "459-12-56" },
      { id: "id-2", name: "Hermione Kline", number: "443-89-12" },
      { id: "id-3", name: "Eden Clements", number: "645-17-79" },
      { id: "id-4", name: "Annie Copeland", number: "227-91-26" },
    ],
    filter: "",
  };

  addContact = ({ name, number }) => {
    const conatactId = nanoid();
    const newContact = {
      id: conatactId,
      name,
      number,
    };

    this.setState(({ contacts }) => ({
      contacts: [...contacts, newContact],
    }));
  };

  removeContact = (idDelete) => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(({ id }) => id !== idDelete),
    }));
  };

  changeFilter = (e) => {
    this.setState({ filter: e.currentTarget.value });
  };

  render() {
    const normalaize = this.state.filter.toLowerCase();

    const vizible = this.state.contacts.filter((contact) =>
      contact.name.toLowerCase().includes(normalaize)
    );

    return (
      <div>
        <Phonebook onSubmit={this.addContact} />
        <Filter value={this.state.filter} onChange={this.changeFilter} />
        <Contacts contacts={vizible} removeContact={this.removeContact} />
      </div>
    );
  }
}
