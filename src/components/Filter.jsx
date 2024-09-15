import React from 'react';

const Filter = ({ value, onChange }) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 font-medium mb-2">
        Find contacts by name
      </label>
      <input
        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Search contacts..."
      />
    </div>
  );
};

export default Filter;
