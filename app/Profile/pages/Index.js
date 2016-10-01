import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, ScrollView, Image } from 'react-native';

import css from '../css';
import Navigation from '../../../comps/Navigation/Navigation';
import Input from '../Fields/Input';
import Link from '../Fields/Link';


class Index extends Component {

	constructor(props) {
		super(props);
	}

	onChangeAvatar() {
		console.log('on change avatar');
	}

	render() {
		return (
			<View style={css.base.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Profile"
				/>

				<ScrollView style={css.index.viewport}>
					<View style={css.index.avatar}>
						<TouchableHighlight
							style={css.index.avatar__link}
							underlayColor="rgba(0, 0, 0, 0)"
							onPress={this.onChangeAvatar}>
							<View style={css.index.avatar__wrap}>
								<Image style={css.index.avatar__image} source={require('../../../assets/redgoose.png')} />
								<Text style={css.index.avatar__text}>프로필 사진 바꾸기</Text>
							</View>
						</TouchableHighlight>
					</View>

					<View style={css.form}>
						<Input label="Name" placeholder="name" value="redgoose"/>
						<Input label="Homepage" placeholder="homepage address" value="http://redgoose.me" />
						<Input label="E-Mail" placeholder="email address" type="email-address" />
						<Link
							label="Description"
							onPress={() => {
								this.props.nav.navigator.push(this.props.routes[1]);
							}}
						/>
						<Link
							label="Biography"
							onPress={() => {
								this.props.nav.navigator.push(this.props.routes[2]);
							}}
						/>
					</View>
				</ScrollView>
			</View>
		);
	}
}

export default Index;