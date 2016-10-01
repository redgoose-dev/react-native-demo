import React, { Component } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableHighlight } from 'react-native';

export default class AddForm extends Component {

	constructor(props) {
		super(props);
		this.state = {
			value: ''
		};
	}

	onSubmit() {
		if (!this.state.value || !this.props.onAddTodo) return;
		this.props.onAddTodo(this.state.value);
		this.onChangeText('');
	}

	onChangeText(text) {
		this.setState({ value: text });
	}

	render() {
		return (
			<View style={css.base}>
				<TextInput
					ref="addTodo"
					style={css.input}
					maxLength = {200}
					placeholder="Add todo"
					keyboardType="default"
					underlineColorAndroid="rgba(0,0,0,0)"
					value={this.state.value}
					onChangeText={this.onChangeText.bind(this)}
					onSubmitEditing={() => {
						this.onSubmit();
						console.log(this.refs.addTodo);
						this.refs.addTodo.focus();
					}}
					autoFocus={this.state.focus}
				/>
				<TouchableHighlight
					style={css.button}
					onPress={this.onSubmit.bind(this)}
					underlayColor="rgba(21, 149, 163, .7)"
					activeOpacity={1}>
					<Text style={css.buttonText}>ADD</Text>
				</TouchableHighlight>
			</View>
		);
	}
}

const css = StyleSheet.create({
	base: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#aaa',
		flexDirection: 'row'
	},
	input: {
		flex: 1,
		paddingHorizontal: 10,
		fontSize: 14,
		color: '#333',
	},
	button: {
		paddingHorizontal: 20,
		paddingVertical: 12,
		backgroundColor: '#1595A3',
	},
	buttonText: {
		fontSize: 11,
		fontWeight: 'bold',
		color: '#fff',
	}
});