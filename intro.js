import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Navigator, Image } from 'react-native';

import {Hr} from './Demos/GlobalElements';
import Tabbar from './comps/Tabbar/Tabbar';
import Items from './app/Items/Items';
import CheckList from './app/CheckList/containers/App';
import Profile from './app/Profile/Profile';

const buttons = [
	{ text: 'Items' },
	{ text: 'Checklist' },
	{ text: 'Profile' },
	{ text: 'Demos' }
];

export default class reactNativeDemo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			content : null
		};
	}

	selectScene(id) {
		switch(id) {
			case 'Items':
				return <Items/>;
				break;
			case 'Checklist':
				return <CheckList/>;
				break;
			case 'Profile':
				return <Profile/>;
				break;
			case 'Demos':
				return <Text>comming</Text>;
				break;
			default:
				return this.emptyComp();
				break;
		}
	}
	onSelectScene(n) {
		this.setState({
			content: buttons[n].text
		});
	}

	emptyComp() {
		return (
			<View style={css.notComp}>
				<Text>Not component</Text>
			</View>
		);
	}

	render() {
		return (
			<View style={css.viewport}>
				<View style={css.container}>
					{this.selectScene(this.state.content)}
				</View>
				<Tabbar onSelectScene={this.onSelectScene.bind(this)} active={1} buttons={buttons}/>
			</View>
		);
	}
}

const css = StyleSheet.create({
	viewport: {
		flex: 1,
	},
	container: {
		flex: 1,
	},
	notComp: {
		flex: 1,
		backgroundColor: '#fff',
		justifyContent: 'center',
		alignItems: 'center',
	}
});