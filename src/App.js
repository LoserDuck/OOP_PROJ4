import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // BrowserRouter 추가

import Main from './pages/Main';
import Example from './pages/Example';
import NoticePage from './pages/NoticePage';
import Login from './pages/Login';
import CreatePage from './pages/CreatePage';

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path='/login' element={<Login/>}/>
          <Route path="/1" element={<Example/>}/>
          <Route path="/:tag/:num" element={<NoticePage></NoticePage>}/>
        </Routes>
      </Router>
    </div>
  );
};

export default App;
