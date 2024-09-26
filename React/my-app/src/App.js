import './App.css';
import React, { useState } from 'react';
// import FormComponent from './components/objects/formComponent';
// import DisplayComponent from './components/objects/DisplayComponent';
// import CounterComponent from './components/hooks/Counter';
import FormComponent from './components/objects/FormML';
import DisplayComponent from './components/objects/Display';
import Counter from './components/hooks/Counter'

function App() {
  const [formData, setFormData] = useState(null);

  const handleFormSubmit = (data) => {
    setFormData(data);
  };

  return (
    <div>
      {/* <CounterComponent/> */}
      <Counter />
      <h1>React Form Example / Mad Lib</h1>
      <FormComponent onSubmit={handleFormSubmit} />
      {formData && <DisplayComponent data={formData} />}
    </div>
  );
}

export default App;

