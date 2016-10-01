import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


export default class State extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return (
			<View style={css.viewport}>
				<View style={[css.area, css.left]}>
					<Text style={css.stateText}>할일 {this.props.count}개 남음</Text>
				</View>
				<View style={[css.area, css.right]}>
					<TouchableHighlight
						onPress={this.props.onClear}
						underlayColor="rgba(0,0,0,0)"
						style={css.clear}>
						<Text style={css.clearText}>clear</Text>
					</TouchableHighlight>
				</View>
			</View>
		);
	}
}

const css = StyleSheet.create({
	viewport: {
		backgroundColor: '#eee',
		flexDirection: 'row',
	},

	area: {
		flex: 1,
		justifyContent: 'center',
	},

	left: { alignItems: 'flex-start' },
	right: { alignItems: 'flex-end' },

	stateText: {
		paddingLeft: 10,
		fontSize: 11,
		color: '#333',
	},

	clear: {
		flex: 1,
		paddingVertical: 10,
		paddingHorizontal: 10,
	},
	clearText: {
		fontSize: 12,
		color: '#1595A3'
	},
});