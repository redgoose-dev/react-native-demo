import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, WebView } from 'react-native';


const ENDPOINT = 'http://projects.redgoose.me/2015/goose/app/first-gallery/ajax/';

export default class ListViewArticle extends Component {

	constructor(props) {
		super(props);
		this.state = {
			status: 'empty',
			data : null
		};
	}

	componentDidMount() {
		if (this.props.srl)
		{
			console.log(ENDPOINT + 'article/' + this.props.srl + '/');
			fetch(ENDPOINT + 'article/' + this.props.srl + '/')
				.then((response) => response.json())
				.then((rjson) => {
					if (rjson.state !== 'success') return false;
					this.setState({
						status: 'success',
						data : rjson
					});
				})
				.catch(function(error) {
					console.log('There has been a problem with your fetch operation: ' + error.message);
					throw error;
				});
		}
	}

	render() {
		switch(this.state.status) {
			case 'empty':
				return (
					<View>
						<Text>not found data</Text>
					</View>
				);
				break;
			case 'success':
				let data = this.state.data;
				return (
					<View style={css.base.viewport}>
						<View style={css.base.container}>
							<View style={css.head.base}>
								<Text style={css.head.title}>
									{(data.category.name) && `[${data.category.name}] `}
									{data.article.title}
								</Text>
								<View style={css.head.meta}>
									<Text style={css.head.metaItem}>{data.article.regdate}</Text>
									<Text style={css.head.metaItem}>srl: {data.article.srl}</Text>
									<Text style={css.head.metaItem}>hit: {data.article.hit}</Text>
								</View>
							</View>
							<WebView
								style={css.body.content}
								source={{uri: 'http://projects.redgoose.me/2015/goose/app/first-gallery/article/' + data.article.srl + '/'}}
							/>
						</View>
					</View>
				);
				break;
		}
	}
}


const css = {
	base : StyleSheet.create({
		viewport: {
			flex: 1,
		},
		container: {
			flex: 1,
			backgroundColor: '#ffffff'
		},
	}),
	head : StyleSheet.create({
		base: {
			paddingHorizontal: 10,
			paddingVertical: 12,
			backgroundColor: '#eeeeee',
		},
		title: {
			fontSize: 16,
			fontWeight: 'bold',
		},
		meta: {
			marginTop: 3,
			flexDirection: 'row',
		},
		metaItem: {
			marginRight: 10,
			fontSize: 10,
			color: '#333',
		},
	}),
	body : StyleSheet.create({
		content: {
			flex: 1,
			borderWidth: 5,
			borderColor: 'red',
		},
	}),
};