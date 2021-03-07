import React from 'react';
import Datamaps from 'datamaps';
import CoronaData from '../Api/CoronaData';
import * as d3 from 'd3-scale';
import GetCountryISO3 from 'country-iso-2-to-3';

class DataMap extends React.Component{

    componentDidMount = async () => {
        const response = await CoronaData.get('', {});
        const dataset = {};
        const confirmed = [];
        for (var key in response.data)
        {
            confirmed.push(response.data[key].All.confirmed);
        }

        var min = Math.min.apply(null, confirmed),
            max = Math.max.apply(null, confirmed);
        

        var paletteScale = d3.scaleLinear()
            .domain([min,max])
            .range(["#ffc9c9", "#fc0303"]);
        
        for (var key in response.data)
        {
            var value = response.data[key].All;
            dataset[GetCountryISO3(response.data[key].All.abbreviation)] = { confirmed: value.confirmed, fillColor: paletteScale(value.confirmed), deaths: value.deaths, recovered: value.recovered};
        }
        new Datamaps({
            element: document.getElementById('container1'),
            projection: 'mercator',
            fills: { defaultFill: '#F5F5F5' },
            data: dataset,
            geographyConfig: {
                borderColor: '#DEDEDE',
                highlightBorderWidth: 2,
                highlightFillColor: function(geo) {
                    return geo['fillColor'] || '#F5F5F5';
                },
                highlightBorderColor: '#B7B7B7',
                popupTemplate: function(geo, data) {
                    if (!data) { return ; }
                    return ['<div class="hoverinfo">',
                        '<strong>', geo.properties.name, '</strong>',
                        '<br>Confirmed Cases: <strong>', data.confirmed, '</strong>',
                        '<br>Recovered Cases: <strong>', data.recovered, '</strong>',
                        '<br>Deaths: <strong>', data.deaths, '</strong>',
                        '</div>'].join('');
                }
            }
        });
    }
    render() {
        return (
            <div id="container1" style={{ width: "80vw", height: "80vh"}}></div>
        );
    }
}

export default DataMap;
