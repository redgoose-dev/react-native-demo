import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

export class Strong extends Component {
	render() {
		return (
			<Text style={styles.bold}>
				{this.props.children}
			</Text>
		);
	}
}

export class Em extends Component {
	render() {
		return (
			<Text style={styles.italic}>
				{this.props.children}
			</Text>
		);
	}
}

const styles = StyleSheet.create({
	bold : {
		fontWeight: 'bold'
	},
	italic : {
		fontStyle: 'italic'
	}
});
