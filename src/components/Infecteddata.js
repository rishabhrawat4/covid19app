import React from 'react';
import Finaldata from './Finaldata';
import CoronaData from '../Api/CoronaData';

class Infecteddata extends React.Component {
    state = { Delhidata: {data: 0}, }


    Indiadata = async () => {
        const response = await CoronaData.get('', {})
        console.log(response)
        return response.data;
    }

    render() {
        return (
            <div className="card-deck">
                <Finaldata origin="Delhi" ></Finaldata>
                <Finaldata origin="India" ></Finaldata>
                <Finaldata origin="World"></Finaldata>
            </div>  
        );
    }
}

export default Infecteddata;