import React, { Component } from 'react';
import { StyleSheet, View, Text, ListView, Image, TouchableHighlight } from 'react-native';

const GOOSE_PATH = 'http://projects.redgoose.me/2015/goose/demo/';
const ENDPOINT = 'http://projects.redgoose.me/2015/goose/app/first-gallery/ajax/';


export default class ListViewIndex extends Component {

	constructor(props) {
		super(props);
		const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
		this.state = {
			dataSource: ds.cloneWithRows([])
		};
	}

	componentDidMount() {
		this._refreshIndex();
	}

	_refreshIndex() {
		fetch(ENDPOINT)
			.then((response) => response.json())
			.then((rjson) => {
				if (rjson.state !== 'success') return false;
				this.setState({
					dataSource: this.state.dataSource.cloneWithRows(rjson.articles)
				});
			})
			.catch(function(error) {
				console.log('There has been a problem with your fetch operation: ' + error.message);
				throw error;
			});
	}

	_onPress(event, srl) {
		this.props.goComp(1, srl);
	};

	_renderRow(rowData) {

		if (!rowData.title) return null;

		let like = (rowData.json.like) ? (
			<Text>, Like: {rowData.json.like}</Text>
		) : null;

		return (
			<TouchableHighlight
				style={{ flex: 1 }}
				underlayColor="rgba(0, 0, 0, 0.05)"
				onPress={ (event) => this._onPress(event, parseInt(rowData.srl)) }>
				<View style={styles.item}>
					<Image
						style={styles.thumbnailImage}
						source={{ uri: GOOSE_PATH + rowData.json.thumbnail.url }}
					/>
					<View style={styles.itemBody}>
						<Text style={styles.itemTitle}>{rowData.title}</Text>
						<Text style={styles.itemDescription}>
							<Text>srl: {rowData.srl}</Text>
							<Text>, {rowData.regdate}</Text>
							<Text>, Hit: {rowData.hit}</Text>
							{like}
						</Text>
					</View>
				</View>
			</TouchableHighlight>
		);
	}

	_renderHeader() {
		return (
			<View style={styles.header}>
				<Text style={styles.headerText}>
					redgoose.me items
				</Text>
			</View>
		)
	}

	_renderFooter() {
		return (
			<View style={styles.footer}>
				<Text>footer area</Text>
			</View>
		);
	}

	render() {
		return (
			<ListView
				style={{ marginTop: 0 }}
				dataSource={this.state.dataSource}
				enableEmptySections={true}
				renderRow={this._renderRow.bind(this)}
				renderHeader={this._renderHeader}
				renderFooter={this._renderFooter}/>
		);
	}
}

const styles = StyleSheet.create({
	header: {
		backgroundColor: '#b31f37',
		paddingHorizontal: 20,
		paddingVertical: 12,
	},
	headerText: {
		fontWeight: 'bold',
		color: '#ffffff'
	},
	footer: {
		backgroundColor: '#eeeeee',
		paddingHorizontal: 20,
		paddingVertical: 12,
	},

	item: {
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: '#dddddd',
		padding: 8,
		flexDirection:'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	thumbnailImage: {
		width: 60,
		height: 60,
	},
	itemBody: {
		flex: 1,
		paddingVertical: 5,
		paddingHorizontal: 8,
	},
	itemTitle: {
		fontSize: 14,
		fontWeight: 'bold',
	},
	itemDescription: {
		marginTop: 5,
		fontSize: 11,
		color: '#777777',
	}
});
