import React, { Component } from 'react';
import { View, Text, StyleSheet, Navigator, TouchableHighlight, ScrollView, Image, TextInput } from 'react-native';

import NavigatorBar from '../../comps/NavigatorBar/NavigatorBar';
import css from './css';
import Input from './Fields/Input';
import Link from './Fields/Link';


const routes = [
	{ title: 'Index', index: 0 },
	{ title: 'Description', index: 1 },
	{ title: 'Biography', index: 1 },
];


export default class Profile extends Component {

	constructor(props) {
		super(props);
		this.state = {};
	}

	scenes = (route, navigator) => {
		switch (route.title) {
			case 'Index':
				return this.viewIndex(route, navigator);
				break;
			case 'Description':
				return (
					<View style={css.description.wrap}>
						<TextInput
							style={css.description.input}
							placeholder='please input text'
							editable={true}
							underlineColorAndroid='rgba(0,0,0,0)'
							textAlignVertical='top'
							multiline={true}/>
					</View>
				);
				break;
			case 'Biography':
				return (
					<ScrollView style={css.biography.wrap}>
						<View style={css.biography.figure}>
							<Image
								source={require('../../assets/cod.jpg')}
								resizeMode='cover'
								style={css.biography.image}/>
						</View>
						<View style={css.biography.body}>
							<Text style={css.biography.subTitle}>
								콜 오브 듀티 인피니트 워페어
							</Text>
							<Text style={css.biography.text}>
								과거의 치열한 전투에서부터 섬뜩한 현대전,
								그리고 엑소 수트를 입고 싸우는 미래전까지
								다양한 무대를 배경으로 한 콜 오브 듀티 시리즈는
								이제 우주전으로까지 이어졌다. 테일러 디렉터는
								본 작품의 캠페인 모드에 대해 시리즈의 장점을 그대로
								연장시키되 태양계라는 새로운 배경에서의 우주전 도입으로 인한
								새로운 플레이 감각을 구축하는 것이 목표라고 밝혔다.{'\n'}
								{'\n'}
								기존 작품과는 다른, 무중력 공간에서 싸워야 하는 상황에서
								환경을 적절하게 활용하는 것이 이번 작품의 중요 포인트이다.
								전투가 발생했을 때 전장의 요소요소를 확인한 뒤 엄폐물을 활용해서
								이동하고 숨고 교전을 벌이고 적의 후방을 노리는 전통적인 보병전에서
								나아가 단순한 수평적인 움직임에 수직적인 움직임을 더하는
								무중력 세계만의 이동 방식과 그래플링 훅을 이용해서 360도 회전을
								할 수 있는 등 자유로운 접근이 가능해졌다.
								우주전이지만 여전히 현대전이 생각나는 요소가 있는 반면
								우주 공간에서 화려한 함대전을 펼치는 모습은 묘한 느낌을 자아내기도 한다.
							</Text>
						</View>
					</ScrollView>
				);
				break;
		}
	};

	onChangeAvatar() {
		console.log('on change avatar');
	}

	viewIndex(route, navigator) {
		return (
			<ScrollView style={css.index.viewport}>
				<View style={css.index.avatar}>
					<TouchableHighlight
						style={css.index.avatar__link}
						underlayColor="rgba(0, 0, 0, 0)"
						onPress={this.onChangeAvatar}>
						<View style={css.index.avatar__wrap}>
							<Image style={css.index.avatar__image} source={require('../../assets/redgoose.png')} />
							<Text style={css.index.avatar__text}>프로필 사진 바꾸기</Text>
						</View>
					</TouchableHighlight>
				</View>

				<View style={css.form}>
					<Input label="Name" placeholder="name" value="redgoose"/>
					<Input label="Homepage" placeholder="homepage address" value="http://redgoose.me" />
					<Input label="E-Mail" placeholder="email address" type="email-address" />
					<Link label="Description" onPress={() => { navigator.push(routes[1]) }}/>
					<Link label="Biography" onPress={() => { navigator.push(routes[2]) }}/>
				</View>
			</ScrollView>
		);
	}

	render() {
		return (
			<NavigatorBar
				routes={routes}
				renderScenes={this.scenes}/>
		);
	}
}
