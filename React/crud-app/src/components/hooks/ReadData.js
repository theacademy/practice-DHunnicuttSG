import React from 'react';
import useFetchAxios from './useFetchAxios';

const ReadContacts = () => {
  const { data: contacts, loading, error } = useFetchAxios('http://contactlist.us-east-1.elasticbeanstalk.com/contacts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <div>
      <h2>Contact List</h2>
      <table>
        <thead>
          <tr>
            <th>Contact ID</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {contacts.map((contact) => (
            <tr key={contact.contactId}>
              <td>{contact.contactId}</td>
              <td>{contact.firstName}</td>
              <td>{contact.lastName}</td>
              <td>{contact.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReadContacts;
