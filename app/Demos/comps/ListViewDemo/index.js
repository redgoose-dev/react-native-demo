import React, { Component } from 'react';
import { View, Text, TouchableHighlight, Navigator } from 'react-native';

import Index from './ListViewIndex';
import Article from './ListViewArticle';


export default class ListViewDemo extends Component {

	render() {
		if (!this.props.nav.route.srl) {
			return (
				<Index
					gotoArticle={(srl, title) => {
						this.props.push({
							type: 'View',
							srl: srl,
							compName: this.props.nav.route.compName,
							title: title
						});
					}}
					nav={this.props.nav}/>
			);
		} else {
			return (
				<Article
					nav={this.props.nav}
					srl={this.props.nav.route.srl}
					title={this.props.nav.route.title}
				/>
			);
		}
	}
}