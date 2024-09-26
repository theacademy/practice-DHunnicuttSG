import React, { useState } from 'react';

function FormComponent({ onSubmit }) {
  const [formData, setFormData] = useState({ 
    noun1: '', 
    adj1: '',
    noun2: '',
    number: '',
    adj2: '',
    pluralNoun1: '',
    pluralNoun2: '',
    pluralNoun3: '',
    verbPresTense: '',
    sameVerbPastTense: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Noun 1:</label>
        <input type="text" 
        name="noun1" 
        value={formData.noun1} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Adjective 1:</label>
        <input type="text" 
        name="adj1" 
        value={formData.adj1} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Noun 2:</label>
        <input type="text" 
        name="noun2" 
        value={formData.noun2} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Number:</label>
        <input type="text" 
        name="number" 
        value={formData.number} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Adjective 2:</label>
        <input type="text" 
        name="adj2" 
        value={formData.adj2} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Plural Noun:</label>
        <input type="text" 
        name="pluralNoun1" 
        value={formData.pluralNoun1} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Plural Noun:</label>
        <input type="text" 
        name="pluralNoun2" 
        value={formData.pluralNoun2} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Plural Noun:</label>
        <input type="text" 
        name="pluralNoun3" 
        value={formData.pluralNoun3} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Verb Present Tense:</label>
        <input type="text" 
        name="verbPresTense" 
        value={formData.verbPresTense} 
        onChange={handleChange} />
      </div>
      <div>
        <label>Same Verb Past Tense:</label>
        <input type="text" 
        name="sameVerbPastTense" 
        value={formData.sameVerbPastTense} 
        onChange={handleChange} />
      </div>
      <br></br>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormComponent;
