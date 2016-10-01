import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


class Button extends Component {

	render() {
		return (
			<TouchableHighlight
				style={[
					css.button,
					this.props.first && css.button__first,
					this.props.active && css.button__active,
				]}
				underlayColor="rgba(0, 0, 0, 0.05)"
				activeOpacity={1}
				no={this.props.no}
				onPress={(!this.props.active) ? this.props.onPress : null}>
				<Text
					style={[
						css.button__text,
						this.props.active && css.buttonText__active,
					]}>
					{this.props.text || 'button'}
				</Text>
			</TouchableHighlight>
		);
	}
}

export default class Tabbar extends Component {

	constructor(props) {
		super(props);
		this.state = {
			active : this.props.active,
			buttons : this.props.buttons
		};
	}

	componentDidMount() {
		this.props.onSelectScene(this.props.active);
	}

	onSelectButton(no) {
		this.setState({
			active: no
		});
		this.props.onSelectScene(no);
	}

	render() {
		return (
			<View style={css.container}>
				{this.state.buttons.map((item, n) => {
					return (
						<Button
							text={item.text}
							key={`button${n}`}
							no={n}
							first={(n == 0) && 'true'}
							active={(this.state.active == n) ? 'true' : ''}
							onPress={() => this.onSelectButton(n)}/>
					);
				})}
			</View>
		);
	}
}

const css = StyleSheet.create({
	container: {
		flexDirection: 'row',
		height: 46,
		backgroundColor: '#fff',
		borderTopWidth: StyleSheet.hairlineWidth,
		borderTopColor: '#aaa'
	},
	button: {
		flex: 1,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderLeftColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center',
	},
	button__first: {
		borderLeftWidth: 0,
	},
	button__text: {
		fontSize: 12,
		color: '#333',
		fontWeight: 'bold',
	},
	button__active: {
		backgroundColor: '#1595A3',
	},
	buttonText__active: {
		color: '#fff',
	}

});