import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight, Navigator } from 'react-native';

import Index from './ListViewIndex';
import Article from './ListViewArticle';


const routes = [
	{ title: 'Index', index: 0 },
	{ title: 'Read', index: 1, srl: null },
];

export default class ListViewDemo extends Component {

	constructor(props) {
		super(props);
		this.state = {
			articleSrl: null
		}
	}

	_header(route, navigator) {

		let back = null;

		switch (route.index)
		{
			case 0:
				break;
			case 1:
				back = (
					<TouchableHighlight
						style={styles.backButton}
						underlayColor="#ffffff00"
						activeOpacity={0.7}
						onPress={() => {
							if (route.index === 0) {
								navigator.push(routes[1]);
							} else {
								navigator.pop();
							}
						}}>
						<Text style={styles.backButtonText}>Back</Text>
					</TouchableHighlight>
				);
				break;
		}

		return (
			<View style={styles.header}>
				<View style={[styles.headerButton, styles.headerButtonLeft]}>
					{back}
				</View>
				<View style={styles.headerTitle}>
					<Text style={styles.headerTitleText}>{route.title}</Text>
				</View>
				<View style={[styles.headerButton, styles.headerButtonRight]}/>
			</View>
		);
	}

	scene = (route, navigator) => {
		return (
			<View style={styles.container}>
				{this._header(route, navigator)}
				<View style={styles.contents}>
					{(route.index == 0) && <Index goComp={(index, srl) => {
						let param = Object.assign({}, routes[index], {srl: srl});
						navigator.push(param);
					}}/>}
					{(route.index == 1) && (<Article srl={route.srl}/>)}
				</View>
			</View>
		);
	};

	render() {
		return (
			<Navigator
				initialRoute={routes[0]}
				initialRouteStack={routes}
				renderScene={this.scene}
			/>
		);
	}

}

const styles = StyleSheet.create({
	container: {
		flex: 1,
	},
	header: {
		flexDirection: 'row',
		paddingVertical: 0,
		backgroundColor: '#ffffff',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#aaaaaa',
		height: 50,
	},
	headerTitle: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	headerTitleText: {
		fontSize: 18,
		fontWeight: 'bold',
	},
	headerButton: {
		flex: 1,
	},
	headerButtonLeft: {},
	headerButtonRight: {},
	contents: {
		flex: 1,
	},
	backButton: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	backButtonText: {
		color: '#1695A3',
	}
});