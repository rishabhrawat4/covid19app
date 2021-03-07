import React from 'react';
import DataMap from './Datamap';
import Infecteddata from './Infecteddata';
import './App.css';

class App extends React.Component{
    
    render()
    {
        return (
            <div className="container">
                <br />
                <DataMap />
                <br />
                <Infecteddata />
                <br />
                <nav class="navbar">
                    <span class="navbar-brand mb-0 h1">Covid19 Map Visualizer <span className="intro">Created by Rishabh Rawat(2k17/BT/019), Delhi Technological University</span></span>
                </nav>
            </div>
        );
    }
}

export default App;

