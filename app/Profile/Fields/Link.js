import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


export default class Link extends Component {

	render() {
		return (
			<TouchableHighlight
				underlayColor="rgba(0, 0, 0, .05)"
				onPress={this.props.onPress}>
				<View style={css.field}>
					{(this.props.label) && <View style={css.labelWrap}><Text style={css.label}>{this.props.label}</Text></View>}
					<View style={css.right}>
						<View style={[css.rightView, {marginLeft: 15}]}>
							<Text style={css.rightIcon}>Go</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
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
		height: 40,
	},
	labelWrap: {
		flex: 1,
		justifyContent: 'center',
	},
	label: {
		fontSize: 12,
		paddingLeft: 15,
		color: '#222',
		fontWeight: 'bold',
	},
	right: {
		flex: 1,
		paddingRight: 15,
		flexDirection: 'row',
		justifyContent: 'flex-end',
	},
	rightView: {
		justifyContent: 'center',
	},
	rightText: {
		color: '#666',
	},
	rightIcon: {
		fontSize: 12,
		fontWeight: 'bold',
		textAlign: 'right',
	}
});