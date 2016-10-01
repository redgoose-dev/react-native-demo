import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Image, TouchableHighlight } from 'react-native';

import Navigation from '../../../comps/Navigation/Navigation';
import jsonData from '../data.js';
import css from '../css';


export default class Index extends Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			index: ds.cloneWithRows([])
		};
	}

	componentDidMount() {
		this.setState({
			index: this.state.index.cloneWithRows(jsonData.index)
		});
	}

	_renderHeader() {
		return (
			<View style={css.header.wrap}>
				<Text style={css.header.text}>
					sample data items
				</Text>
			</View>
		);
	}

	_renderRow(rowData, sectionID, rowID) {

		return (
			<TouchableHighlight
				style={css.indexItem.base}
				underlayColor='rgba(0, 0, 0, 0.05)'
				onPress={() => { this.props.onSelect(rowID) }}>
				<View style={css.indexItem.wrap}>
					<View style={css.indexItem.figure}>
						<Image
							style={css.indexItem.image}
							resizeMode='cover'
							source={rowData.img}/>
					</View>
					<View style={css.indexItem.body}>
						<Text style={css.indexItem.title}>{rowData.title}</Text>
						<View style={css.indexItem.meta}>
							<Text style={css.indexItem.meta__item}>{rowData.regdate}</Text>
							<Text style={css.indexItem.meta__item}>like: {rowData.like}</Text>
						</View>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={css.base.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Items index"/>

				<ListView
					dataSource={this.state.index}
					enableEmptySections={true}
					renderRow={this._renderRow.bind(this)}
					renderHeader={this._renderHeader}/>
			</View>
		);
	}
}