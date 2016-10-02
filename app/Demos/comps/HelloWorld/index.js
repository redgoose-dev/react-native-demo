import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';

import Navigation from '../../../../comps/Navigation/Navigation';

import { Hr } from '../../../../comps/GlobalElements';
import TextComponents from './TextComponents';
import Touchs from './Touchs';


export default class Helloworld extends Component {

	render() {
		return (
			<View style={{ flex: 1, backgroundColor: '#fff' }}>
				<Navigation
					nav={this.props.nav}
					isBack="true"
					title={this.props.nav.route.compName}/>
				<View style={{ flex: 1, justifyContent: 'center' }}>
					<TextComponents/>
					<Hr color="#cccccc"/>
					<Touchs/>
				</View>
			</View>
		);
	}
}