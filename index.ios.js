import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import Intro from './intro';

let navigator =  null;


class reactNativeDemo extends Component {

	_updateNavigator(nav) {
		navigator = nav;
	}

	render() {
		return (
			<View style={{ flex: 1, marginTop: 22 }}>
				<Intro updateNavigator={this._updateNavigator}/>
			</View>
		);
	}
}

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);