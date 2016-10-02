import React, { Component } from 'react';
import { View, Text, Navigator } from 'react-native';

import DemoIndex from './DemoIndex';
import DemoView from './DemoView';


export default class Demos extends Component {

	constructor(props) {
		super(props);
	}

	componentDidMount() {
		this.props.updateNavigator(this.refs.Navigator);
	}

	scene(route, navigator) {
		switch(route.type) {
			case 'Index':
				return (
					<DemoIndex
						_select={(compName) => {
							navigator.push({
								type: 'View',
								compName: compName
							});
						}}
						nav={{ route: route, navigator: navigator }}/>
				);

			case 'View':
				return (
					<DemoView
						nav={{ route: route, navigator: navigator }}
						push={(params) => {
							navigator.push(params);
						}}
					/>
				);
		}
	}

	render() {
		return (
			<Navigator
				ref="Navigator"
				initialRoute={{ type: 'Index' }}
				renderScene={this.scene}
			/>
		);
	}
}