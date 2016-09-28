import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';

import Index from './Index';
import Read from './Read';


export default class Items extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	onSelectItem(no, navigator) {
		//console.log(key);
		navigator.push({
			index: 1,
			title: 'read',
			no: no
		});

	}

	scene = (route, navigator) => {
		switch(route.index) {
			case 0:
				return (
					<Index
						nav={{ route: route, navigator: navigator }}
						onSelect={(key) => this.onSelectItem(key, navigator)}
					/>
				);
				break;
			case 1:
				return (
					<Read
						nav={{ route: route, navigator: navigator }}
						no={route.no}
					/>
				);
				break;
		}
	};

	render() {
		return (
			<Navigator
				initialRoute={{ title: 'Index', index: 0 }}
				renderScene={this.scene}
			/>
		);
	}
}
// initialRouteStack={routes}