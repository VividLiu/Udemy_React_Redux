import React, {Component} from "react";
import {connect} from "react-redux";
import Chart from "../components/chart";
import GoogleMap from "../components/google_map";

class WeatherList extends Component{
	renderCityWeather(cityData){
		const name = cityData.city.name;
		const temps = cityData.list.map((item)=>item.main.temp);
		const pressures = cityData.list.map((item)=>item.main.pressure);
		const humiditys = cityData.list.map((item)=>item.main.humidity);
		const {lon, lat} = cityData.city.coord;

		return (
			<tr key={name}>
				<td><GoogleMap lon={lon} lat={lat} /></td>
				<td><Chart data={temps} color="red" unit="K"/></td>
				<td><Chart data={pressures} color="orange" unit="hPa"/></td>
				<td><Chart data={humiditys} color="purple" unit="%"/></td>
			</tr>
		);
	}

	render(){
		return (
			<table className="table table-hover">
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (K)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderCityWeather)}
				</tbody>
			</table>
		);
	}
}

function mapStateToProps(state){
	return {
		weather: state.weather
	}
}

export default connect(mapStateToProps)(WeatherList);