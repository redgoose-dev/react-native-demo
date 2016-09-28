import React from 'react';
import { StyleSheet } from 'react-native';

const colors = [
	'#38638D', '#B7D6DA', '#73A690', '#C0B770', '#F5D859',
	'#A52531', '#AAB2BE', '#034A8F', '#0472AA', '#D97E30'
];

export const getRandomColors = () => {
	let n = Math.floor(Math.random() * colors.length);
	return colors[n];
};

export default styles = StyleSheet.create({
	parent: {
		flexDirection: 'column',
		flex: 1,
		backgroundColor: '#E7FAFF',
		marginTop: 0,
	},
	box: {
		borderColor: '#11111133',
		borderWidth: 0,
		overflow: 'hidden',
	},

	topBlock: {
		flexDirection: 'row',
		flex: 5,
	},
	bottomBlock: {
		flex: 2,
		flexDirection: 'row',
	},

	leftCol: {
		flex: 2,
	},
	cellOne: {
		flex: 1,
		backgroundColor: getRandomColors(),
	},
	cellTwo: {
		flex: 3,
		backgroundColor: getRandomColors(),
	},
	cellThree: {
		flex: 6,
		backgroundColor: getRandomColors(),
	},
	cellFour: {
		flex: 2,
		backgroundColor: getRandomColors(),
	},
	cellFive: {
		flex: 4,
		backgroundColor: getRandomColors()
	},
	bottomRight: {
		flexDirection: 'column',
		flex: 2,
	},
	cellSix: {
		flex: 1,
		backgroundColor: getRandomColors(),
	},
	cellSeven: {
		flex: 1,
		backgroundColor: getRandomColors(),
	},

	exampleCell: {
		borderWidth: 1,
		textAlign: 'center',
	}

});