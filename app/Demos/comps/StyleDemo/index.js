import React, { Component } from 'react';
import { View, Text } from 'react-native';

import Navigation from '../../../../comps/Navigation/Navigation';
import styles, { getRandomColors } from './style';


export default class FlexDemo extends Component {
	render() {

		let mondrian = (
			<View style={styles.parent}>
				<View style={styles.topBlock}>
					<View style={styles.leftCol}>
						<View style={[ styles.box, styles.cellOne ]}></View>
						<View style={[ styles.box, styles.cellTwo ]}></View>
					</View>
					<View style={[ styles.box, styles.cellThree ]}></View>
				</View>
				<View style={styles.bottomBlock}>
					<View style={[ styles.box, styles.cellFour ]}></View>
					<View style={[ styles.box, styles.cellFive ]}></View>
					<View style={styles.bottomRight}>
						<View style={[ styles.box, styles.cellSix ]}></View>
						<View style={[ styles.box, styles.cellSeven ]}></View>
					</View>
				</View>
			</View>
		);

		let samples = (
			<View style={styles.parent}>
				<View style={{ flex: 1, flexDirection: 'row' }}>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 1}, styles.exampleCell ]}>cell</Text>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 4}, styles.exampleCell ]}>cell</Text>
				</View>
				<View style={{ flex: 2, flexDirection: 'row' }}>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 1}, styles.exampleCell ]}>cell</Text>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 2}, styles.exampleCell ]}>cell</Text>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 1}, styles.exampleCell ]}>cell</Text>
					<Text style={[ {backgroundColor: getRandomColors(), flex: 1}, styles.exampleCell ]}>cell</Text>
				</View>
			</View>
		);

		return (
			<View style={styles.viewport}>
				<Navigation
					nav={this.props.nav}
					isBack="true"
					title={this.props.nav.route.compName}
				/>
				{mondrian}
			</View>
		);
	}
}