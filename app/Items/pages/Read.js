import React, { Component } from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableHighlight } from 'react-native';

import Navigation from '../../../comps/Navigation/Navigation';
import jsonData from '../data.js';
import css from '../css';
import ImageLoader from '../../../comps/ImageLoader/ImageLoader';


export default class Read extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: {}
		};
	}

	componentDidMount() {
		this.setState({
			data: jsonData.index[this.props.no]
		});
	}

	render() {
		return (
			<View style={css.base.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Read"
					isBack="true"
				/>
				<ScrollView style={css.read.base}>
					<View style={css.read.header}>
						<Text style={css.read.header__title}>{this.state.data.title}</Text>
						<View style={css.read.header__meta}>
							<Text style={css.read.header__metaItem}>{this.state.data.regdate}</Text>
							<Text style={css.read.header__metaItem}>like: {this.state.data.like}</Text>
						</View>
					</View>
					<View style={css.read.figure}>
						<ImageLoader
							src={this.state.data.img}
							marginWidth={24}
							fullResize="true"
							resizeMode="contain"/>
					</View>
					<View style={css.read.body}>
						<Text style={css.read.bodyText}>{this.state.data.content}</Text>
					</View>
				</ScrollView>
			</View>
		);
	}
}