import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';


export default class Input extends Component {

	constructor(props) {
		super(props);
		this.state = {
			text: 'Useless Placeholder',
			value: this.props.value,
		}
	}

	onChangeText(text) {
		this.setState({
			value: text
		});
	}

	render() {
		return (
			<View style={css.field}>
				{(this.props.label) && <View style={css.labelWrap}><Text style={css.label}>{this.props.label}</Text></View>}
				<TextInput
					ref='inputBox'
					style={css.textInput}
					placeholder={this.props.placeholder}
					value={this.state.value}
					keyboardType={this.props.type || 'default'}
					onChangeText={this.onChangeText.bind(this)}
					underlineColorAndroid='rgba(0,0,0,0)'
				/>
			</View>
		);
	}
}


const css = StyleSheet.create({
	field: {
		flex: 1,
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ddd',
		justifyContent: 'center',
		paddingVertical: 0,
		height: 40,
	},
	labelWrap: {
		width: 120,
		justifyContent: 'center',
	},
	label: {
		width: 120,
		fontSize: 12,
		paddingLeft: 15,
		color: '#222',
		fontWeight: 'bold',
	},
	textInput: {
		flex: 1,
		fontSize: 13,
		paddingRight: 15,
		margin: 0,
		padding: 0,
	}
});