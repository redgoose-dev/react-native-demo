import React, { Component } from 'react';
import { View, Text, TextInput, ScrollView, Image } from 'react-native';

import css from '../css';
import Navigation from '../../../comps/Navigation/Navigation';
import ImageLoader from '../../../comps/ImageLoader/ImageLoader';


class Biography extends Component {

	render() {
		return (
			<View style={css.base.viewport}>
				<Navigation
					nav={this.props.nav}
					title="Biography"
					isBack="true"
				/>

				<ScrollView style={css.biography.wrap}>
					<View style={css.biography.figure}>
						<Image
							source={require('../../../assets/cod.jpg')}
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
			</View>
		);
	}
}


export default Biography;