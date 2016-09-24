import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';


class Touchs extends Component {

	constructor(props) {
		super(props);
		this.state = { pressing: false };
	}

	_onPressIn = () => {
		this.setState({ pressing: true });
	};

	_onPressOut = () => {
		this.setState({ pressing: false });
	};

	render() {
		return (
			<View style={styles.wrap}>
				<TouchableHighlight
					style={styles.button}
					onPressIn={this._onPressIn}
					onPressOut={this._onPressOut}>
					<View style={[
						styles.buttonWrap, (this.state.pressing ? styles.buttonWrapOn : null)
					]}>
						<Text style={styles.buttonText}>
							{ this.state.pressing ? 'EEK!' : 'PUSH ME' }
						</Text>
					</View>
				</TouchableHighlight>
			</View>
		);
	}

}

const styles = StyleSheet.create({
	wrap: {
		alignItems: 'center'
	},
	button: {
		borderRadius: 50
	},
	buttonWrap: {
		backgroundColor: 'violet',
		borderRadius: 50,
		width: 100,
		height: 100,
		justifyContent: 'center',
		alignItems: 'center'
	},
	buttonText: {
		color: '#ffffff',
		fontWeight: 'bold'
	},
	buttonWrapOn: {
		backgroundColor: 'green'
	}
});


export default Touchs;