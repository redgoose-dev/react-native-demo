import React, { Component, PropTypes } from 'react';
import { View, Text, StyleSheet, TouchableHighlight } from 'react-native';
import { VisibilityFilters } from '../actions/todoActions';


export default class Tab extends Component {

	constructor(props) {
		super(props);
		this.state = {
			filter: this.props.active
		}
	};

	updateFilter(key) {
		this.setState({
			filter: key
		});
		this.props.onUpdate && this.props.onUpdate(key);
	}

	makeButton(params) {
		return (
			<TouchableHighlight
				style={[
					css.button,
					(params.active) ? css.buttonActive : {},
					(params.first) ? css.buttonFirst : {}
				]}
				onPress={(!params.active) ? (() => this.updateFilter(params.filter)) : null}
				underlayColor="rgba(255,255,255,.5)"
				activeOpacity={1}>
				<Text style={[
					css.text,
					params.active && css.textActive
				]}>
					{params.name}
				</Text>
			</TouchableHighlight>
		);
	}

	render() {
		return (
			<View style={[ css.base, this.props.style ]}>
				{this.makeButton({
					active: (VisibilityFilters.SHOW_ALL == this.state.filter),
					filter: VisibilityFilters.SHOW_ALL,
					name: 'All',
					first: true
				})}
				{this.makeButton({
					active: (VisibilityFilters.SHOW_ACTIVE == this.state.filter),
					filter: VisibilityFilters.SHOW_ACTIVE,
					name: 'Active',
					first: false
				})}
				{this.makeButton({
					active: (VisibilityFilters.SHOW_COMPLETED == this.state.filter),
					filter: VisibilityFilters.SHOW_COMPLETED,
					name: 'Completed',
					first: false,
				})}
			</View>
		);
	}
}

const css = StyleSheet.create({
	base: {
		flexDirection: 'row',
		borderWidth: StyleSheet.hairlineWidth,
		borderRadius: 3,
		borderColor: '#1595A3',
	},
	button: {
		flex: 1,
		paddingVertical: 10,
		borderLeftWidth: StyleSheet.hairlineWidth,
		borderColor: '#1595A3',
	},
	buttonFirst: {
		borderLeftWidth: 0,
	},
	buttonActive: {
		backgroundColor: '#1595A3',
	},
	text: {
		textAlign: 'center',
		fontSize: 12,
		color: '#1595A3',
	},
	textActive: {
		color: '#fff',
	},
});