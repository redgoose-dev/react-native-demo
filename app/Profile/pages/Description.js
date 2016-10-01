import React, { Component } from 'react';
import { View, TextInput } from 'react-native';

import css from '../css';
import Navigation from '../../../comps/Navigation/Navigation';


class Description extends Component {

	render() {
		return (
			<View style={css.base.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Description"
					isBack="true"
				/>

				<View style={css.description.wrap}>
					<TextInput
						style={css.description.input}
						placeholder='please input text'
						editable={true}
						underlineColorAndroid='rgba(0,0,0,0)'
						textAlignVertical='top'
						multiline={true}/>
				</View>
			</View>
		);
	}
}


export default Description;