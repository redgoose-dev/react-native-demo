import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableHighlight, Navigator } from 'react-native';

import css from './css';

export default class NavigatorBar extends Component {

	static propTypes = {
		renderScenes: React.PropTypes.func
	};

	constructor(props) {
		super(props);
	}

	scene(route, navigator) {
		return (
			<View style={css.viewport}>
				<View style={css.header}>
					<View style={[css.header__center]}>
						<Text style={[css.header__title]}>{route.title}</Text>
					</View>
					<View style={[css.header__side, css.header__sideLeft]}>
						{(route.index > 0) ? (
							<TouchableHighlight
								style={[css.header__button]}
								underlayColor="rgba(0, 0, 0, 0)"
								onPress={() => { navigator.pop() }}>
								<Text style={css.header__buttonText}>Back</Text>
							</TouchableHighlight>
						) : null}
					</View>
					<View style={[css.header__side, css.header__sideRight]}>
					</View>
				</View>
				{this.props.renderScenes(route, navigator)}
			</View>
		);
	}

	render() {
		return (
			<Navigator
				initialRoute={this.props.routes[0]}
				renderScene={this.scene.bind(this)}
			/>
		);
	}
}