import React, { Component } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

import { Strong, Em } from './InlineElements';


export default class TextComponents extends Component {

	render() {
		return (
			<View style={styles.contents}>
				<View style={styles.profile}>
					<Image
						source={require('../assets/redgoose.png')}
						resizeMode="cover"
						style={styles.profileImage}
					/>
				</View>
				<Text>Hello <Strong>world</Strong>{'\n'}</Text>
				<Text>This is <Em>ITALIC</Em></Text>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	contents : {
		alignItems: 'center',
	},
	profile : {
		marginBottom: 30,
	},
	profileImage : {
		width: 100,
		height: 100,
		borderRadius: 50
	}
});