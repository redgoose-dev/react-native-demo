import React, { Component } from 'react';
import { View, Image, Dimensions } from 'react-native';

var {height, width} = Dimensions.get('window');


export default class ImageLoader extends Component {

	constructor(props) {
		super(props);
		this.state = {
			width: 100,
			height: 100,
			updated: false,
		}
	}

	componentDidMount() {
	}

	shouldComponentUpdate(props, state) {
		if (state.updated) return true;

		let newWidth = width - (props.marginWidth || 0);

		if (props.fullResize && props.src)
		{
			Image.getSize(props.src, (w, h) => {
				let ratio = newWidth / w;
				this.setState({
					width: newWidth,
					height: h * ratio,
					updated: true,
				});
			});
		}
		return true;
	}

	render() {
		return (
			<Image
				source={{ uri: this.props.src }}
				resizeMode={this.props.resizeMode || 'cover'}
				style={[
					{ width: this.state.width, height: this.state.height },
					this.props.css
				]}
			/>
		);
	}
}