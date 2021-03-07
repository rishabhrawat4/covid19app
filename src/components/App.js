import React from 'react';
import DataMap from './Datamap';
import Infecteddata from './Infecteddata';
import './App.css';

class App extends React.Component{
    
    render()
    {
        return (
            <div className="container">
                <nav class="navbar">
                    <span class="navbar-brand mb-0 h1">Covid19 Map Visualizer</span>
                </nav>
                <br />
                <DataMap />
                <br />
                <Infecteddata />
                <br />
            </div>
        );
    }
}

export default App;

