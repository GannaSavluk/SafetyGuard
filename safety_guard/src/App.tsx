import React from 'react';
import { Route, Routes, BrowserRouter } from 'react-router-dom';

import './App.css';

import Constructor from './pages/Constructor/Constructor';
import Quiz from './pages/Quiz/Quiz';

function App() {
    return (
        <BrowserRouter basename="/">
            <Routes>
                <Route path="/constructor" element={<Constructor />} />
                <Route path="/quiz" element={<Quiz />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
