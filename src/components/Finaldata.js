import React from 'react';
import CoronaData from '../Api/CoronaData';


class Finaldata extends React.Component {
    state = { data: {} };
    origin = this.props.origin;
    componentDidMount = async () => {
        if (this.props.origin == "India") {
            const response = await CoronaData.get('', {
                params: {country: this.props.origin}
            });
            const data = {};
            data.confirmed = response.data.All.confirmed;
            data.recovered = response.data.All.recovered;
            data.deaths = response.data.All.deaths
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
            data.confirmed = confirmed;
            data.recovered = recovered;
            data.deaths = deaths
            this.setState({ data: data})
        }
        else if(this.props.origin == "Delhi"){
            const response = await CoronaData.get('', {
                params: {country: "India"}
            });
            const data = {};
            data.confirmed = response.data.Delhi.confirmed;
            data.recovered = response.data.Delhi.recovered;
            data.deaths = response.data.Delhi.deaths
            this.setState({ data: data})
            console.log(response.data.Delhi);
            
        }
    }
    render() {
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">{this.props.origin}</h5>
                    <p className="card-text">No. of Deaths: {this.state.data.deaths} </p>
                    <p className="card-text">Confirmed Cases: {this.state.data.confirmed} </p>
                    <p className="card-text">Recovered: { this.state.data.recovered} </p>
                </div>
            </div>
        );
    }
}

export default Finaldata;