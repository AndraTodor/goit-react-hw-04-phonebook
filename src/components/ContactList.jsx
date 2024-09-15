import React from 'react';
import ContactListItem from './ContactListItem';

const ContactList = ({ contacts, onDeleteContact }) => {
  return (
    <ul className="flex flex-col gap-4">
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDeleteContact}
        />
      ))}
    </ul>
  );
};

export default ContactList;
