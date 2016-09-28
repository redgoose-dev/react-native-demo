import { StyleSheet } from 'react-native';

export default css = {
	base: {
		viewport: {
			flex: 1,
			backgroundColor: '#fff',
		},
	},
	header: StyleSheet.create({
		wrap: {
			paddingHorizontal: 15,
			paddingVertical: 12,
			backgroundColor: '#eee',
		},
		text: {
			fontSize: 12,
			fontWeight: 'bold',
			color: '#222',
		},
	}),
	indexItem: StyleSheet.create({
		base: {
			borderBottomWidth: StyleSheet.hairlineWidth,
			borderBottomColor: '#aaa',
		},
		wrap: {
			flexDirection: 'row',
		},
		figure: {},
		image: {
			width: 60,
			height: 60,
		},
		body: {
			paddingLeft: 10,
			justifyContent: 'center'
		},
		title: {
			fontSize: 13,
			fontWeight: 'bold',
			color: '#333',
		},

		meta: {
			marginTop: 4,
			flexDirection: 'row',
		},
		meta__item: {
			marginRight: 8,
			fontSize: 10,
			color: '#666',
		},
	}),
	read: StyleSheet.create({
		base: {},

		header: {
			padding: 12,
			backgroundColor: '#f5f5f5',
		},
		header__title: {
			fontSize: 14,
			color: '#111',
			fontWeight: 'bold',
		},
		header__meta: {
			marginTop: 4,
			flexDirection: 'row',
		},
		header__metaItem: {
			marginRight: 8,
			fontSize: 10,
			color: '#666',
		},

		figure: {
			paddingVertical: 12,
			alignItems: 'center',
		},
		figure__image: {
		},

		body: {
			paddingHorizontal: 12,
		},
		bodyText: {
			fontSize: 14,
		},
	})
};