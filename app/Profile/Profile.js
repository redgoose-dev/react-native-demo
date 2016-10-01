import React, { Component } from 'react';
import { Navigator } from 'react-native';

import Index from './pages/Index';
import Description from './pages/Description';
import Biography from './pages/Biography';


const routes = [
	{ index: 0 },
	{ index: 1 },
	{ index: 2 },
];


export default class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	scenes = (route, navigator) => {
		switch (route.index) {
			case 0:
				return (
					<Index
						nav={{ route: route, navigator: navigator }}
						routes={routes}
					/>
				);
				break;
			case 1:
				return (
					<Description
						nav={{ route: route, navigator: navigator }}
						routes={routes}
					/>
				);
				break;
			case 2:
				return (
					<Biography
						nav={{ route: route, navigator: navigator }}
						routes={routes}
					/>
				);
				break;
		}
	};

	render() {
		return (
			<Navigator
				initialRoute={routes[0]}
				renderScene={this.scenes}
			/>
		);
	}
}
