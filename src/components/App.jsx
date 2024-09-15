import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import 'index.css';
import ContactForm from './ContactForm';
import ContactList from './ContactList';
import Filter from './Filter';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    // Încărcăm contactele din localStorage la inițializarea aplicației
    const savedContacts = localStorage.getItem('contacts');
    return savedContacts
      ? JSON.parse(savedContacts)
      : [
          { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
          { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
          { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
          { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
        ];
  });
  const [filter, setFilter] = useState('');

  useEffect(() => {
    // Salvăm contactele în localStorage ori de câte ori acestea se modifică
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    // Verifică dacă contactul există deja
    const contactExists = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      alert(`${name} is already in contacts.`);
      return;
    }

    // Adaugă contactul nou
    const newContact = {
      id: nanoid(),
      name,
      number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const deleteContact = contactId => {
    // Șterge contactul după id
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const changeFilter = event => {
    setFilter(event.target.value);
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8 space-y-6">
        <h1 className="text-4xl font-bold text-center text-teal-600">
          Phonebook
        </h1>
        <ContactForm onSubmit={addContact} />

        <div className="mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Contacts
          </h2>
          <Filter value={filter} onChange={changeFilter} />
          <ContactList
            contacts={visibleContacts}
            onDeleteContact={deleteContact}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
