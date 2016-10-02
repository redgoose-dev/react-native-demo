import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';

import HelloWorld from './comps/HelloWorld';
import ListViewDemo from './comps/ListViewDemo';
import Switch from './comps/Switch';
import StyleDemo from './comps/StyleDemo';
import WeatherDemo from './comps/WeatherDemo';


export default class DemoView extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		switch(this.props.nav.route.compName) {
			case 'HelloWorld':
				return (
					<HelloWorld nav={this.props.nav}/>
				);

			case 'ListViewDemo':
				return (
					<ListViewDemo
						nav={this.props.nav}
						push={this.props.push}
					/>
				);
			case 'Switch':
				return (
					<Switch nav={this.props.nav}/>
				);
			case 'StyleDemo':
				return (
					<StyleDemo nav={this.props.nav}/>
				);
			case 'WeatherDemo':
				return (
					<WeatherDemo nav={this.props.nav}/>
				);
		}
	}
}

const css = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
});