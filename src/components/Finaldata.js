import React from 'react';
import CoronaData from '../Api/CoronaData';
import './Finaldatacss.css';

class Finaldata extends React.Component {
    state = { data: {}, titleColor: ""};
    origin = this.props.origin;
    componentDidMount = async () => {
        if (this.props.origin == "India") {
            const response = await CoronaData.get('', {
                params: {country: this.props.origin}
            });
            const data = {};
            data.confirmed = (response.data.All.confirmed).toLocaleString();
            data.recovered = (response.data.All.recovered).toLocaleString();
            data.deaths = (response.data.All.deaths).toLocaleString();
            this.setState({ data: data})
            console.log(response.data);
        }
        else if (this.props.origin == "World") {
            const response = await CoronaData.get('', { });
            console.log(response.data);
            var confirmed, recovered, deaths;
            confirmed = recovered = deaths = 0;
            for (var key in response.data)
            {
                confirmed += response.data[key].All.confirmed;
                recovered += response.data[key].All.confirmed;
                deaths += response.data[key].All.deaths;
            }
            const data = {};
            data.confirmed = (confirmed).toLocaleString();
            data.recovered = (recovered).toLocaleString();
            data.deaths = (deaths).toLocaleString()
            this.setState({ data: data})
        }
        else if(this.props.origin == "Delhi"){
            const response = await CoronaData.get('', {
                params: {country: "India"}
            });
            const data = {};
            data.confirmed = (response.data.Delhi.confirmed).toLocaleString();
            data.recovered = (response.data.Delhi.recovered).toLocaleString();
            data.deaths = (response.data.Delhi.deaths).toLocaleString();
            this.setState({ data: data})
            console.log(response.data.Delhi);
            
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.origin}</h5>
                    <p className="card-text">No. of Deaths: <span className="numbers deaths">{this.state.data.deaths}</span> </p>
                    <p className="card-text">Confirmed Cases: <span className="numbers confirmed">{this.state.data.confirmed}</span> </p>
                    <p className="card-text">Recovered: <span className="numbers recovered">{ this.state.data.recovered}</span> </p>
                </div>
            </div>
        );
    }
}

export default Finaldata;