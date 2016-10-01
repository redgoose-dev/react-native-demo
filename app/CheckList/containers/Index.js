import React, { Component } from 'react';
import { View, Text, StyleSheet, ListView, TouchableHighlight } from 'react-native';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });


export default class Index extends Component {

	constructor(props) {
		super(props);
	}

	_renderRow(row, sectionID, rowID) {
		return (
			<View style={css.item}>
				<TouchableHighlight
					onPress={() => { this.props.onCompleteTodo(rowID) }}
					underlayColor="rgba(255,255,255,0)"
					activeOpacity={1}
					style={css.check}>
					<Text style={[
						css.checkText,
						row.completed && css.checkActive
					]}>
						{row.completed ? 'completed' : 'active'}
					</Text>
				</TouchableHighlight>
				<View style={css.body}>
					<Text style={css.bodyText}>{row.text}</Text>
				</View>
				<TouchableHighlight
					onPress={() => { this.props.onRemoveTodo(rowID) }}
					underlayColor="rgba(255,255,255,0)"
					activeOpacity={.7}
					style={css.remove}>
					<Text style={css.removeText}>
						Remove
					</Text>
				</TouchableHighlight>
			</View>
		);
	}

	render() {
		let todos = ds.cloneWithRows(this.props.data);

		return (
			<ListView
				style={css.viewport}
				dataSource={todos}
				enableEmptySections={true}
				renderRow={this._renderRow.bind(this)}
			/>
		);
	}
}

const css = StyleSheet.create({
	viewport: {},
	item: {
		flexDirection: 'row',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ccc',
	},

	check: {
		width: 74,
		paddingLeft: 10,
		justifyContent: 'center',
	},
	checkText: {
		fontSize: 10,
		color: '#1595A3',
		fontWeight: 'bold',
	},
	checkActive: {
		color: '#B64926',
	},

	body: {
		flex: 1,
		paddingHorizontal: 10,
		paddingVertical: 12,
		justifyContent: 'center',
	},
	bodyText: {
		fontSize: 11,
		color: '#222',
	},

	remove: {
		paddingHorizontal: 10,
		justifyContent: 'center',
	},
	removeText: {
		color: '#1595A3',
		fontSize: 10,
	},
});