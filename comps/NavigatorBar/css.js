import { StyleSheet } from 'react-native';

export default css = StyleSheet.create({
	viewport: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		height: 50,
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderBottomColor: '#aaa',
	},
	header__center: {
		flex: 1,
		justifyContent: 'center',
	},
	header__side: {
		position: 'absolute',
		top: 0,
		bottom: 0,
		flexDirection: 'row',
	},
	header__sideLeft: {
		left: 0,
	},
	header__sideRight: {
		right: 0,
	},

	header__title: {
		textAlign: 'center',
		fontSize: 18,
		fontWeight: 'bold',
		color: '#000',
	},

	header__button: {
		paddingHorizontal: 8,
		justifyContent: 'center',

	},
	header__buttonText: {
		fontSize: 12,
		color: '#1695A3',
	},
});