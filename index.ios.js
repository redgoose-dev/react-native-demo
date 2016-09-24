import React, {Component} from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';

import { Hr } from './demos/GlobalElements';
import TextComponents from './demos/TextComponents/TextComponents';
import Touchs from './demos/Touchs/Touchs';
import ListViewDemo from './demos/ListView/ListViewIndex';
import SwitchDemo from './demos/Switch/SwitchDemo';


class reactNativeDemo extends Component {

	basicDemo() {
		return (
			<View style={styles.container}>
				<TextComponents/>
				<Hr color="#cccccc"/>
				<Touchs/>
			</View>
		);
	}

	listViewDemo() {
		return (
			<View style={styles.contents}>
				<ListViewDemo/>
			</View>
		);
	}

	switchDemo() {
		return (
			<SwitchDemo/>
		);
	}


	render() {
		return this.switchDemo();
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
	},
	containerMiddle: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
		backgroundColor: '#F5FCFF',
	},
	contents: {
		flex: 1,
		marginTop: 22
	}
});

AppRegistry.registerComponent('reactNativeDemo', () => reactNativeDemo);
