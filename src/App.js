import React from 'react';
import { Routes, Route } from "react-router-dom"
import AllPosts from './components/AllPosts.js';
import OnePost from './components/OnePost.js';

function App() {
  return (
    <div className="App">
    <Routes>
      <Route component={AllPosts} path= "/" exact />
      <Route component={OnePost} path= "/:slug" />      
    </Routes>
    </div>
  );
}

export default App;
