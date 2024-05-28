import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PowerBIDashboard from './PowerBIDashboard';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home'; // Assuming you have a Home component
import Profile from './Profile'; // Assuming you have a Profile component
import './App.css'; // Import the updated CSS

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar />
                <div className="container">
                    <Routes>
                        <Route path="/powerbi" element={<PowerBIDashboard />} />
                        <Route path="/" element={<Home />} />
                        <Route path="/profile" element={<Profile />} />
                        {/* Add other routes here */}
                    </Routes>
                </div>
                <Footer />
            </div>
        </Router>
    );
}

export default App;


