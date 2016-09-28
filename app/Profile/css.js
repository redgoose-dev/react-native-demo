import { StyleSheet, Dimensions } from 'react-native';


var {height, width} = Dimensions.get('window');

export default css = {
	index: StyleSheet.create({
		viewport: {
		},

		avatar: {
			backgroundColor: '#f5f5f5',
			alignItems: 'center',
			paddingVertical: 20,
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: '#ccc',
		},
		avatar__link: {
			paddingHorizontal: 15,
			paddingVertical: 10,
		},
		avatar__wrap: {
			alignItems: 'center',
		},
		avatar__image: {
			width: 60,
			height: 60,
			borderRadius: 30,
		},
		avatar__text: {
			marginTop: 8,
			fontSize: 11,
			color: '#1595A3',
		},

		form: {

		}
	}),

	description: StyleSheet.create({
		wrap: {
			flex: 1,
			justifyContent: 'flex-start',
		},
		input: {
			flex: 1,
			padding: 15,
			fontSize: 14,
			lineHeight: 30,
		}
	}),

	biography: StyleSheet.create({
		wrap: {
			paddingHorizontal: 0,
			paddingBottom: 15,
		},
		subTitle: {
			marginTop: 10,
			marginBottom: 10,
			fontSize: 16,
			fontWeight: 'bold',
		},
		text: {
			fontSize: 13,
			lineHeight: 20,
		},
		figure: {
			flex: 1,
			alignItems: 'center',
		},
		image: {
			width: width,
			height: 200,
		},
		body: {
			padding: 15,
		}
	}),

};
