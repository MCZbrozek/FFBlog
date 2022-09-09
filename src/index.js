import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
    BrowserRouter,
    Routes,
    Route
 } from 'react-router-dom';
import './index.css';
import App from './App';
import Allposts from "./components/Allposts";
import Onepost from "./components/Onepost"
import Author from './components/Author';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<App />} />
            <Route path="Allposts" element={<Allposts/>}/>
            <Route path="/:slug" element={<Onepost/>} />
            <Route path="/:slug" element={<Author/>} />
    </Routes>
    </BrowserRouter>
);

