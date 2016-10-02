import React, { Component } from 'react';
import { Text, View, StyleSheet, TextInput, Image } from 'react-native';

import Navigation from '../../../../comps/Navigation/Navigation';
import Forecast from './Forecast';

const API_KEY = 'bbeb34ebf60ad50f7893e7440a1e2b0b';


export default class WeatherDemo extends Component {
	constructor(props) {
		super(props);

		this.state = {
			zip : '',
			forecast : null
		};
	}

	_handleTextChange(event) {
		var zip = event.nativeEvent.text;
		this.setState({ zip: zip });
		fetch('http://api.openweathermap.org/data/2.5/weather?q=' + zip + '&units=imperial&APPID=' + API_KEY)
			.then((response) => response.json())
			.then((responseJSON) => {
				switch(responseJSON.cod) {
					case 200:
						this.setState({
							forecast: {
								main : responseJSON.weather[0].main,
								description : responseJSON.weather[0].description,
								temp : responseJSON.main.temp
							}
						});
						break;
					default:
						this.setState({
							forecast: {
								message: responseJSON.message
							}
						});
						break;
				}
			})
			.catch((error) => {
				this.setState({
					forecast: {
						message: error
					}
				});
			});
	}

	render() {
		var content = null;
		if (this.state.forecast !== null)
		{
			if (this.state.forecast.main)
			{
				content = <Forecast
					main={this.state.forecast.main}
					description={this.state.forecast.description}
					temp={this.state.forecast.temp}
				/>;
			}
			else if (this.state.forecast.message)
			{
				content = <Text style={styles.message}>{this.state.forecast.message}</Text>
			}
		}

		return (
			<View style={styles.viewport}>
				<Navigation
					nav={this.props.nav}
					isBack="true"
					title={this.props.nav.route.compName}
				/>
				<View style={styles.container}>
					<View style={styles.bg}>
						<Image style={styles.backdrop} source={require('../../../../assets/bg.jpg')} resizeMode="cover"/>
					</View>
					<View style={styles.overlay}>
						<View style={styles.form}>
							<View style={styles.row}>
								<Text style={styles.mainText}>Current weather for</Text>
								<View style={styles.zipContainer}>
									<TextInput
										style={[ styles.zipCode, styles.mainText ]}
										underlineColorAndroid="rgba(0,0,0,0)"
										onSubmitEditing={ (event) => this._handleTextChange(event) }
									/>
								</View>
							</View>
						</View>
						{content}
					</View>
				</View>
			</View>
		);
	}
}

const baseFontSize = 16;

const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
	},
	bg: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		overflow: 'hidden',
	},
	backdrop: {},
	overlay: {
		position: 'absolute',
		left: 0, right: 0, top: 0,
		paddingTop: 40,
		paddingBottom: 40,
		backgroundColor: 'rgba(0,0,0,.5)',
	},
	form: {
		alignItems: 'center',
	},
	row: {
		flexDirection: 'row',
	},
	mainText: {
		fontSize: baseFontSize,
		color: '#ffffff',
	},
	zipContainer : {
		borderBottomColor: '#dddddd',
		borderBottomWidth: StyleSheet.hairlineWidth,
		marginLeft: 5,
		marginTop: 3,
	},
	zipCode : {
		width: 100,
		height: baseFontSize + 6 + 5,
		paddingHorizontal: 10,
		paddingBottom: 5,
	},
	message : {
		fontSize: 14,
		color: 'red',
	}
});