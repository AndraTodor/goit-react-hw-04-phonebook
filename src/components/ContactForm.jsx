import React, { useState } from 'react';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleSubmit = event => {
    event.preventDefault();
    if (name && number) {
      onSubmit(name, number);
      setName('');
      setNumber('');
    } else {
      alert('Please fill out both fields.');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="flex flex-col">
        <label htmlFor="name" className="mb-1 text-lg font-medium">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={e => setName(e.target.value)}
          pattern="^[a-zA-Z]+([ '-][a-zA-Z]+)*$"
          title="Name may contain only letters, apostrophe, dash, and spaces."
          required
          className="p-2 border rounded-md"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="number" className="mb-1 text-lg font-medium">
          Number
        </label>
        <input
          type="tel"
          id="number"
          name="number"
          value={number}
          onChange={e => setNumber(e.target.value)}
          pattern="\+?\d{1,4}[-.\s]?\(?\d{1,3}\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses, and can start with +."
          required
          className="p-2 border rounded-md"
        />
      </div>
      <button
        type="submit"
        className="bg-teal-600 text-white p-2 rounded-lg hover:bg-teal-700"
      >
        Add Contact
      </button>
    </form>
  );
};

export default ContactForm;
