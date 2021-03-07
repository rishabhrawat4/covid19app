import React from 'react';
import DataMap from './Datamap';
import Infecteddata from './Infecteddata';

class App extends React.Component{
    
    render()
    {
        return (
            <div className="ui container" style={{ marginTop: "10px"}}>
                <DataMap />
                <Infecteddata />
                <br />
            </div>
        );
    }
}

export default App;

