import React from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './HomePage';
import BookDemoForm from './components/BookDemoForm';
import EnrollNowForm from './components/EnrollNowForm';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/book-demo" element={<BookDemoForm />} />
      <Route path="/enroll-now" element={<EnrollNowForm />} />
    </Routes>
  );
}

export default App;
