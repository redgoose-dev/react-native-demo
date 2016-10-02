import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Navigation from '../../../../comps/Navigation/Navigation';
import Switch from './Switch';


export default class SwitchDemo extends Component {

	constructor(props)
	{
		super(props);
		this.state = { val: false };
	}

	_onValueChange(val)
	{
		this.setState({ val: val });
	}

	render()
	{
		let colorClassName = this.state.val ? styles.appleContainer : styles.bananaContainer;

		return (
			<View style={styles.viewport}>
				<Navigation
					nav={this.props.nav}
					isBack="true"
					title={this.props.nav.route.compName}
				/>
				<View style={[ styles.container, colorClassName ]}>
					<Text style={styles.welcome}>Hello switch demo</Text>
					<Switch onValueChange={this._onValueChange.bind(this)}/>
				</View>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
	container: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	appleContainer: {
		backgroundColor: '#D0232B',
	},
	bananaContainer: {
		backgroundColor: '#FFC649',
	},
	welcome: {
		fontSize: 24,
		color: '#ffffff',
		fontWeight: 'bold',
		margin: 15,
	}
});