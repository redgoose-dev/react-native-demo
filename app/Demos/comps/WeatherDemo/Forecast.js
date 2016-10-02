import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Hr } from '../../../../comps/GlobalElements';

class Forecast extends Component {
	render() {
		return (
			<View style={styles.container}>
				<Hr/>
				<Text style={styles.bigText}>
					{this.props.main}
				</Text>
				<Text style={styles.mainText}>
					Current conditions: {this.props.description}
				</Text>
				<Text style={styles.bigText}>
					{this.props.temp}℉
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		marginTop: 20
	},
	bigText: {
		flex: 1,
		fontSize: 20,
		textAlign: 'center',
		color: '#ffffff',
		margin: 10
	},
	mainText: {
		flex: 1,
		fontSize: 14,
		textAlign: 'center',
		color: '#ffffff',
	}
});

export default Forecast;