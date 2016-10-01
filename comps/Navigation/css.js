import { StyleSheet } from 'react-native';

const css = StyleSheet.create({
	header: {
		flexDirection: 'row',
		paddingVertical: 0,
		backgroundColor: '#ffffff',
		borderBottomWidth: StyleSheet.hairlineWidth,
		borderColor: '#aaaaaa',
		height: 50,
	},
	header__nav: { flex: 1 },
	header__navLeft: { alignItems: 'flex-start' },
	header__navRight: { alignItems: 'flex-end' },

	header__button: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 8,
	},
	header__buttonText: { color: '#1595A3' },

	header__title: {
		flex: 3,
		alignItems: 'center',
		justifyContent: 'center',
	},
	header__titleText: {
		fontSize: 18,
		fontWeight: 'bold',
		color: '#111',
	},
});


export default css;