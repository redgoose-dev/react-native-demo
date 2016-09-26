import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import {Hr} from './demos/GlobalElements';
import TextComponents from './demos/TextComponents/TextComponents';
import Touchs from './demos/Touchs/Touchs';
import ListViewDemo from './demos/ListView/ListViewDemo';
import SwitchDemo from './demos/Switch/SwitchDemo';
import StyleDemo from './demos/StyleDemo/FlexDemo';
import WeatherDemo from './demos/WeatherDemo/WeatherDemo'


class reactNativeDemo extends Component {

	basicDemo() {
		return (
			<View style={styles.basicDemo}>
				<TextComponents/>
				<Hr color="#cccccc"/>
				<Touchs/>
			</View>
		);
	}

	listViewDemo() {
		return ( <ListViewDemo/> );
	}

	switchDemo() {
		return ( <SwitchDemo/> );
	}

	styleDemo() {
		return ( <StyleDemo/> );
	}

	weatherDemo() {
		return ( <WeatherDemo/> );
	}

	render() {
		return (
			<View style={styles.viewport}>
				{ this.weatherDemo() }
			</View>
		);
	}

}

const styles = StyleSheet.create({
	viewport: {
		flex: 1,
	},
	basicDemo: {
		flex: 1,
		justifyContent: 'center',
	},
});


export default reactNativeDemo;