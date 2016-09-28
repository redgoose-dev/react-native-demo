import React, { Component } from 'react';
import { StyleSheet, View, Text, TouchableHighlight } from 'react-native';


export default class Navigation extends Component {

	render() {

		let buttonBack = (this.props.isBack) && (
			<TouchableHighlight
				style={css.buttonBack}
				underlayColor="#ffffff00"
				activeOpacity={0.7}
				onPress={() => {
					this.props.nav.navigator.pop();
				}}>
				<Text style={css.buttonBack__text}>Back</Text>
			</TouchableHighlight>
		);

		return (
			<View style={css.header}>
				<View style={[css.header__button, css.header__buttonLeft]}>
					{buttonBack}
				</View>
				<View style={css.header__title}>
					<Text style={css.header__titleText}>{this.props.title}</Text>
				</View>
				<View style={[css.header__button, css.header__buttonRight]}/>
			</View>
		);
	}
}


const css = StyleSheet.create({
	header: {
		flexDirection: 'row',
		paddingVertical: 0,
		backgroundColor: '#ffffff',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#aaaaaa',
		height: 50,
	},
	header__button: { flex: 1 },
	header__buttonLeft: {},
	header__buttonRight: {},

	buttonBack: {
		flex: 1,
		justifyContent: 'center',
		paddingLeft: 10,
	},
	buttonBack__text: { color: '#1595A3' },

	header__title: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header__titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#111',
	},
});