import React, { useState, useEffect } from 'react' ;

// Edit Contact
      const EditContact = ({ contact }) => {
      const [formData, setFormData] = useState({});

      const handleSubmit = (event) => {
         event.preventDefault();
        
 // Update contact in state
        
     setContacts((prevContacts) =>
       prevContacts.map((prevContact) =>
       prevContact.id === contact.id ? formData : prevContact
      )
    );
  };

      return (
    
  );
};
