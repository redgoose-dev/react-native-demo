import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';

import css from './css';


export default class Navigation extends Component {

	createButton(item, key) {
		return (
			<TouchableHighlight
				style={css.header__button}
				underlayColor="#ffffff00"
				activeOpacity={0.7}
				onPress={(item.action) && item.action}
				key={`headRightButton_${key}`}>
				<Text style={css.header__buttonText}>{item.name}</Text>
			</TouchableHighlight>
		);
	}

	render() {

		let leftButtons = this.props.leftButtons || [];
		if (this.props.isBack)
		{
			leftButtons.push({
				name: 'Back',
				action: () => { this.props.nav && this.props.nav.navigator.pop() }
			});
		}

		return (
			<View style={css.header}>
				<View style={[css.header__nav, css.header__navLeft]}>
					{(leftButtons) && leftButtons.map(this.createButton)}
				</View>
				<View style={css.header__title}>
					<Text style={css.header__titleText}>{this.props.title}</Text>
				</View>
				<View style={[css.header__nav, css.header__navRight]}>
					{(this.props.rightButtons) && this.props.rightButtons.map(this.createButton)}
				</View>
			</View>
		);
	}
}