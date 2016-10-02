import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator } from 'react-native';

import Index from './pages/Index';
import Read from './pages/Read';


export default class Items extends Component {

	constructor(props) {
		super(props);
		this.state = {

		}
	}

	componentDidMount() {
		this.props.updateNavigator(this.refs.Navigator);
	}

	onSelectItem(no, navigator) {
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
				ref="Navigator"
				initialRoute={{ title: 'Index', index: 0 }}
				renderScene={this.scene}
			/>
		);
	}
}