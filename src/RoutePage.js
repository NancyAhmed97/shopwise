import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Home from './Pages/Home';

function RoutePage() {
    return (
        <Routes>
            <Route path='/' element={<Home />} />

        </Routes>
    )
}

export default RoutePage
