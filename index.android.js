import React, { Component } from 'react';
import { AppRegistry, View, Text } from 'react-native';

import Intro from './intro';


class reactNativeDemo extends Component {
	render() {
		return (
			<View style={{ flex: 1, marginTop: 0 }}>
				<Intro/>
			</View>
		);
	}
}

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);