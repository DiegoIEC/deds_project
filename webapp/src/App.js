import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PowerBIDashboard from './PowerBIDashboard';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route path="/powerbi" element={<PowerBIDashboard />} />
                    {/* Add other routes here */}
                </Routes>
            </div>
        </Router>
    );
}

export default App;

