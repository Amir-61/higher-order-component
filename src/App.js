import React from 'react';
import {Routes, Route} from 'react-router-dom'

import Users from './components/users-component';
import Posts from './components/posts-component';


function App() {
  return (
    <div className='App'>
      <Routes>
        <Route exact path="/users" element={<Users dataSource='https://jsonplaceholder.typicode.com/users' />} />
        <Route exact path="/posts" element={<Posts dataSource='https://jsonplaceholder.typicode.com/posts' />} />
      </Routes>
      
    </div>
  );
}

export default App;