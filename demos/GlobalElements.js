import React, {Component} from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class Hr extends Component {

	constructor(props) {
		super(props);
	}

	defaultProps = {
		height : 1,
		color : '#cccccc'
	};

	render() {
		return (
			<View style={
				[
					styles.hr, {
						height: this.props.height || this.defaultProps.height,
						backgroundColor: this.props.color || this.defaultProps.color
					}
				]
			}/>
		);
	}

}

const styles = StyleSheet.create({
	hr : {
		marginTop: 30,
		marginBottom: 30
	}
});
