import React, { Component } from 'react';
import { View, Text, ListView, StyleSheet, TouchableHighlight } from 'react-native';

import Navigation from '../../comps/Navigation/Navigation';

const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const comps = ds.cloneWithRows([
	{
		name: 'Hello World',
		description: '기본 컴포넌트 테스트입니다.',
		comp: 'HelloWorld'
	},
	{
		name: 'List view demo',
		description: '목록 컴포넌트 테스트를 위한 데모입니다.',
		comp: 'ListViewDemo'
	},
	{
		name: 'Switch Controller',
		description: '스위치 조작에 따라 배경색이 달라집니다.',
		comp: 'Switch'
	},
	{
		name: 'Style demo',
		description: '스타일에 대한 테스트',
		comp: 'StyleDemo'
	},
	{
		name: 'Weather infomation',
		description: '지역 날씨 정보를 출력해줍니다.',
		comp: 'WeatherDemo'
	}
]);


export default class DemoIndex extends Component {

	constructor(props) {
		super(props);
	}

	_renderRow(row, sectionID, rowID) {
		return (
			<TouchableHighlight
				style={css.item}
				underlayColor='rgba(0, 0, 0, 0.05)'
				onPress={() => { this.props._select(row.comp) }}>
				<View style={css.item__wrap}>
					<View style={css.item__body}>
						<Text style={css.item__title}>{row.name}</Text>
						<Text style={css.item__desc}>{row.description}</Text>
					</View>
					<View style={css.item__go}>
						<Text style={css.item__goText}>GO</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={css.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Component demos"/>

				<ListView
					dataSource={comps}
					enableEmptySections={true}
					renderRow={this._renderRow.bind(this)}/>
			</View>
		);
	}
}

const css = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
	item: {
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#ccc',
	},
	item__wrap: {
		paddingHorizontal: 15,
		flexDirection: 'row'
	},
	item__body: {
		flex: 1,
		paddingVertical: 10,
	},
	item__title: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	item__desc: {
		marginTop: 3,
		fontSize: 11,
		color: '#666',
	},
	item__go: {
		width: 40,
		alignItems: 'flex-end',
		justifyContent: 'center',
	},
	item__goText: {
		fontSize: 11,
		fontWeight: 'bold',
		color: '#1595A3',
	},
});