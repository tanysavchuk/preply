import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main';
import ZeroConditional from './pages/zero-conditional';
import EnglishClasses from './pages/english-classes';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="zero-conditional" element={<ZeroConditional />} />
      <Route path="english-classes" element={<EnglishClasses />} />
    </Routes>
  );
}
