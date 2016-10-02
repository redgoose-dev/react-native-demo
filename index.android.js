import React, { Component } from 'react';
import { AppRegistry, View, Text, BackAndroid } from 'react-native';

import Intro from './intro';

let navigator =  null;


class reactNativeDemo extends Component {

	_updateNavigator(nav) {
		navigator = nav;
	}

	componentDidMount() {
		BackAndroid.addEventListener('hardwareBackPress', () => {
			if (navigator && navigator.getCurrentRoutes().length > 1)
			{
				navigator.pop();
				return true;
			}
			return false;
		});
	}

	render() {
		return (
			<View style={{ flex: 1, marginTop: 0 }}>
				<Intro updateNavigator={this._updateNavigator} />
			</View>
		);
	}
}

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);