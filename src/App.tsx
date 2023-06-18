import React from 'react';
import './App.sass';
import Date from './components/Date';
import Form from './components/Form';

function App() {
  return (
    <div className="lista">
      {/*Fecha*/}
      <Date />
      {/*form*/}
      <Form />
    </div>
  );
}

export default App;
