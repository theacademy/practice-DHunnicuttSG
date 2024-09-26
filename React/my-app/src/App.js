import './App.css';
import React, { useState } from 'react';
import FormComponent from './components/test/formComponent';
import DisplayComponent from './components/test/DisplayComponent';

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      <h1>React Form Example</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      {formData && <DisplayComponent data={formData} />}
    </div>
  );
}

export default App;

